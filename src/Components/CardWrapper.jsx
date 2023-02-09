import React from 'react'

function CardWrapper({children}) {
    return (
        <div className="album py-5 mb-4">
            <div className="container w-100">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex justify-content-center">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CardWrapper