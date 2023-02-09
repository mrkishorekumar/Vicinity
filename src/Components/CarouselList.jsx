import React from 'react'
import { Carousel } from 'react-bootstrap';

function CarouselList() {

    const images = [
        "https://lh3.googleusercontent.com/p/AF1QipOF74_oWaRGVpgfDt4bpfUvUIpx4jvB0BWzGYen=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMIKjq5IXSVpfU5ak1QsWOdAPJxO20Xd16WKY2Z=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMEwfbNVudtCND_l5d5WmEecA2Eb47o2uAkiZld=s680-w680-h510"
    ]

    return (
        <Carousel className='mx-auto w-50 h-auto'>
            {
                images.map((val, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                style={{ objectFit: "fill"}}
                                className="w-100 h-100"
                                src={val}
                                alt="First slide"
                            />
                            <Carousel.Caption style={{backgroundColor : "rgba(255, 255, 255, 0.5)", borderRadius : "8px", color : "black"}}>
                                <h3>First Slider Image Title</h3>
                                <p>First Slide decription.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default CarouselList