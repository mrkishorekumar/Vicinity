import React from 'react'
import BuildingVerificationModal from './BuildingVerificationModal'

function BuildingVerification() {
    return (
        <>
            <div className="card mb-3">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Building Name</h5>
                    <p className="card-text">Building Description</p>
                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#buildingVerification">More Info</button>
                </div>
            </div>
            <BuildingVerificationModal />
        </>
    )
}

export default BuildingVerification