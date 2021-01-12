import React, { useContext } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom';
import { UserContext } from '../store/UserProvider';

import Login from '../components/Login';
import Interface from '../components/Interface';


const Routing = () => {
    const { user } = useContext(UserContext);

    return (
        <Switch>
            <Route exact path="/" render={() => user ? <Interface /> : <Redirect to="/login" />} />
            <Route path="/login" render={() => user ? <Redirect to="/" /> : <Login />} />
            <Route render={() => user ? <Redirect to="/" /> : <Redirect to="/login" />} />
        </Switch>
    )
}

export default Routing;