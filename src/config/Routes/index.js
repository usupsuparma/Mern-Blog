import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Login, MainApp, Register } from '../../pages';

export const Routes = () => {
    return (
        <Router forceRefresh={true}>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <MainApp />
                </Route>
            </Switch>
        </Router>
    )
}
