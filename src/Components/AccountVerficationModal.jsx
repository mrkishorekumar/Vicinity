import React from 'react'

function AccountVerficationModal() {
    return (
        <>
            <div className="modal fade" id="accountVerfication" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
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
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <td>Company Email</td>
                                        <td>thornton@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>987654321</td>
                                    </tr>
                                    <tr>
                                        <td>Street</td>
                                        <td>711-2880 Nulla St.</td>
                                    </tr>
                                    <tr>
                                        <td>Area</td>
                                        <td>Mankato</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>Mississippi</td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>Mankato</td>
                                    </tr>
                                    <tr>
                                        <td>Country</td>
                                        <td>USA</td>
                                    </tr>
                                    <tr>
                                        <td>Company PinCode</td>
                                        <td>5637401</td>
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