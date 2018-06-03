import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/HomePage';
import About from '../components/AboutPage';
import NotFound from '../components/NotFoundPage';
import ParamPage from '../components/ParamPage';
import PrivateRout from '../components/PrivateRoute'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path={"/page/with/:id"} component={ParamPage}/>
            <Redirect from="/about-us" to="/about"/>
            <PrivateRout path="/private" component={About}/>
            <Route component={NotFound}/>
        </Switch>
    )
};

export default Routes;