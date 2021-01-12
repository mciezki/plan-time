import React from 'react';

import Task from './Task'

const TaskList = ({ tasks, deleteTask, change }) => {

    const active = tasks.filter(task => task.active);
    const done = tasks.filter(task => !task.active);

    if (done.length >= 2) {
        done.sort((a, b) => {
            return b.finishDate - a.finishDate
        })
    }

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();

            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        })
    }

    const activeTasks = active.map(task => (
        <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            change={change}
        />
    ))

    const doneTasks = done.map(task => (
        <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            change={change}
        />
    ))

    return (
        <>
            <div className="active">
                <h2>Zadania do zrobienia:</h2>
                {activeTasks.length > 0 ? activeTasks : <p>Ale szczęście :)</p>}
            </div>

            <hr />

            <div className='done'>
                <h2>Zadania zrobione <em>({done.length})</em>:</h2>
                {done.length > 5 && <span style={{ fontSize: "10px" }}>Wyświetlonych jest ostatnich 5 zadań</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    )
}

export default TaskList;