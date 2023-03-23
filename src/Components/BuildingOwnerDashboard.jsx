import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import PlusButton from '../assets/images/plusButton.svg'
import IndividualBuildingModel from './IndividualBuildingModel'

function BuildingOwnerDashboard() {

  const [data, setData] = useState([])

  function fetchApi(){
    axios.get(`${import.meta.env.VITE_SERVER_KEY}/building-owners/buildings`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }})
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    fetchApi()
  },[])

  

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
              data.map((val, index) => {
                return (
                  <Fragment key={index}>
                  <div data-bs-target={`#buildingOwnerDashboard${val.id}`} data-bs-toggle="modal" key={index} className={val.verificationStatus === "VERIFIED"?"card cardH text-bg-success mb-3 me-3 card": val.verificationStatus === "REJECTED"?"card cardH text-bg-danger mb-3 me-3 card":"card cardH text-bg-warning mb-3 me-3 card"} style={{ maxWidth: "18rem", cursor: "pointer" }}>
                    <div className="card-header text-uppercase">{val.verificationStatus}</div>
                    <div className="card-body">
                      <h5 className="card-title">{val.name}</h5>
                      <p className="card-text textOverflow" style={{ height: "100px" }}>{val.description}</p>
                    </div>
                  </div>
                  <IndividualBuildingModel fetchApi={fetchApi} data={val} />
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