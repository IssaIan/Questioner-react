import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './login';
import Meetups from './meetups';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component = { Login }/>
                <Route exact path='/meetups' component = { Meetups }/>
            </BrowserRouter>
        );
    }
}

export default App;