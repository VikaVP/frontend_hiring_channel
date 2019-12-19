import React from 'react'
import '../App.css'
// import Photo from '../assets/awkarin.jpg'
import { useParams } from "react-router-dom"
import Headers from '../hirings/Headers'
import Profile from '../hirings/components/Profile'
import Footer from '../hirings/Footer'
function MyProfile(props) {
    const { id } = useParams()
    return (
        <>
            <Headers />
            <Profile id={id} />
            <Footer />
        </>
    )
}
export default MyProfile
