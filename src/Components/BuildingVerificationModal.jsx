import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import CarouselList from './CarouselList'
import VideoCarouselList from './VideoCarouselList'


export function dataModification(data){
    return data.map((val) => {
        return {
            id : val.id,
            url : val.video.url,
            name : val.video.name,
            description : val.video.description
        }
    })
}

export function photodataModification(data){
    return data.map((val) => {
        return {
            id : val.id,
            url : val.image.url,
            name : val.image.name,
            description : val.image.description
        }
    })
}

function BuildingVerificationModal({data}) {


    const rejectBuliding = (id) => {
        axios.patch(`${import.meta.env.VITE_SERVER_KEY}/buildings/${id}/status/REJECTED`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }})
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
              console.log(err)
          })
    }

    const approveBuliding = (id) => {
        axios.patch(`${import.meta.env.VITE_SERVER_KEY}/buildings/${id}/status/VERIFIED`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }})
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
              console.log(err)
          })
    }

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
                            <CarouselList data={data.images} />
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
                            <VideoCarouselList data={data.videos} />
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
                    <div className="modal-footer">
                        {/* data-bs-dismiss="modal" */}
                        <button type="button" className="btn btn-outline-dark" onClick={() => rejectBuliding(data.id)}>Reject</button>
                        <button type="button" className="btn btn-dark" onClick={() => approveBuliding(data.id)}>Approve</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildingVerificationModal