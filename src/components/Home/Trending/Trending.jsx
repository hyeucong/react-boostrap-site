import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card } from 'react-bootstrap';

const SimpleSlider = (props) => {
    const imgData = props.imgData;
    var settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {imgData.map((image, index) => (
                <div key={index}>
                    <img className="rounded img-fluid" src={image.src} alt={image.alt} style={{ width: '95%', display: 'block', margin: '0 auto' }} />
                    <Card.Body className='d-flex flex-row justify-content-between pt-4' style={{ width: '95%', margin: '0 auto' }}>
                        <div>
                            <Card.Title className='fw-medium text-main-color'>Chromatic Shift</Card.Title>
                            <p className='fw-medium text-sub-color pt-2'>
                                Fashion
                            </p>
                        </div>
                        <Card.Text className='fw-medium text-main-color'>
                            30$
                        </Card.Text>
                    </Card.Body>
                </div>
            ))}
        </Slider>
    );
}

const Info = () => {
    const imgData = [
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJ6qA7CE35Kcf3wJQMAgBIdPj0V82ENveXZY91",
            alt: "Image 1 Description"
        },
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJXCw33g9KwBZhAcTqEv49WV5n3bSgGN0xCkzD",
            alt: "Image 1 Description"
        },
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJMczjOzX6e2q9GSkfch1ZOlC3AJwErRjNdB0i",
            alt: "Image 1 Description"
        },
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJLtBUfgPY5fmE0wJBC7avpeVoxrhDTkO1ldNj",
            alt: "Image 1 Description"
        },
    ]


    return (
        <Container className='py-5 px-0'>
            <div className="container-fluid py-5">
                <div className="col-md-6">
                    <p className="mb-0 text-sub-color fw-bold">
                        Featured
                    </p>
                    <h2 className='pb-3 text-main-color'>Trending this month</h2>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-12 gutter-fix">
                        <SimpleSlider imgData={imgData}></SimpleSlider>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Info
