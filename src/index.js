import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import App from './components/App';
import './css/bootstrap.min.css';
import './css/main.css'


ReactDOM.render(<Navbar />, document.getElementById('nav'))
ReactDOM.render(<App />, document.getElementById('app'));