import React, { useContext } from 'react';
import './css/App.css';

import { UserContext } from '../store/UserProvider';

import { signInWithGoogle } from "../firebase";


const Login = () => {
    const { user } = useContext(UserContext);

    const logIn = () => {
        if (!user) {
            signInWithGoogle()
        }
    }

    return (
        <div className="App">
            <button className="loginbutton" onClick={logIn}>Log In</button>
        </div>
    )
}

export default Login;