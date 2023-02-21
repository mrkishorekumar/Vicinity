import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PlusButton from '../assets/images/plusButton.svg'
import Data from '../Utils/BuildingOwnerDashboard.json'
import IndividualBuildingModel from './IndividualBuildingModel'

function BuildingOwnerDashboard() {

  return (
    <div className="container-xl my-4 needs-validation">
      <h3>Dashboard</h3>
      <div className="album py-2 mb-4">
        <div className="container">
          <div className="test row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <Link to="/entry" className="cardH d-flex justify-content-center align-items-center card text-bg-dark mb-3 me-3 card" style={{ maxWidth: "18rem", cursor: "pointer" }}>
              <img src={PlusButton} className="img-fluid p-5" alt="Plus Button" style={{width : "50%", height : "auto", margin : "10%, 0"}} />
            </Link>

            {
              Data.map((val, index) => {
                return (
                  <Fragment>
                  <div data-bs-target="#buildingOwnerDashboard" data-bs-toggle="modal" key={index} className={val.status === "success"?"card cardH text-bg-success mb-3 me-3 card": val.status === "rejected"?"card cardH text-bg-danger mb-3 me-3 card":"card cardH text-bg-warning mb-3 me-3 card"} style={{ maxWidth: "18rem", cursor: "pointer" }}>
                    <div className="card-header text-uppercase">{val.status}</div>
                    <div className="card-body">
                      <h5 className="card-title">{val.buildingName}</h5>
                      <p className="card-text textOverflow" style={{ height: "100px" }}>{val.buildingDescription}</p>
                    </div>
                  </div>
                  <IndividualBuildingModel />
                  </Fragment>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildingOwnerDashboard