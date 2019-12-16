import React from 'react'
import '../App.css';
import foto from '../assets/awkarin.jpg'
import DetailEngineer from '../hirings/components/DetailEngineer'
import Headers from '../hirings/Headers'
import Footer from '../hirings/Footer'
function DetailEngineers() {
    return (
        <>
            <Headers />
            <DetailEngineer foto={foto} />
            <Footer />
        </>
    )
}
export default DetailEngineers