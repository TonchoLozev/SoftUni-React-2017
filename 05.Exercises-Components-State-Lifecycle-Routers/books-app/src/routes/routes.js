import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Home';
import AllBooks from '../components/books/AllBooks'
import BookDetails from '../components/books/BookDetails'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/books/all" component={AllBooks}/>
            <Route path="/books/:id" component={BookDetails}/>
        </Switch>
    )
};

export default Routes;