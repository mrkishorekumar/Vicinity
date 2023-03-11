import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { reducerFunction } from '../Helper/Reducer'
import AdminDashboard from '../Components/AdminDashboard'
import BuildingOwnerDashboard from '../Components/BuildingOwnerDashboard'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Loading from '../Components/Loading'

function Dashboard() {

  const INITIAL_STATE = {
    loading: false,
    data: {},
    error: false
  }

  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_KEY}/users/role`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }})
      .then((res) => {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data })
      })
      .catch((err) => {
          dispatch({ type: "FETCH_ERROR", payload: err.response.data })
      })
  },[])

  if(state.loading){
    return <Loading />
  }

  return (
    <>
        <Navbar />
        {
          state.data.data === "ADMIN" && <AdminDashboard />
        }
        {
          state.data.data === "BUILDING_OWNER" && <BuildingOwnerDashboard />
        }
          <Footer />
    </>
  )
}

export default Dashboard