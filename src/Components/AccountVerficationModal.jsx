import React from 'react'

function AccountVerficationModal({data}) {
    return (
        <>
            <div className="modal fade" id={data.email} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
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
                                        <td>Full Name</td>
                                        <td>{data.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Company Email</td>
                                        <td>{data.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>{data.phoneNumber}</td>
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
                                        <td>Company PinCode</td>
                                        <td>{data.address.pinCode}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-dark">Reject</button>
                            <button className="btn btn-dark">Confirm Verification</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountVerficationModal