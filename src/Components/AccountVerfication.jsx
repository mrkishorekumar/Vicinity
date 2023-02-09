import React from 'react'
import AccountVerficationModal from './AccountVerficationModal'

function AccountVerfication() {
    return (
        <>
            <div className="card me-3 mb-3" style={{ width: "18rem" }}>
                <div className="card-header">
                    Featured
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name</li>
                    <li className="list-group-item">Email</li>
                    <li className="list-group-item">Phone Number</li>
                    <li className="list-group-item">Account Create At</li>
                    <li className="list-group-item">
                        <button data-bs-target="#accountVerfication" data-bs-toggle="modal" type="button" className="btn btn-dark w-100">Get Address</button>
                    </li>
                </ul>
            </div>
            <AccountVerficationModal />
        </>
    )
}

export default AccountVerfication