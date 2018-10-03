import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App/App';
import { NotFound } from './components/NotFound/NotFound';
import { About } from './components/About';
import { Redirect } from 'react-router';
import Rooms from './components/Rooms/Rooms';

export default function getRoutes() {
    return (
        <App>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/about" />} />
                <Route path="/about" component={About} />
                <Route path="/rooms" component={Rooms} />
                <Route path="*" component={NotFound} />
            </Switch>
        </App>
    );
}
