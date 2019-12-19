import React from 'react'
import axios from 'axios'
import logo from '../../assets/arkademy.png'
import { Card, Navbar, Nav, InputGroup, FormControl, Col, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faCommentDots, faSignOutAlt, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
// import Pagination from './Pagination'
class CompanyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }

    }

    componentDidMount() {
        axios.get(`http://localhost:3003/api/v1/companies`)
            .then(res => {
                this.setState({
                    posts: res.data
                    // page: res.data.pageDetail
                })
            })
    }

    render() {
        const { posts } = this.state

        return (
            <><Navbar fixed="top" bg="light" expand="lg" >
                <Navbar.Brand href="/companies"><img src={logo} alt="Arkademy" style={{ height: "50px" }} /></Navbar.Brand>
                <Col md="7" className="mt-3">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon className="mr-auto ml-4" icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            name="companiesName"
                        // value={companiesName} onChange={this.onSearch}
                        />
                    </InputGroup>
                </Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ textSizeAdjust: "10px" }}>
                    <Nav className="mr-auto ml-2 mr-2">
                        <NavDropdown title="Home" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1" href="/engineers">Engineers</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2" href="/companies">Companies</NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        <Nav.Link href="/companyprofiles/4" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faUserCircle} />  Company</Nav.Link>
                        <div className="mt-2 ml-3" style={{ height: "30px", width: "1px", border: "1 px solid #2F4F4F", backgroundColor: "#2F4F4F" }}></div>
                        <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faCommentDots} /></Nav.Link>
                        <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faSignOutAlt} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

                <center>
                    {posts.map((post, index) =>
                        <li key={index} style={{ listStyle: 'none', display: "inline-block", padding: "30px" }}>
                            <Link to={`/companies/${post.id}`}>
                                <Card style={{ marginTop: "20px", borderRadius: "5%", backgroundImage: `url("${post.Logo}")`, width: '100%', height: "25rem", objectFit: 'cover', color: "white", marginBottom: "80px", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                                    <Card.Header></Card.Header>
                                    <Card.Body style={{ height: "300px" }}>
                                    </Card.Body>
                                    <Card.Footer className="text-muted" style={{ backgroundColor: "black", opacity: "0.5" }}>
                                        <div style={{ color: "white", textAlign: "left" }}>
                                            <h5 className="card-title mb-3" >{post.Name}</h5>
                                            <small>{post.Description}</small>
                                            <p><small><FontAwesomeIcon className="mr-auto" icon={faEnvelopeOpen} />{post.email}</small></p>
                                            <p className="card-text" style={{ color: "white" }}>Location : <br /> {post.Location}</p>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Link>

                        </li>
                    )}
                </center>
            </>
        )
    }
}
export default CompanyList

