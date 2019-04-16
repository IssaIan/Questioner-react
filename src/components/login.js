import React, { Component } from 'react';
import Axios from 'axios';
import { toast } from "react-toastify";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import Loader from '../utils/loader';
class Login extends Component {
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            email: '',
            password: '',
            passerror: false,
            emailerror: false,
            isLoading: false
        }
    }

    handleLogin(event) {
        event.preventDefault()
        this.setState({ isLoading: true });
        var myData = {
            'email': this.state.email,
            'password': this.state.password,
            }
        Axios({
            url: 'https://questioners-two-staging.herokuapp.com/api/auth/login/',
            data: myData,
            method: 'POST',
        })
        .then((response) => {
            window.localStorage.setItem('token', response.data.token);
            this.props.history.push('/meetups');
            toast.success("You are now logged in!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: true,
                pauseOnHover: true,
              });
        })
        .catch((error) => {
            this.setState({ isLoading: false });
            if (error.response.data['detail']) {
                this.setState({passerror: false, emailerror: false})
                toast.error(error.response.data['detail'], {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                  });
            }
            else if (error.response.data['password']){
                this.setState({ passerror: true })
            }
            else if (error.response.data['email']){
                this.setState({ emailerror: true })
            }
            if (this.state.emailerror || this.state.passerror){
                console.log(error.response.data)
                toast.error("Please provide all the details!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                  });
            }
        })
        }

    render() {
        return (
            <div>
            { this.state.isLoading ? (
                <div className="loader">
                <Loader />
                </div>
            ): 
                <MDBContainer className="margins">
                <div className="row">
                <div className="col-md-10 offset-md-3 mr-auto">
                    <MDBRow>
                        <MDBCol md="6">
                        <MDBCard>
                            <div className="header pt-3">
                            <MDBRow className="d-flex justify-content-center">
                                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                Log In
                                </h3>
                            </MDBRow>
                            </div>
                            <MDBCardBody className="mx-4 mt-4">
                            <MDBInput label="Your email" group type="text" validate onChange={(event => this.setState({email:event.target.value}))} required/>
                            <MDBInput label="Your password" group type="password" required validate containerClass="mb-0" onChange={(event => this.setState({password:event.target.value}))}/>
                            <p className="font-small grey-text d-flex justify-content-center">
                                Forgot
                                <a href="#!" className="dark-grey-text font-weight-bold ml-1">Password?</a>
                            </p>
                            <div className="text-center mb-4 mt-5">
                                <MDBBtn color="danger" type="button" className="btn-block z-depth-2" onClick={(event => this.handleLogin(event))}>Log in</MDBBtn>
                            </div>
                            <p className="font-small grey-text d-flex justify-content-center">
                                Don't have an account?
                                <a href="#!" className="dark-grey-text font-weight-bold ml-1">Sign up</a>
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
           
        )
      }
    };

export default Login;



