import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import swal from "sweetalert";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      password: "",
      role: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getLogin = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        Name: this.state.Name,
        password: this.state.password,
        role: this.state.role
      })
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        swal("Good job!", "Success Login", "success");
        let move = "/";
        if (this.state.role === "engineer") {
          move += "engineers";
        } else if (this.state.role === "company") {
          move += "companies";
        }
        this.props.history.push(move);
      })
      .catch(error => {
        this.setState({
          errors: error
        });
      });
  };
  render() {
    return (
      <>
        <div style={{ width: "100%", height: "40%", marginTop: "50px" }}></div>
        <MDBContainer>
          <MDBRow
            style={{
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,.2)",
              marginTop: "-200px",
              height: "450px"
            }}
          >
            <MDBCol md="5">
              <form
                onSubmit={this.getLogin}
                style={{
                  marginTop: "100px",
                  textAlign: "center",
                  verticalAlign: "middle"
                }}
              >
                <p className="h5 text-center mb-4" style={{ color: "white" }}>
                  Sign in
                </p>
                <div style={{ color: "white", textSizeAdjust: "30px" }}>
                  <MDBInput
                    className="text-info"
                    icon="envelope"
                    label="Type your Name"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="Name"
                    value={this.state.Name}
                    onChange={this.handleChange}
                  />
                  <MDBInput
                    className="text-info"
                    icon="lock"
                    label="Type your password"
                    group
                    type="password"
                    error="wrong"
                    validate
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <div>
                    <select
                      name="role"
                      onChange={this.handleChange}
                      className="browser-default custom-select"
                      style={{ width: "50%" }}
                    >
                      <option>Choose your role</option>
                      <option value="engineer">Engineer</option>
                      <option value="company">Company</option>
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <MDBBtn onClick={this.getLogin}>Login</MDBBtn>
                </div>
              </form>
              <Link to={`/signup`} className="btn btn-white">
                Dont have any account? Sign Up in here
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
export default withRouter(Login);
