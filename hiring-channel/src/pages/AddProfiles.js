import React from 'react'
import '../App.css';
import AddProfile from '../hirings/components/AddProfile'
import Footer from '../hirings/Footer'
function AddProfiles() {
    var sectionStyle = {
        width: "100%",
        height: "1200px",
        backgroundImage: "linear-gradient(to right, #F05F57, black)",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: "-50px"
    };
    return (
        <>
            <section style={sectionStyle}>
                <AddProfile />
            </section>
            <Footer />
        </>
    )
}
export default AddProfiles