import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

const BuildingCards = ({ buildingImage, buildingName, buildingDescription, buildingId, flag, like }) => {


    const [state, setState] = useState(like)

    const addLike = () => {
        axios.patch(`${import.meta.env.VITE_SERVER_KEY}/customers/favourite-buildings/${buildingId}/like`, {}, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }})
          .then((res) => {
              if(res.data.responseStatus === "SUCCESS"){
                console.log("Liked")
                setState(true)
              }
          })
          .catch((err) => {
              console.log(err)
          })
    }

    const unLike = () => {
        axios.patch(`${import.meta.env.VITE_SERVER_KEY}/customers/favourite-buildings/${buildingId}/unlike`, {}, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }})
          .then((res) => {
              if(res.data.responseStatus === "SUCCESS"){
                console.log("Liked")
                setState(false)
              }
          })
          .catch((err) => {
              console.log(err)
          })
    }

    const likeAndUnlike = (state) => {
        if(state){
            unLike()
        }
        else {
            addLike()
        }
    }

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={buildingImage}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    className="d-block mx-lg-auto " alt={buildingName}
                    loading="lazy" />
                <div className="card-body">
                    <h4>{buildingName}</h4>
                    <p className="card-text text-wrap text-truncate" style={{ height: "100px" }}>{buildingDescription}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to={`/building/${buildingId}`} type="button"
                                className="btn btn-sm btn-outline-secondary">View</Link>
                                {
                                    Cookies.get('jwtKey') && !flag  && <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => likeAndUnlike(state)}>{state ? "UnLike": "Like" }</button>
                                }
                                {
                                    flag && state && <button type="button" className="btn btn-sm btn-outline-secondary" onClick={unLike}>Unlike</button>
                                }
                        </div>
                        <small className="text-muted">New!</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildingCards