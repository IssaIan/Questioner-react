import React, { Component } from 'react';
import Axios from 'axios';
import { toast } from "react-toastify";
import Loader from '../utils/loader';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            nick_name: '',
            email: '',
            password: '',
            confirm_password: '',
            isLoading: false, 
            
        }
    }

    handleSignUp = (event) => {
        event.preventDefault();
        console.log(this.state)
        if (this.state.password !== this.state.confirm_password) {      
            toast.error("Password mis-match!", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
              hideProgressBar: false,
              pauseOnHover: true,
            });
        } else { 
        this.setState({ isLoading: true });
        var myData = {
            'name': this.state.name,
            'nick_name': this.state.nick_name,
            'email': this.state.email,
            'password': this.state.password,
            }
        Axios({
            url: 'https://questioners-two-staging.herokuapp.com/api/auth/signup/',
            data: myData,
            method: 'POST',
        })
        .then((response) => {
            console.log(response.id)
            if (response.data.id) {
                this.props.history.push('/login');
                toast.warn("Click the link sent to your email to verify!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                hideProgressBar: true,
                pauseOnHover: true,
              });
            }
            
        })
        .catch((error) => {
            this.setState({ isLoading: false });
            if (error.response.data.password === 'This field may not be blank') {
                toast.error("Please provide all the details!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                  });
            }
            if (error.response.data.password) {
                toast.error(error.response.data.password, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                  });
            }
            if (error.response.data.name || error.response.data.nick_name || error.response.data.email) {
                toast.error("Please provide all the details!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                  });
            }
            if (error.response.data['detail']) {
                toast.error(error.response.data['detail'], {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                  });
            }
        })
        }}

    render() {
        return (
            <div>
            { this.state.isLoading ? (
                <div className="loader">
                <Loader />
                </div>
            ): 
                <MDBContainer className="margins signup">
                <div className="row">
                <div className="col-md-10 offset-md-3 mr-auto">
                    <MDBRow>
                        <MDBCol md="6">
                        <MDBCard>
                            <div className="header pt-3">
                            <MDBRow className="d-flex justify-content-center">
                                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                Sign Up
                                </h3>
                            </MDBRow>
                            </div>
                            <MDBCardBody className="mx-4 mt-4">
                            <MDBInput label="Your Name" group type="text" validate outline onChange={(event => this.setState({name:event.target.value}))} required/>
                            <MDBInput label="Your Nick Name" group type="text" validate containerClass="mb-0" onChange={(event => this.setState({nick_name:event.target.value}))}/>
                            <MDBInput label="Your Email" group type="email" validate containerClass="mb-0" onChange={(event => this.setState({email:event.target.value}))}/>
                            <MDBInput label="Your password" group type="password"  validate containerClass="mb-0" onChange={(event => this.setState({password:event.target.value}))}/>
                            <MDBInput label="Confirm your password" group type="password" validate containerClass="mb-0" onChange={(event => this.setState({confirm_password:event.target.value}))}/>
                            <div className="text-center mb-4 mt-5">
                                <MDBBtn color="danger" type="submit" className="btn-block z-depth-2" onClick={(event => this.handleSignUp(event))}>Sign Up</MDBBtn>
                            </div>
                            <p className="font-small grey-text d-flex justify-content-center">
                                Already have an account?
                                <a href="#!" className="dark-grey-text font-weight-bold ml-1">Sign in</a>
                            </p>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    </div>
                    </div>
                </MDBContainer>
            }
            </div>
        );
    }
}

export default Signup;