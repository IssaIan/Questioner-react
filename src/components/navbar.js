import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Questioner</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" eventkey={1} href='/'>Login<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" eventkey={2} href='/meetups'>Meetups</a>
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