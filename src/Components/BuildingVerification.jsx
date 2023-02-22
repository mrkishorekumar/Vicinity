import React from 'react'
import BuildingVerificationModal from './BuildingVerificationModal'

function BuildingVerification({data, arr}) {
    return (
        <>
            <div className="card mb-3">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.description}</p>
                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#buildingVerification">More Info</button>
                </div>
            </div>
            {
                arr.map((val) => {
                    return <BuildingVerificationModal key={val.id} data={val.user} />
                })
            }
        </>
    )
}

export default BuildingVerification