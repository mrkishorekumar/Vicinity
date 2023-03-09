import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Search() {

  const [searchParams] = useSearchParams();

    useEffect(() => {
      let body = {
        street : searchParams.get("street"),
        area : searchParams.get("area"),
        city : searchParams.get("city"),
        pincode : searchParams.get("pincode"),
        state : searchParams.get("state"),
        country : searchParams.get("country")
      }


      axios.get(`${import.meta.env.VITE_SERVER_KEY}/buildings/address?city=${body.city}&street=${body.street}&area=${body.area}&pincode=${body.pincode}&state=${body.state}&country=${body.country}`)
          .then((res) => {
              console.log(res)
          })
          .catch((err) => {
              console.log(err)
          })

    },[])

    
  return (
    <div>Search</div>
  )
}

export default Search