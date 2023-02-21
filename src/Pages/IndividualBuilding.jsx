import React, { Fragment } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CarouselList from '../Components/CarouselList'
import VideoCarouselList from '../Components/VideoCarouselList'

function IndividualBuilding() {
    return (
        <Fragment>
            <Navbar />
            <div className='container-xl my-5 p-5'>
                <h2>Mall</h2>
                <div>
                    <h4>Building Images</h4>
                    <CarouselList />
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
                            <td>Mall</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae architecto deserunt soluta, repellat beatae aperiam libero quibusdam! Sapiente repellendus, voluptatem laboriosam molestiae deleniti reiciendis? Eos animi impedit sunt? Tenetur, nihil.</td>
                        </tr>
                        <tr>
                            <td>Building Type</td>
                            <td>Commercial</td>
                        </tr>
                        <tr>
                            <td>Sector</td>
                            <td>Private</td>
                        </tr>
                        <tr>
                            <td>Street</td>
                            <td>SF 201</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>Sivanandapuram</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>Coimatore</td>
                        </tr>
                        <tr>
                            <td>PinCode</td>
                            <td>5637401</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>Tamil Nadu</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>India</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-success my-2">
                    <hr />
                </div>
                <div>
                    <h4>Videos</h4>
                    <VideoCarouselList />
                </div>
                <div className="text-success my-2">
                    <hr />
                </div>
                <div className='mt-3'>
                    <h4>Accessibility Features</h4>
                    <VideoCarouselList />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default IndividualBuilding