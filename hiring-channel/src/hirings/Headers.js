import React from 'react'
import logo from '../assets/arkademy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faSignOutAlt, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, InputGroup, FormControl, Col } from 'react-bootstrap'
function Headers() {
    return (
        <>
            <Navbar fixed="top" bg="light" expand="lg" >
                <Navbar.Brand href="#home"><img src={logo} alt="Arkademy" style={{ height: "50px" }} /></Navbar.Brand>
                <Col md="7" className="mt-3">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon className="mr-auto ml-4" icon={faSearch} /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ textSizeAdjust: "10px" }}>
                    <Nav className="mr-auto ml-2 mr-2">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faUserCircle} />  my profilehk</Nav.Link>
                        <div className="ml-3 mt-3 mr-2">|</div>
                        <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faCommentDots} /></Nav.Link>
                        <Nav.Link href="#" size="lg"><FontAwesomeIcon className="mr-auto ml-4" icon={faSignOutAlt} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Headers