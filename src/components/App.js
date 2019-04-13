import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './login';
import Meetups from './meetups';

class App extends Component {
    render() {
        return (
            <div>
                <ToastContainer />
                <BrowserRouter>
                    <Route exact path='/' component = { Login }/>
                    <Route exact path='/meetups' component = { Meetups }/>
                </BrowserRouter>
            </div>    
        );
    }
}

export default App;