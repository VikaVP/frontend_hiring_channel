import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

class AddProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Skill: "",
      DOB: "",
      expected_salary: "",
      Description: "",
      Showcase: "",
      email: "",
      Location: "",
      Date_created: "",
      Date_update: "",
      Photo: null
    };
    this.addData = this.addData.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFieldChangeFile = this.handleFieldChangeFile.bind(this);
  }

  handleFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFieldChangeFile(event) {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  }

  addData(e) {
    e.preventDefault();
    // console.log(this.state.showcase)
    const formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("Name", this.state.Name);
    formData.append("Photo", this.state.Photo);
    formData.append("Description", this.state.Description);
    formData.append("Skill", this.state.Skill);
    formData.append("Location", this.state.Location);
    formData.append("DOB", this.state.DOB);
    formData.append("Showcase", this.state.Showcase);
    formData.append("Date_created", this.state.Date_created);
    formData.append("Date_update", this.state.Date_update);
    formData.append("expected_salary", this.state.expected_salary);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/engineers`, formData, config)
      .then(response => {
        console.log(response);
        swal("Good job!", "Engineer success added", "success");
        this.props.history.push("/engineers");
      })
      .catch(error => {
        this.setState({
          errors: error
        });
      });
  }

  render() {
    return (
      <>
        <MDBContainer
          style={{
            backgroundColor: "rgba(100,0,0,.1)",
            boxShadow: "10px 10px 10px rgba(0,0,0,.5)"
          }}
        >
          <p className="h4 text-center" style={{ marginTop: "100px" }}>
            Complete your Profile
          </p>
          <form onSubmit={this.addData} style={{ width: "100%" }}>
            <MDBRow>
              <MDBCol
                md="6"
                className="justify-content-end "
                style={{ display: "grid" }}
              >
                <label htmlFor="Name" className="black-text">
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  //
                  className="form-control"
                  value={this.state.Name}
                  onChange={this.handleFieldChange}
                />
                <br />
                <label htmlFor="email" className="black-text">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleFieldChange}
                />
                <br />
                <label htmlFor="DOB" className="black-text">
                  DOB
                </label>
                <input
                  type="text"
                  id="DOB"
                  name="DOB"
                  className="form-control"
                  value={this.state.DOB}
                  onChange={this.handleFieldChange}
                />
                <br />
                <label htmlFor="skill" className="black-text">
                  Skill
                </label>
                <input
                  type="text"
                  id="skill"
                  name="Skill"
                  className="form-control"
                  value={this.state.Skill}
                  onChange={this.handleFieldChange}
                />
                <br />
                <label htmlFor="Location" className="black-text">
                  Location
                </label>
                <input
                  type="text"
                  id="Location"
                  name="Location"
                  className="form-control"
                  value={this.state.Location}
                  onChange={this.handleFieldChange}
                />
                <br />
                <label htmlFor="Showcase" className="black-text">
                  Showcase
                </label>
                <input
                  type="text"
                  id="Showcase"
                  name="Showcase"
                  className="form-control"
                  value={this.state.Showcase}
                  onChange={this.handleFieldChange}
                />
                {/* <br /> */}
              </MDBCol>
              <MDBCol
                md="6"
                className="justify-content-start"
                style={{ display: "grid" }}
              >
                <label htmlFor="Description" className="black-text">
                  Description
                </label>
                <input
                  type="text"
                  id="Description"
                  name="Description"
                  className="form-control"
                  value={this.state.Description}
                  onChange={this.handleFieldChange}
                />
                <br />
                <label htmlFor="expected_salary" className="black-text">
                  Expected Salary
                </label>
                <input
                  type="text"
                  id="expected_salary"
                  name="expected_salary"
                  className="form-control"
                  value={this.state.expected_salary}
                  onChange={this.handleFieldChange}
                />
                <br />
                <label htmlFor="Date_created" className="black-text">
                  Date created
                </label>
                <input
                  type="text"
                  id="Date_created"
                  name="Date_created"
                  className="form-control"
                  value={this.state.Date_created}
                  onChange={this.handleFieldChange}
                />
                <br />
                <label htmlFor="Date_update" className="black-text">
                  Date update
                </label>
                <input
                  type="text"
                  id="Date_update"
                  name="Date_update"
                  className="form-control"
                  value={this.state.Date_update}
                  onChange={this.handleFieldChange}
                />
                <br />
                <label htmlFor="Photo" className="black-text">
                  Photo
                </label>
                <input
                  type="file"
                  id="Photo"
                  name="Photo"
                  className="form-control"
                  onChange={this.handleFieldChangeFile}
                />
              </MDBCol>
            </MDBRow>
            <center>
              <div className=" mt-4" style={{ width: "150px" }}>
                <MDBBtn color="indigo" type="submit">
                  Submit
                </MDBBtn>
              </div>
            </center>
          </form>
        </MDBContainer>
      </>
    );
  }
}
export default withRouter(AddProfile);
