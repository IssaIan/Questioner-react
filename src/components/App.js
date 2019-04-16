import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './login';
import Meetups from './meetups';
import Signup from './signup';
import Homepage from './homepage'

class App extends Component {
    render() {
        return (
            <div>
                <ToastContainer />
                <BrowserRouter>
                    <Route exact path='/' component = { Homepage }/>
                    <Route exact path='/login' component = { Login }/>
                    <Route exact path='/meetups' component = { Meetups }/>
                    <Route exact path='/signup' component = { Signup }/>
                </BrowserRouter>
            </div>    
        );
    }
}

export default App;