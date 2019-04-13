import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import Axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Loader from '../utils/loader';

const jwt = require("jsonwebtoken");

class Meetups extends Component {
    constructor(props) {
        super(props);
        // this.handleRetrieve = this.handleRetrieve.bind(this);
        this.state = {
            meetups: [],
            error: null,
            isLoading: true
        }
    }
    
    componentWillMount() {
        Axios({
            url: 'https://questioners-two-staging.herokuapp.com/api/meetups/upcoming/',
            method: 'GET'
        })
        .then((response) => {
           this.setState({
               meetups: response.data.results,
               isLoading: false
           })
        })
        .catch(error => this.setState({ error, isLoading: false })
        
        );
    }
    

    render() {
        const { meetups, isLoading, error } = this.state;

        const decoded = jwt.decode(localStorage.getItem("token"));
        if (!decoded) {
            this.props.history.push("/")
        }
        return (
            <div>
            {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                    meetups.map(meetup => { 
                    return (
                <MDBContainer className="margins">
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard>
                            <MDBRow className="d-flex justify-content-start">
                                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                {  } { meetup.title }
                                </h3>
                            </MDBRow>
                                <MDBCardBody className="mx-4 mt-4">
                                <p className="card-text"><b>Location</b>: {meetup.location}</p>
                                <p className="card-text "><b>Time</b>: {meetup.scheduled_date}</p>
                                <p className="card-text"><b>About</b>: {meetup.body}</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                    );
                })
                ) : (
                <div className="loader">
                    <Loader />
                </div>
                )}
            </div>
        );
    }
}

export default Meetups;