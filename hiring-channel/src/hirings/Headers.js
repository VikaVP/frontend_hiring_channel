import React from 'react'
import logo from '../assets/arkademy.png'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faSignOutAlt, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, InputGroup, FormControl, Col, NavDropdown } from 'react-bootstrap'
class Headers extends React.Component {
    constructor() {
        super()
        this.state = {
            engineers: [],
            engineersName: '',
            isLoading: false
        }
    }
    onSearch = e => {
        console.log(e.target.value);

        this.setState({ engineersName: e.target.value, isLoading: true })
        //call API search for engineers name
        axios.get(`http://localhost:3003/api/v1/engineers/?s=${e.target.value}`)
            .then(res => {
                this.setState({ engineers: res.data.data.Name, isLoading: false })
            }).catch(err => {
                console.log(err)
                this.setState({ isLoading: false })
            })
    }
    onSelect = v => { };
    render() {
        const { engineers, engineersName, isLoading } = this.state
        return (
            <>
                <Navbar fixed="top" bg="light" expand="lg" >
                    <Navbar.Brand href="/engineers"><img src={logo} alt="Arkademy" style={{ height: "50px" }} /></Navbar.Brand>
                    <Col md="7" className="mt-3">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon className="mr-auto ml-4" icon={faSearch} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                                value={engineersName} onChange={this.onSearch}
                                onSelect={this.onSelect}
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
                            <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faUserCircle} />  My Profile</Nav.Link>
                            <div className="mt-2 ml-3" style={{ height: "30px", width: "1px", border: "1 px solid #2F4F4F", backgroundColor: "#2F4F4F" }}></div>
                            <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faCommentDots} /></Nav.Link>
                            <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faSignOutAlt} /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <ul>
                        {isLoading && <p>Loading...</p>}
                        {!isLoading && engineers}
                    </ul>
                </div>
            </>
        )
    }
}
export default Headers

// function Headers() {
//     return (
//         <>
//             <Navbar fixed="top" bg="light" expand="lg" >
//                 <Navbar.Brand href="#home"><img src={logo} alt="Arkademy" style={{ height: "50px" }} /></Navbar.Brand>
//                 <Col md="7" className="mt-3">
//                     <InputGroup className="mb-3">
//                         <InputGroup.Prepend>
//                             <InputGroup.Text id="basic-addon1"><FontAwesomeIcon className="mr-auto ml-4" icon={faSearch} /></InputGroup.Text>
//                         </InputGroup.Prepend>
//                         <FormControl
//                             placeholder="Search"
//                             aria-label="Search"
//                             aria-describedby="basic-addon1"
//                         />
//                     </InputGroup>
//                 </Col>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav" style={{ textSizeAdjust: "10px" }}>
//                     <Nav className="mr-auto ml-2 mr-2">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faUserCircle} />  my profilehk</Nav.Link>
//                         <div className="mt-2 ml-3" style={{ height: "30px", width: "1px", border: "1 px solid #2F4F4F", backgroundColor: "#2F4F4F" }}></div>
//                         <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faCommentDots} /></Nav.Link>
//                         <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faSignOutAlt} /></Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </>
//     )
// }
// export default Headers