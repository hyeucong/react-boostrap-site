import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
    return (
        <Container fluid className='bg-main-color'>
            <Container className="py-5 d-flex flex-column">
                <Row className='align-items-center justify-content-center'>
                    <Col md={6} className=''>
                        <h1 className='fw-medium text-main-color' style={{ fontSize: "4rem" }}>Slowing Down Fashion</h1>
                        <p className="lead">
                            Find great quality sunglasses that don’t sacrifice the environment or the people that made them.
                        </p>
                        <p className="lead">
                            Ember Eyewear is a place to discover sunglasses made with care and learn about sustainable eyewear practices. We put sustainable brands front and center.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Image
                            src="https://utfs.io/f/I2f0Fqj4SMNJp7GWflwH4xMbyeS81vV6NtTlo0wmW9rIgCkO"
                            alt="Sunglasses"
                            fluid
                            className='rounded-3'
                        />
                    </Col>
                </Row>
                <Row className='align-items-start justify-content-center py-5'>
                    <Col md={6} className=''>
                        <h1 className='fw-medium text-main-color' style={{ fontSize: "4rem" }}>Our story</h1>
                    </Col>
                    <Col md={6}>
                        <p className="lead">
                            The story of Ember Eyewear goes back a few years. There were two sides to it. Firstly, we were becoming more aware of the environmental impact of eyewear production, and the working conditions of those who make them. Secondly, we hated that sunglasses were often made with cheap materials, designed for disposability after a single season. We made a pact to buy better sunglasses. We realised it’s a lot easier said than done. Hours of research. Too many tabs and too little information. Our questions remained — how were they made? Who made them? Can we trust the brand? Constantly thinking, why is it this hard to understand the true cost of sunglasses. The eyewear industry isn't always transparent. But if you have time to dig — there are some truly remarkable things out there. Brands that design with care, treat workers well, and show love for the planet. We learnt a lot on our journey to buy better eyewear, and we want to make this information more accessible. That’s why we made Ember Eyewear. A place you can trust without big-brand hype. Our goal is to help people make informed sunglass purchases. <br /> <br /> Broy and Evelyn, <br /> Team Ember.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>

    );
};

export default About;
