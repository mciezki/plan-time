import React, { useState, useContext } from 'react';
import './css/AddTask.css';

import { UserContext } from '../store/UserProvider';

const AddTask = ({ add }) => {
    const { user } = useContext(UserContext);

    let minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1
    maxDate = maxDate + "-12-31"

    const [text, setText] = useState('');
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState(minDate)

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleCheckbox = (e) => {
        setChecked(e.target.checked)
    }

    const handleClick = () => {
        if (user) {
            if (text) {
                const setTask = add(text, date, checked);
                if (setTask) {
                    setText(text);
                    setChecked(false);
                    setDate(minDate)
                } else alert('Wprowadź treść zadania!')
            }
        } else alert('Musisz się zalogować')
    }

    return (
        <div className="form">
            <input type="text" placeholder="Wpisz zadanie..." value={text} onChange={handleText} />
            <input type="checkbox" checked={checked} id="important" onChange={handleCheckbox} />
            <label htmlFor="important">Priorytet</label>
            <br />
            <label htmlFor="date">Do kiedy zrobić: </label>
            <input type="date" id="date" value={date} min={minDate} max={maxDate} onChange={handleDate} />
            <br />
            <button onClick={handleClick}>Dodaj</button>
            <hr />
        </div>
    )

}

export default AddTask;