import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/vicinity.svg'

const SearchForm = () => {
    return (
        <form action='/search' className='container-xl my-5'>
            <div>
                <Link to="/"><img className="d-block mx-auto mb-2" src={Logo} alt="u-rl Logo" width="72"
                    height="57" /></Link>
            </div>
            <div className="mb-2 text-center">
                <h3>Search any Place!</h3>
            </div>
            <div className="mb-3">
                <label className="form-label">Street</label>
                <input
                    name='street'
                    placeholder='New Bangaru Naidu Street'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Area</label>
                <input
                    name='area'
                    placeholder='Victoria Garden'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input
                    required
                    name='city'
                    placeholder='Chennai'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <div>
                    <label className="form-label">PinCode</label>
                    <input
                        type="number"
                        name="pincode"
                        className="form-control"
                        placeholder="600078" />
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">State</label>
                <input
                    name='state'
                    placeholder='Tamil Nadu'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                    name='country'
                    placeholder='India'
                    type="text"
                    className="form-control" />
            </div>
            <button type="submit" className="btn btn-dark w-100">Search</button>
        </form>
    )
}

export default SearchForm