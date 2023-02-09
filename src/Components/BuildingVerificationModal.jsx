import React from 'react'
import CarouselList from './CarouselList'
import VideoCarouselList from './VideoCarouselList'

function BuildingVerificationModal() {
    return (
        <div className="modal fade" id="buildingVerification" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <h4>Building Images</h4>
                            <CarouselList />
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" style={{width : "40%"}}>Title</th>
                                    <th scope="col"  style={{width : "40%"}}>Description</th>
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
                    <div className="modal-footer">
                        {/* data-bs-dismiss="modal" */}
                        <button type="button" className="btn btn-outline-dark" >Reject</button>
                        <button type="button" className="btn btn-dark">Approve</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildingVerificationModal