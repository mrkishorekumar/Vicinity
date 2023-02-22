import React from 'react'

function AllVerified({content}) {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h5 className="card-title">{content} tab content</h5>
            <p className="card-text">There is nonting to Verify!</p>
        </div>
    )
}

export default AllVerified