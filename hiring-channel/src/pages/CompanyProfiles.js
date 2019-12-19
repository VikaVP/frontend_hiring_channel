import React from 'react'
import '../App.css'
// import Photo from '../assets/awkarin.jpg'
import { useParams } from "react-router-dom"
import HeadersComp from '../hirings/HeadersComp'
import CompanyProfile from '../hirings/components/CompanyProfile'
import Footer from '../hirings/Footer'
function CompanyProfiles(props) {
    const { id } = useParams()
    return (
        <>
            <HeadersComp />
            <CompanyProfile id={id} />
            <Footer />
        </>
    )
}
export default CompanyProfiles
