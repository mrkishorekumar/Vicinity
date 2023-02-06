import React from 'react'

const SearchForm = () => {
    return (
        <form className='container-xl my-5'>
            <div className="mb-3">
                <label className="form-label">Street</label>
                <input
                    placeholder='New Bangaru Naidu Street'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Area</label>
                <input
                    placeholder='Victoria Garden'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input
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
                    placeholder='Tamil Nadu'
                    type="text"
                    className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                    placeholder='India'
                    type="text"
                    className="form-control" />
            </div>
            <button type="submit" className="btn btn-dark w-100">Search</button>
        </form>
    )
}

export default SearchForm