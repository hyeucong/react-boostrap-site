import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';


const FeatureCard = ({ icon, title }) => (
    <div className={`d-flex flex-column text-center lc-block p-4 py-5 border rounded-3 text-white hover`} style={{ backgroundColor: "#00574e" }}>
        <div className="lc-block">
            {icon}
        </div>
        <div className="lc-block mb-4 py-5">
            <h4>{title}</h4>
        </div>
    </div>
);

const FeaturesSection = () => {

    const cardData = [
        { title: "UV Protection Guarantee 100%", icon: <FontAwesomeIcon icon={faShieldHalved} size="2x" style={{ color: "white" }} /> },
        { title: "Aftercare and Ongoing Support", icon: <FontAwesomeIcon icon={faUsers} size="2x" style={{ color: "white" }} /> },
        { title: "Fixes, Adjustments & Cleaning", icon: <FontAwesomeIcon icon={faCog} size="2x" style={{ color: "white" }} /> },
    ];


    return (
        <Container className="py-5">
            <Row className='py-5'>
                <Col md={12} className="text-center">
                    <div className='d-flex justify-content-center flex-column align-items-center text-center'>
                        <div className="lc-block">
                            <h1 className='fw-medium py-2 text-main-color' style={{ fontSize: "3rem" }}>Ember clients receive the full suite of our services</h1>
                            <p className="lead text-sub-color">
                                Have question? Email us at hyeucong86@gmail.com.
                            </p>
                        </div>
                    </div>
                </Col>
                <Row className="d-flex justify-content-center mt-3 mt-md-5">
                    {cardData.map((data, index) => (
                        <Col md={6} lg={5} xl={4} key={index} className="mb-4 mb-xl-0">
                            <FeatureCard {...data} /> {/* Pass icon directly from cardData */}
                        </Col>
                    ))}
                </Row>
            </Row>

        </Container>
    );
};

export default FeaturesSection;
