import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {dataModification, photodataModification} from '../Components/BuildingVerificationModal'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CarouselList from '../Components/CarouselList'
import VideoCarouselList from '../Components/VideoCarouselList'
import { useParams } from 'react-router-dom'
import Loading from '../Components/Loading'

function IndividualBuilding() {

    const [data, setData] = useState({})

    
    const {id} = useParams()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_KEY}/buildings/${id}`)
        .then((res) => {
            console.log(res.data.data)
            setData(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    if(JSON.stringify(data) === "{}"){
        return <Loading />
    }

    return (
        <Fragment>
            <Navbar />
            <div className='container-xl my-5 p-5'>
                <h2>Mall</h2>
                <div>
                    <h4>Building Images</h4>
                    <CarouselList data={data.images}/>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" style={{ width: "40%" }}>Title</th>
                            <th scope="col" style={{ width: "40%" }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{data.description}</td>
                        </tr>
                        <tr>
                            <td>Building Type</td>
                            <td>{data.type}</td>
                        </tr>
                        <tr>
                            <td>Sector</td>
                            <td>{data.sector}</td>
                        </tr>
                        <tr>
                            <td>Street</td>
                            <td>{data.address.street}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{data.address.area}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{data.address.city}</td>
                        </tr>
                        <tr>
                            <td>PinCode</td>
                            <td>{data.address.pinCode}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{data.address.state}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{data.address.country}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-success my-2">
                    <hr />
                </div>
                <div>
                    <h4>Videos</h4>
                    <VideoCarouselList data={data.videos}/>
                </div>
                <div className="text-success my-2">
                    <hr />
                </div>
                <div className='mt-3'>
                    <h4>Accessibility Features</h4>
                    <VideoCarouselList data={dataModification(data.accessibilityFeatures)} />
                    <h4>Accessibility Features Images</h4>
                    <CarouselList data={photodataModification(data.accessibilityFeatures)} />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default IndividualBuilding