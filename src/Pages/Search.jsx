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

      console.log(body)

      axios.post(`${import.meta.env.VITE_SERVER_KEY}/authenticate`, data)
      .then((res) => {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data })
      })
      .catch((err) => {
          setErr(err.response.data.error.debugMessage)
      })


    },[])

    
  return (
    <div>Search</div>
  )
}

export default Search