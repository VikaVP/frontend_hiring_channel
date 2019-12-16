import React from 'react'
import '../App.css';
import SignUp from '../hirings/components/SignUp'
import Footer from '../hirings/Footer'
function SignUps() {
    var sectionStyle = {
        width: "100%",
        height: "600px",
        backgroundImage: "linear-gradient(to right, #F05F57, #360940)",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: "-50px"
    };
    return (
        <>
            <section style={sectionStyle}>
                <SignUp />
                <Footer />
            </section>
        </>
    )
}
export default SignUps
