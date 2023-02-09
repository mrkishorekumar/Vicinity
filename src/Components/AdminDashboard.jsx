import React from 'react'
import AccountVerfication from './AccountVerfication'
import AllVerified from './AllVerified'
import BuildingVerification from './BuildingVerification'
import CardWrapper from './CardWrapper'

function AdminDashboard() {
  return (
    <div className="m-5">
    <div className="card text-center">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs" id="myTab">
                <li className="nav-item">
                    <a href="#home" className="nav-link active" data-bs-toggle="tab">Account Verfication</a>
                </li>
                <li className="nav-item">
                    <a href="#profile" className="nav-link" data-bs-toggle="tab">Building Verfication</a>
                </li>
            </ul>
        </div>
        <div className="card-body">
            <div className="tab-content">
                <div className="tab-pane fade show active" id="home">
                  <CardWrapper>
                    <AccountVerfication />                  
                    <AccountVerfication />                  
                    <AccountVerfication />                  
                    <AccountVerfication />                  
                    <AccountVerfication />                  
                    <AccountVerfication />                  
                  </CardWrapper>
                </div>
                <div className="tab-pane fade" id="profile">
                    {/* <AllVerified content="Building" /> */}
                    <BuildingVerification />
                    <BuildingVerification />
                    <BuildingVerification />
                    <BuildingVerification />
                    <BuildingVerification />

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdminDashboard