import React from 'react'
import '../App.css'
import Photo from '../assets/awkarin.jpg'
import Headers from '../hirings/Headers'
import Profile from '../hirings/components/Profile'
import Footer from '../hirings/Footer'
function MyProfile() {
    return (
        <>
            {/* <section style={sectionStyle}> */}
            <Headers />
            <Profile Photo={Photo} />
            <Footer />
            {/* </section> */}
        </>
    )
}
export default MyProfile
