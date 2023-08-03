// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DriverDetails } from "./DriverDetails.js";
import MyDrivers from "./MyDrivers.js";

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={DriverDetails} />
                <Route exact path="/mydrivers" component={MyDrivers} />
            </Switch>
        </Router>
    );
};


