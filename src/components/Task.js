import React from 'react';

const Task = ({ task, deleteTask, change }) => {

    const { text, date, id, active, important, finishDate } = task

    const style = {
        color: 'red'
    }

    if (active) {
        return (
            <>
                <p>
                    <strong style={important ? style : null}>{text}</strong> - do <span>{date} </span>
                    <button onClick={() => change(id)}>Zostało zrobione</button>
                    <button onClick={() => deleteTask(id)}>X</button>
                </p>
            </>
        )
    } else {

        const finishTime = new Date(finishDate).toLocaleString()

        return (
            <>
                <p>
                    <strong>{text}</strong> <em>(do {date})</em>
                    <br />
                    - potwierdzenie wykonania: <span>{finishTime} </span>
                    <button onClick={() => deleteTask(id)}>X</button>
                </p>
            </>
        )
    }
}

export default Task;