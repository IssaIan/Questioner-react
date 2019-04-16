import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Questioner</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" eventkey={1} href='/'>Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" eventkey={2} href='/login'>Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" eventkey={3} href='/signup'>Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" eventkey={4} href='/meetups'>Meetups</a>
                        </li>
                        </ul>
                        <span className="navbar-text">
                            Welcome to Questioner!
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}
 export default Navbar;