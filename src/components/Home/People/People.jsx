import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <Container style={{ backgroundColor: "#fefaf1" }} fluid className='border-top border-bottom py-5'>
            <Container className='py-5'>
                <div className='d-flex justify-content-center flex-column align-items-center text-center py-3'>
                    <div className="lc-block">
                        <h1 className='fw-medium py-2 text-main-color' style={{ fontSize: "4rem" }}>What are people saying?</h1>
                        <p className="lead text-sub-color">
                            Some nice words from nice people that use Ember
                        </p>
                    </div>
                </div>
                <div className="card bg-light lc-block">
                    <div className="card-body p-md-4 py-xxl-6 position-relative">
                        <Row className="gx-md-0 gx-xl-7">
                            <Col lg={12} xl={12} className="text-center py-5 py-lg-4 px-5">
                                <div className="mb-5 col-xl-10 mx-auto">
                                    <p className="fs-5">
                                        "I'm incredibly impressed with the level of craftsmanship that went into these sunglasses. They're not only functional but also aesthetically pleasing.”
                                    </p>
                                </div>
                                <div>
                                    <h2 className="h5">Dr. Andre</h2>
                                    <p className="text-muted lead">Web engineer</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Testimonial;
