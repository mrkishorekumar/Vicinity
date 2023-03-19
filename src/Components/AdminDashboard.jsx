import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { reducerFunction } from '../Helper/Reducer'
import AccountVerfication from './AccountVerfication'
import AllVerified from './AllVerified'
import BuildingVerification from './BuildingVerification'
import CardWrapper from './CardWrapper'
import ApiLoading from './ApiLoading';
import Loading from './Loading';

function AdminDashboard() {

    const INITIAL_STATE = {
        loading: false,
        data: {},
        error: false
      }
    
    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const [building, buildingDispatch] = useReducer(reducerFunction, INITIAL_STATE)


    const [account, setAccount] = useState([])

    const [buildingList, buildingSetAccount] = useState([])


    useEffect(() => {
        dispatch({ type: "FETCH_START" })
        axios.get(`${import.meta.env.VITE_SERVER_KEY}/building-owners/status/PENDING`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }})
          .then((res) => {
              dispatch({ type: "FETCH_SUCCESS", payload: res.data })
              setAccount(res.data.data)
          })
          .catch((err) => {
              console.log(err)
              dispatch({ type: "FETCH_ERROR", payload: err.response.data })
          })

          buildingDispatch({ type: "FETCH_START" })
          axios.get(`${import.meta.env.VITE_SERVER_KEY}/buildings/status/PENDING`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` }})
            .then((res) => {
                buildingDispatch({ type: "FETCH_SUCCESS", payload: res.data })
                buildingSetAccount(res.data.data)
            })
            .catch((err) => {
                console.log(err)
                buildingDispatch({ type: "FETCH_ERROR", payload: err.response.data })
            })

      },[])


    if(state.loading || building.loading){
        return <Loading />
    }


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
                    {
                        state.loading ? <ApiLoading /> : account.length === 0 ? <AllVerified content="Account" /> : account.map((val) => {
                            return <AccountVerfication key={val.id} data={val} arr={account} />
                        })
                       
                    }                
                  </CardWrapper>
                </div>
                <div className="tab-pane fade" id="profile">
                    {
                        buildingList.loading ? <ApiLoading /> : buildingList.length === 0 ? <AllVerified content="Building" /> : buildingList.map((val) => {
                            return <BuildingVerification key={val.id} data={val} arr={buildingList} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdminDashboard