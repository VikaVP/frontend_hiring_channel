import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text" >
                                <MDBInput
                                    icon="envelope"
                                    label="Type your email"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    icon="lock"
                                    label="Type your password"
                                    group
                                    type="password"
                                    validate
                                />
                            </div>
                            <div className="text-center">
                                <Link to={`/engineers`}>
                                    <MDBBtn>Login</MDBBtn>
                                </Link>
                            </div>
                        </form>
                        <Link to={`/signup`} className="btn btn-white">Dont have any account? Sign Up in here</Link>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        )
    }
}