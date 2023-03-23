import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import SearchForm from '../Components/SearchForm'
import BuildingCards from '../Components/BuildingCards'
import Data from '../Utils/BuildingCards.json'
import Footer from '../Components/Footer'
import Loading from '../Components/Loading'
import Cookies from 'js-cookie'

const Home = () => {

  const [data, setData] = useState(undefined)

  const [state, setState] = useState(true)

  function noUser() {
    axios.get(`${import.meta.env.VITE_SERVER_KEY}/buildings/status/VERIFIED`)
      .then((res) => {
        setData(res.data.data)
        setState(true)
      })
      .catch((res) => {
        console.log(res)
      })
  }

  useEffect(() => {
    if (!Cookies.get("jwtKey")) {
      noUser()
    }
    else {
      axios.get(`${import.meta.env.VITE_SERVER_KEY}/users/role`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` } })
        .then((res) => {
          if (res.data.data === "BUILDING_OWNER") {
            noUser()
            setState(true)
          }
          else {
            axios.get(`${import.meta.env.VITE_SERVER_KEY}/customers/buildings`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` } })
              .then((res) => {
                setData(res.data.data)
                setState(false)
              })
              .catch((res) => {
                console.log(res)
              })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

  if (data === undefined) {
    return <Loading />
  }

  return (
    <>
      <Navbar />
      <SearchForm />
      <div className="album py-5 mb-4">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
              data.map((val) => {
                return <BuildingCards
                  key={val.id}
                  buildingImage={val.images[0].url}
                  buildingName={val.name}
                  buildingDescription={val.description}
                  buildingId={val.id}
                  flag={state}
                  like={val.liked}
                />
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home