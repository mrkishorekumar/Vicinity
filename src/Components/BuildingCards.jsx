import React from 'react'
import { Link } from 'react-router-dom'

const BuildingCards = ({ buildingImage, buildingName, buildingDescription, buildingId }) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={buildingImage}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    className="d-block mx-lg-auto " alt={buildingName}
                    loading="lazy" />
                <div className="card-body">
                    <h4>{buildingName}</h4>
                    <p className="card-text text-wrap text-truncate" style={{height: "100px"}}>{buildingDescription}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to={`/building/${buildingId}`} type="button"
                                className="btn btn-sm btn-outline-secondary">View</Link>
                        </div>
                        <small className="text-muted">New!</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildingCards