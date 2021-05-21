import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

const authGuard = (Component) => () => {
    return localStorage.getItem("token") ? (
        <Component />
    ) : (
        <Redirect to="/login" />
    );
};

function App(props) {
    return (
    <Router {...props}>
        <Switch>
            <Route path='/signup'>
                <Signup />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/dashboard' render={authGuard(Dashboard)}>
                <Dashboard />
            </Route>
            <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
        </Switch>
    </Router>
    )
}

export default App;


