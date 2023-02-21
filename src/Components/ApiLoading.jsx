import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/vicinity.svg'


function ApiLoading() {
  return (
    <div className='d-flex flex-column w-100 h-100 justify-content-center align-items-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div>
                <div className='mt-3'>
                    <Link to="/"><img className="d-block mx-auto mb-2" src={Logo} alt="u-rl Logo" width="72"
                        height="57" /></Link>
                </div>
                <div className="m1-2 text-center">
                    <h3>Loading</h3>
                </div>
            </div>
        </div>
  )
}

export default ApiLoading