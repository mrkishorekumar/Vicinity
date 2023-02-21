import React from 'react'
import AccountVerficationModal from './AccountVerficationModal'

function AccountVerfication({data, arr}) {
    
    return (
        <>
            <div className="card me-3 mb-3" style={{ width: "18rem" }}>
                <div className="card-header">
                    Featured
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{data.user.email}</li>
                    <li className="list-group-item">{data.user.name}</li>
                    <li className="list-group-item">{data.user.phoneNumber}</li>
                    <li className="list-group-item">{data.user.createdAt}</li>
                    <li className="list-group-item">
                        <button data-bs-target={`#${data.user.email}`} data-bs-toggle="modal" type="button" className="btn btn-dark w-100">Get Address</button>
                    </li>
                </ul>
            </div>
            {
                arr.map((val) => {
                    return <AccountVerficationModal key={val.id} data={val.user} />
                })
            }
        </>
    )
}

export default AccountVerfication