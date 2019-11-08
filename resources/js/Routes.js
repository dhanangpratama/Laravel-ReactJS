import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Register from './pages/Register';

const Routes = props => (
    <Switch>
        <Route pattern='/' exact path='/' component={Home} />
        <Route pattern='/about' path='/about' component={About} />
        <Route pattern='/posts' path='/posts' component={Posts} />
        <Route pattern='/users' path='/users' component={Users} />
        <Route pattern='/register' path='/register' component={Register} />
    </Switch>
);

export default Routes;