import React, { useState } from 'react';
import './css/App.css';

import AddTask from './AddTask';
import TaskList from './TaskList';

import { auth } from "../firebase";


const Interface = () => {

    const logOut = () => {
        auth.signOut();
        alert('You were signed out');
    }


    const [tasks, setTasks] = useState([
        {
            id: 0,
            text: 'Dodać osobne taski dla każdego użytkownika',
            date: '2021-03-01',
            important: false,
            finishDate: null,
            active: true
        },
        {
            id: 1,
            text: 'Dostosować CSS',
            date: '2021-03-01',
            important: false,
            finishDate: null,
            active: true
        }
    ])

    let counter = tasks.length;

    const deleteTask = (id) => {
        let tasksList = [...tasks];
        tasksList = tasksList.filter(task => task.id !== id);
        setTasks(tasksList);
    }

    const changeTaskStatus = (id) => {
        const tasksList = [...tasks];
        tasksList.forEach(task => {
            if (task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime()
            }
            setTasks(tasksList);
        })
    }


    const addTask = (text, date, important) => {
        const task = {
            id: counter,
            text,
            date,
            important,
            finishDate: null,
            active: true
        }
        counter++;
        setTasks(prevTasks => [...prevTasks, task]);
        return true;
    }

    return (
        <div className="App">
            <h1>PlanTime App</h1>
            <button className="signout" onClick={logOut}>Log Out</button>
            <AddTask tasks={tasks} add={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} change={changeTaskStatus} />
        </div>
    );
}

export default Interface;
