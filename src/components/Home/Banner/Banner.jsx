import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid className="px-4 py-5 text-center border-bottom" style={{
            backgroundColor: "#fefaf1", minHeight: "100dvh"
        }}>
            <Row>
                <Col>
                    <h1 className='fw-medium text-main-color glow' style={{ fontSize: "4rem" }}>Handpicked. <br /> Sustainable. Essentials.</h1>
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col lg={6}>
                    <p className="lead text-sub-color">
                        Life's a beach, relax and enjoy the view... with the perfect pair of shades.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center mb-5 gap-3">
                <Col xs="auto" className='px-0'>
                    <Button href="#" size="lg" className="px-4 bg-button-color fw-bold hover">
                        SHOP ESSENTIALS
                    </Button>
                </Col>
                <Col xs="auto" className='px-0'>
                    <Button href="#" size="lg" className="px-4 border bg-light text-main-color fw-bold hover">
                        LEARN MORE
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-center pb-5">
                <Col>
                    <div style={{ maxHeight: '60dvh', overflow: 'hidden' }}>
                        <Container className="px-5 rounded-top-3">
                            <img
                                src="https://utfs.io/f/I2f0Fqj4SMNJMgza8GX6e2q9GSkfch1ZOlC3AJwErRjNdB0i"
                                alt="Photo by Pankaj Patel"
                                className="img-fluid border rounded-top-3 shadow-lg "
                            />
                        </Container>
                    </div>
                </Col>
            </Row>

        </Container >
    );
};

export default Banner;
