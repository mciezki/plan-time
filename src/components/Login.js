import React, { useContext } from 'react';
import './css/App.css';

import { UserContext } from '../store/UserProvider';

import { auth, signInWithGoogle } from "../firebase";


const Login = () => {
    const { user } = useContext(UserContext);

    const logInOut = () => {
        if (!user) {
            signInWithGoogle()
        } else {
            auth.signOut();
            alert('You were signed out');
        }
    }

    return (
        <button className="signout" onClick={logInOut}>{user ? 'Sign Out' : 'Log In'}</button>
    )
}

export default Login;