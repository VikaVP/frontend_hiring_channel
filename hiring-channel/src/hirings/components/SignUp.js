import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

export default class SignUp extends Component {
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
                    <MDBCol md="6" >
                        <form >
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="black-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />

                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Confirm your email"
                                    icon="exclamation-triangle"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                />
                            </div>
                            <div className="text-center">
                                <Link to={`/engineers`}>
                                    <MDBBtn color="primary">Register</MDBBtn>
                                </Link>
                            </div>
                            <Link to={`/login`} className="btn btn-light">Already have account? Sign In in here</Link>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}