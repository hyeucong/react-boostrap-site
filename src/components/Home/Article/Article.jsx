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
                            <Card.Title className='fw-medium text-main-color'>{image.title}</Card.Title>
                            <p className='fw-medium text-sub-color pt-2'>
                                {image.date}
                            </p>
                        </div>
                    </Card.Body>
                </div>
            ))}
        </Slider>
    );
}

const Article = () => {
    const imgData = [
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJPNo3h5WvBKHZyczNG04anUR982dJQEIptbSr",
            alt: "Image 1 Description",
            title: 'Aviator Classics Reimagined',
            date: '2023-11-15',
            content: 'Timeless aviator style gets a modern update with lightweight materials and polarized lenses.',
        },
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJvdEce6yxlu54A9p3wfZEFgGLoNTrIHjDPhek",
            alt: "Image 1 Description",
            title: 'Sporty Shades for Peak Performance',
            date: '2023-11-10',
            content: 'Enhance your athletic pursuits with sunglasses designed for optimal vision and comfort during any activity.',
        },
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJ5RzvRPTGTUk1ZVEAq4Bw83OeaRdSntL27XPD",
            alt: "Image 1 Description",
            title: 'Retro Chic Sunglasses Collection',
            date: '2023-11-05',
            content: 'Step back in time with vintage-inspired sunglasses featuring bold frames and vibrant colors.',
        },
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJSS0TFT53lut6xRDFfUeiMJH8YLWmqw2hCz4O",
            alt: "Image 1 Description",
            title: 'Designer Frames for Every Face',
            date: '2023-10-30',
            content: 'Discover the perfect pair of designer sunglasses to complement your unique facial features and personal style.',
        },
    ]


    return (
        <Container className='py-5 px-0'>
            <div className="container-fluid py-5">
                <div className="col-md-6">
                    <p className="mb-0 fw-bold text-sub-color">
                        ARTICLES
                    </p>
                    <h2 className='pb-3 text-main-color'>Read about sustainable fashion</h2>
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

export default Article
