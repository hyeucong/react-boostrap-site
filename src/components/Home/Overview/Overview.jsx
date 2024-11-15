import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Card = ({ imgSrc, title, description, reverse }) => {
    return (
        <Container fluid className='py-5'>
            <Row className={`align-items-center ${reverse ? 'flex-lg-row-reverse' : ''}`}>
                <Col lg={5} md={12}>
                    <div className={`w-100 ${reverse ? 'w-100 text-end' : ''}`}>
                        <h1 className='text-main-color'>{title}</h1>
                        <p className="lead text-sub-color">{description}</p>
                    </div>
                </Col>
                <Col lg={7} md={12}>
                    <Image
                        src={imgSrc}
                        loading="lazy"
                        alt="Card Image"
                        fluid
                        className="mb-4 mb-lg-0 rounded hover"
                    />
                </Col>
            </Row>
        </Container>
    );
};

const Overview = () => {
    const cardData = [
        {
            imgSrc: "https://images.unsplash.com/photo-1456421385613-d0666bb96b78?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Find timeless pieces that you’ll love",
            description: "Filter, browse and find sustainable essentials that you’ll use over and over again. Better for you, better for the planet."
        },
        {
            imgSrc: "https://utfs.io/f/I2f0Fqj4SMNJ5kqDeYBTGTUk1ZVEAq4Bw83OeaRdSntL27XP",
            title: "Tailored Care and Personalised Service",
            description: "Choosing the right eyewear is a highly personal decision, contributing to your style and self-expression.",
            reverse: true // Add reverse prop for the second card
        },
        {
            imgSrc: "https://utfs.io/f/I2f0Fqj4SMNJD11nEWvvgQ3hEokp9lYPuWV6R8cJOM5XZ10B",
            title: "World Class Optometry Services",
            description: "Led by vision researcher and Bar-Ilan University lecturer Noah Rappeport, our team helps thousands achieve optimal vision."
        }
    ];

    return (
        <Container style={{ backgroundColor: "#fefaf1" }} fluid className='border-top py-5 border-bottom'>
            <Container className='py-5'>
                <div className='d-flex justify-content-center align-items-center text-center'>
                    <h1 className='fw-medium text-main-color py-2' style={{ fontSize: "4rem" }}>How it works</h1>
                </div>
                <div>
                    {cardData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </Container>
        </Container>

    );
};

export default Overview;
