import React from 'react'
import AdminDashboard from '../Components/AdminDashboard'
import BuildingOwnerDashboard from '../Components/BuildingOwnerDashboard'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Dashboard() {
  return (
    <>
        <Navbar />
        {/* <AdminDashboard /> */}
        <BuildingOwnerDashboard />
        <Footer />
    </>
  )
}

export default Dashboard