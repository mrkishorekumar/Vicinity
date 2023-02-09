import React from 'react'
import ReactPlayer from 'react-player';
import Carousel from 'react-bootstrap/Carousel';
import './Test.css'

function Test() {

    const videoProperties = [
        {
          id: 1,
          title: "Video 1",
          src: "https://mdbcdn.b-cdn.net/img/video/Tropical.mp4",
          credit: "Video by cottonbro from Pexels",
        },
        {
          id: 2,
          title: "Video 2",
          src: "https://mdbcdn.b-cdn.net/img/video/Tropical.mp4",
          credit: "Video by cottonbro from Pexels",
        },
        {
          id: 3,
          title: "Video 3",
          src: "https://mdbcdn.b-cdn.net/img/video/Tropical.mp4",
          credit: "Video by cottonbro from Pexels",
        },
      ];

    return (
            <Carousel>
                {videoProperties.map((videoObj) => {
                    return (
                        <Carousel.Item key={videoObj.id}>
                            <ReactPlayer
                                url={videoObj.src}
                                pip={true}
                                controls={true}
                                playing={true}
                            />
                            <Carousel.Caption>
                                <h3>{videoObj.title}</h3>
                                <p>{videoObj.credit}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
    )
}

export default Test