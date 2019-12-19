import React from 'react'
import axios from 'axios'
import { Row, Container, Col } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'
class DetailCompany extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:3003/api/v1/companies/${this.props.id}`)
            .then(response => {
                this.setState({ items: response.data })
            })
    }
    render() {
        const { items } = this.state
        return (
            <>
                {items.map((item, index) =>
                    <Container>
                        <Row style={{ marginTop: "120px", background: "linear-gradient(#2F4F4F, #9198e5)", boxSizing: "border-box", boxShadow: "10px 10px 5px #aaaaaa" }}>
                            <Col sm={5} > <img src={`${item.Logo}`} alt="profile" style={{ borderRadius: "20%", width: '100%', height: "25rem", objectFit: 'cover', backgroundPosition: "center center" }} /> </Col>
                            <Col sm={5} className="align-self-center" style={{ color: "white" }}>
                                <h1>{item.Name}</h1>
                                <p>Email           : {item.email}</p>
                                <p>Description     : {item.Description}</p>
                                <p>Location        : {item.Location}</p>
                            </Col>
                        </Row>
                    </Container>
                )}
            </>
        )
    }
}
export default DetailCompany