import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                </div>
            ))}
        </Slider>
    );
}

export default SimpleSlider;
