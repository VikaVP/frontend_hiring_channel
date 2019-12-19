import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class AddCompany extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Location: '',
            Description: '',
            email: '',
            Logo: null
        }
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
        formData.append("Logo", this.state.Logo);
        formData.append("Description", this.state.Description);
        formData.append("Location", this.state.Location);


        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        }
        axios.post('http://localhost:3003/api/v1/companies', formData, config)
            .then((response) => {
                console.log(response);
                alert("Company Account successfully Created")
                this.props.history.push('/companies');

            }).catch(error => {
                this.setState({
                    errors: error
                });
            });
    }
    render() {

        return (
            <>
                <MDBContainer >
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={this.addData}>
                                <p className="h4 text-center mb-4">CompleteCompany</p>
                                <label htmlFor="Name" className="black-text">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="Name"
                                    name="Name"
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
                                <label htmlFor="Logo" className="black-text">
                                    Logo
                                </label>
                                <input
                                    type="file"
                                    id="Logo"
                                    name="Logo"
                                    className="form-control"
                                    onChange={this.handleFieldChangeFile}
                                />
                                <div className="text-center mt-4">
                                    <MDBBtn color="indigo" type="submit" >Submit</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        )
    }
}
export default withRouter(AddCompany)