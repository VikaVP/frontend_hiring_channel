import React from 'react'
import '../App.css';
import { useParams } from "react-router-dom"
import DetailCompany from '../hirings/components/DetailCompany'
import Headers from '../hirings/HeadersComp'
import Footer from '../hirings/Footer'
function DetailCompanies(props) {
    const { id } = useParams()
    return (
        <>
            <Headers />
            <DetailCompany id={id} />
            <Footer />
        </>
    )
}
export default DetailCompanies