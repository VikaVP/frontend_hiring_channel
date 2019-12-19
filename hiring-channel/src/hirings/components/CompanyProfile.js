import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { Row, Container, Col, Badge, Modal, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.id);

        this.state = {
            items: [],
            id: '',
            Name: '',
            Description: '',
            email: '',
            Location: '',
            Logo: null,
            show: false
        }
        this.editData = this.editData.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleFieldChangeFile = this.handleFieldChangeFile.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.delete = this.delete.bind(this);
    }
    // const [show, setShow] = useState(false);
    handleClose() { this.setState({ show: false }) }
    handleShow() { this.setState({ show: true }) }
    delete() {
        axios.delete(`http://localhost:3003/api/v1/companies/${this.props.id}`)
            .then((response) => {
                console.log(response);
                alert("Company Account successfully Deleted")
                this.props.history.push('/companies');

            })
            .catch(err => console.log(err))
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
    componentDidMount() {
        axios.get(`http://localhost:3003/api/v1/companies/${this.props.id}`)
            .then(response => {

                this.setState({
                    items: response.data,
                    id: response.data[0].id,
                    Name: response.data[0].Name,
                    Description: response.data[0].Description,
                    email: response.data[0].email,
                    Location: response.data[0].Location
                })
            })
    }
    editData(e) {
        e.preventDefault();
        // console.log(this.state.Photo.name)
        const formData = new FormData();
        formData.append("id", this.state.id);
        formData.append("email", this.state.email);
        formData.append("Name", this.state.Name);
        formData.append("Logo", this.state.Logo);
        formData.append("Description", this.state.Description);
        formData.append("Location", this.state.Location);

        const config = {
            headers: {
                "content-type": "multipart/form-data; boundary=" + formData._boundary
            }
        }
        console.log(this.state);

        axios.put(`http://localhost:3003/api/v1/companies/${this.props.id}`, formData, config)
            .then((response) => {
                console.log(response);
                alert("Company Account successfully Updated")
                window.location.reload()

            }).catch(error => {
                console.log(formData);

                console.log(error);

                this.setState({
                    errors: error
                });
            });
    }

    render() {
        const { items, show } = this.state
        return (
            <>
                {items.map((item, index) =>
                    <Container>
                        <Row style={{ marginTop: "120px", background: "linear-gradient(#2F4F4F, #9198e5)", boxSizing: "border-box", boxShadow: "10px 10px 5px #aaaaaa" }}>
                            <Col sm={5} > <img src={`${item.Logo}`} alt="Company" style={{ borderRadius: "20%", width: '100%', height: "25rem", objectFit: 'cover', backgroundPosition: "center center" }} /> </Col>
                            <Col sm={5} className="align-self-center" style={{ color: "white" }}>
                                <h1>{item.Name}</h1>

                                <p>Email           : {item.email}</p>
                                <p>Description     : {item.Description}</p>
                                <p>Location        : {item.Location}</p>
                                <Badge variant="primary" style={{ width: "120px" }} onClick={this.handleShow}>
                                    Edit Profile</Badge>
                                <Badge variant="danger" style={{ width: "120px" }} onClick={this.delete}>
                                    Delete Profile</Badge>
                            </Col>
                        </Row>
                    </Container>

                )}

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title id="modalEdit">
                            Edit
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form onSubmit={this.editData}>
                            <p className="h4 text-center mb-4">Complete your Profile</p>
                            <input
                                type="hidden"
                                id="id"
                                name="id"
                                className="form-control"
                                value={this.state.id}
                                onChange={this.handleFieldChange}

                            />
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
                            <Button variant="primary" type="submit" onChange={this.editData}>
                                Save Changes
                        </Button>
                        </form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default withRouter(CompanyProfile)