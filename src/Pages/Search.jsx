import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import BuildingCards from '../Components/BuildingCards';
import Loading from '../Components/Loading';
import Data from '../Utils/BuildingCards.json'

function Search() {

  const [searchParams] = useSearchParams();

  const [data, setData] = useState([])

  useEffect(() => {
    let body = {
      street: searchParams.get("street"),
      area: searchParams.get("area"),
      city: searchParams.get("city"),
      pincode: searchParams.get("pincode"),
      state: searchParams.get("state"),
      country: searchParams.get("country")
    }
    axios.get(`${import.meta.env.VITE_SERVER_KEY}/buildings/address?city=${body.city}&street=${body.street}&area=${body.area}&pincode=${body.pincode}&state=${body.state}&country=${body.country}`)
      .then((res) => {
        if(res.data.data.length === 0){
          setData("No Data Found")
        }
        else {
          setData(res.data.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  if(typeof(data) === 'string'){
    return <h1>{data}</h1>
  }

  if (data.length === 0 && typeof(data) === 'object') {
    return <Loading />
  }

  return (
    <div className="album py-5 mb-4">
      <div className="container">
        <h1 className='mb-5'>Search Result</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {
            data.map((val, index) => {
              return <BuildingCards
                key={index}
                buildingImage={val.images[0].url}
                buildingName={val.name}
                buildingDescription={val.description}
                buildingId={val.id}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Search