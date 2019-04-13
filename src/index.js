import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import App from './components/App';


ReactDOM.render(<Navbar />, document.getElementById('nav'))
ReactDOM.render(<App />, document.getElementById('app'));