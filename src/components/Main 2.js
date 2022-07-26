
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function Main(props) {
    const { isLoggedIn, handleLoggedIn } = props;

    const showLogin = () => {
        /*
        case 1: already logged in -> show home page
        case 2: hasn't logged in -> show login page
         */
        return isLoggedIn ? (
            <Redirect to="/home" />
        ) : (
            <Login handleLoggedIn={handleLoggedIn} />
        );
    };

    // If user didn't login, redirect to the login page
    const showHome = () => {
        return isLoggedIn ? <Home /> : <Redirect to="/login" />;
    };

    return (
        <div className="main">
            <Switch>
                <Route path="/" exact render={showLogin} />
                <Route path="/login" render={showLogin} />
                <Route path="/register" component={Register} />
                <Route path="/home" render={showHome} />
            </Switch>
        </div>
    );
}

export default Main;

