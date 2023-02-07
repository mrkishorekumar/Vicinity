import React from 'react'
import BuildingOwnerDashboard from '../Components/BuildingOwnerDashboard'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Dashboard() {
  return (
    <>
        <Navbar />
        <BuildingOwnerDashboard />
        <Footer />
    </>
  )
}

export default Dashboard