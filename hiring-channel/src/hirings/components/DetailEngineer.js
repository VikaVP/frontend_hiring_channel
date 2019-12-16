import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'
function DetailEngineer(props) {
    return (
        <>
            <div class="card" style={{ marginTop: "70px" }}>
                <img src={props.foto} alt="awkarin" style={{ width: "100%" }} />
                <h1>Awkarin</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <p><button>Contact</button></p>
            </div>
        </>
    )
}
export default DetailEngineer