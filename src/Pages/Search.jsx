import React from 'react'
import { useParams } from 'react-router-dom';

function Search() {
    let { street, area, city, pincode, state, country } = useParams();

    console.log(street, area, city, pincode, state, country)
    
  return (
    <div>Search</div>
  )
}

export default Search