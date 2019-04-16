import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="margins title"><h1>Welcome to Questioner!</h1></div>
                <div className="row">
                    <div className="col-md-10 offset-md-1 mr-auto" id="hometext">
                        <p>Crowd-source questions for a meetup. Questioner helps the meetup organizer prioritize questions to be answered. 
                        Other users can vote on asked questions and they bubble to the top or bottom of the log.
                        </p><br></br>
                        <p>If you already have an account, click <a eventkey={5} href='/login'> HERE TO LOGIN!</a></p><br></br>
                        <p>If you do not have an account,<a eventkey={6} href='/signup'> CLICK HERE</a> to SIGN UP!</p>
                    </div> 
                </div>
                
            </div>
        );
    }
}

export default Homepage;