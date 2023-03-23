import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BuildingCards from './BuildingCards'
import Cookies from 'js-cookie'
import Loading from './Loading'


function CustomerDashboard() {

  const [data, setData] = useState(undefined)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_KEY}/customers/favourite-buildings`, { headers: { Authorization: `Bearer ${Cookies.get('jwtKey')}` } })
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (data === undefined) {
    return <Loading />
  }

  return (
    <div className="album py-5 mb-4">
      <div className="container">
        <h1 className='mb-5'>Saved Buildings</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {
            data.map((val, index) => {
              return <BuildingCards
                key={val.id}
                buildingImage={val.images[0].url}
                buildingName={val.name}
                buildingDescription={val.description}
                buildingId={val.id}
                flag={true}
                like={true}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard