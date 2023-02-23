import React from 'react'
import ReactPlayer from 'react-player';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/styles/video.css'

function VideoCarouselList({data}) {
  return (
    <Carousel>
                {data.map((videoObj) => {
                    return (
                        <Carousel.Item key={videoObj.id}>
                            <ReactPlayer
                                url={videoObj.url}
                                pip={true}
                                controls={true}
                                playing={true}
                            />
                            <Carousel.Caption>
                                <h3>{videoObj.name}</h3>
                                <p>{videoObj.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
  )
}

export default VideoCarouselList