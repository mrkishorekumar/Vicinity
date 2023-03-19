import React from 'react'
import Navbar from '../Components/Navbar'
import SearchForm from '../Components/SearchForm'
import BuildingCards from '../Components/BuildingCards'
import Data from '../Utils/BuildingCards.json'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <SearchForm />
        <div className="album py-5 mb-4">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
            Data.map((val,index) => {
              return <BuildingCards 
                key={index}
                buildingImage={val.buildingImage} 
                buildingName={val.buildingName}
                buildingDescription={val.buildingDescription}
                buildingId={val.buildingId}
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