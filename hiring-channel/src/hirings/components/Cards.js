import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'
function Cards(props) {
    return (
        <>
            <Card className="text-center" style={{ marginTop: "70px", borderRadius: "5%", backgroundImage: `url(${props.logo})`, width: '100%', height: "25rem", objectFit: 'cover', color: "white", marginBottom: "80px", backgroundRepeat: "no-repeat" }}>
                <Card.Header></Card.Header>
                <Card.Body style={{ height: "200px" }}>
                </Card.Body>
                <Card.Footer className="text-muted" style={{ backgroundColor: "black", opacity: "0.7" }}>
                    <div style={{ color: "white", textAlign: "left" }}>
                        <h5 className="card-title mb-3" >Arkademy</h5>
                        <small>Fullstack Developer</small>
                        <p><small><FontAwesomeIcon className="mr-auto" icon={faEnvelopeOpen} />arka@gmail.com</small>    <small><FontAwesomeIcon className="mr-auto ml-4" icon={faHandHoldingUsd} />30000000</small></p>
                        <p className="card-text" style={{ color: "white" }}>Skill: Javascript</p>
                    </div>
                </Card.Footer>
            </Card>

        </>
    )
}
export default Cards

