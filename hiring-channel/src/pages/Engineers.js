import React from 'react'
import '../App.css'
import Jumbotron from '../hirings/components/Jumbotron'
import Cards from '../hirings/components/Cards'
// import Headers from '../hirings/Headers'
import Footer from '../hirings/Footer'

function Engineers() {
    return (
        <>
            {/* <Headers /> */}
            <Jumbotron />
            <Cards />
            <Footer />
        </>
    )
}
export default Engineers