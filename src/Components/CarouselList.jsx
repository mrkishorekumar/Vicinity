import React from 'react'
import { Carousel } from 'react-bootstrap';

function CarouselList({data}) {


    return (
        <Carousel className='mx-auto w-50 h-auto'>
            {
                data.map((val, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                style={{ objectFit: "fill"}}
                                className="w-100 h-100"
                                src={val.url}
                                alt="First slide"
                            />
                            {
                            val.name === null ? <></> :<Carousel.Caption style={{backgroundColor : "rgba(255, 255, 255, 0.5)", borderRadius : "8px", color : "black"}}>
                                <h3>{val.name}</h3>
                                <p>{val.description}</p>
                            </Carousel.Caption>
                            }
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default CarouselList