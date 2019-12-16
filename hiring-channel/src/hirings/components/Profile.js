import React, { useState } from 'react'
import { Row, Container, Col, Badge, Modal, Button, Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
function Profile(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <Row style={{ marginTop: "120px" }}>
                    <Col sm={3} > <img src={props.Photo} alt="awkarin" style={{ borderRadius: "20%" }} /> </Col>
                    <Col sm={9} className="align-self-center">
                        <h1>Awkarin</h1>
                        <p>DOB             : 12-04-1995</p>
                        <p>Email           : awkarin@gmail.com</p>
                        <p>Description     : Full Stack Developer</p>
                        <p>Expected Salary : 30000000</p>
                        <p>Skill           : Javascript, Python</p>
                        <Badge variant="primary" style={{ width: "120px" }} onClick={handleShow}>
                            Edit Profile</Badge>
                        <Badge variant="danger" style={{ width: "120px" }} onClick={handleShow}>
                            Delete Profile</Badge>
                    </Col>
                </Row>
            </Container>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="modalEdit">
                        Edit
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Profile