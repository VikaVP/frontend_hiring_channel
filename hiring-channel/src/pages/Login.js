import React from 'react'
import '../App.css';
import Logins from '../hirings/components/Login'
import Footer from '../hirings/Footer'
import Background from '../assets/3.png';
function Login() {
    var sectionStyle = {
        width: "100%",
        height: "600px",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: "-50px"
    };
    return (
        <>
            <section style={sectionStyle}>
                <Logins />
                <Footer />
            </section>
        </>
    )
}
export default Login
