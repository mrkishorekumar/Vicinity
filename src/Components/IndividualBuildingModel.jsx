import axios from 'axios'
import React from 'react'
import Cookies from 'js-cookie'

function IndividualBuildingModel({ data, fetchApi }) {
  
  const deleteBuilding = () => {
    axios.delete(`${import.meta.env.VITE_SERVER_KEY}/buildings/${data.id}`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }})
    .then((res) => {
      if(res.data.responseStatus === "SUCCESS"){
        alert(res.data.responseStatus)
        fetchApi()
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="modal fade" id={`buildingOwnerDashboard${data.id}`} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Status : {data.verificationStatus}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{data.name}</td>
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
                  <td>State</td>
                  <td>{data.address.state}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{data.address.country}</td>
                </tr>
                <tr>
                  <td>Company Pincode</td>
                  <td>{data.address.pinCode}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button className="btn btn-outline-dark" data-bs-dismiss="modal" onClick={deleteBuilding}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualBuildingModel