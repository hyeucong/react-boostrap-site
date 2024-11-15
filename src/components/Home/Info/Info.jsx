import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from '../Slider/Slider'
import logo from "../../../assets/logo.png";

const Info = () => {
    const imgData = [
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJP7zEBMWvBKHZyczNG04anUR982dJQEIptbSr",
            alt: ""
        },
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJWPM8wHCa4DqSBPEGIZ1Nk7mcRvxjTh6uL9pg",
            alt: ""
        },
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJFc85zWpIdq87g0Lc6eN1xBGaw5RivXr9lSDZ",
            alt: ""
        },
        {
            src: "https://utfs.io/f/I2f0Fqj4SMNJMi3n3UX6e2q9GSkfch1ZOlC3AJwErRjNdB0i",
            alt: ""
        },
    ]


    return (
        <Container className='py-5 px-0'>
            <div className="container-fluid py-5">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-md-10">
                        <img src={logo} alt="logo" width="150" className="d-inline-block" />
                        <h2 className='fw-medium text-main-color'>The best glasses in one place</h2>
                        <p className="lead text-sub-color">
                            Ember brings you an incredible selection of premium eyewear.
                        </p>
                    </div>
                    <div className="col-md-12 pt-3 pb-5 gutter-fix">
                        <Slider imgData={imgData}></Slider>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Info
