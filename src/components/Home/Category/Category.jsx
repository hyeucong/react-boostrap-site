import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeatureCard = ({ imageSrc, title, description }) => {
    return (
        <Container fluid className='bg-white rounded-3 hover'>
            <Link className='text-main-color hover' to="/shop">
                <Row className="d-flex align-items-center justify-content-between">
                    <Col lg={4} md={6} sm={5} xs={6} className='px-0'>
                        <Image
                            src={imageSrc}
                            loading="lazy"
                            alt="Card Image"
                            fluid
                            className="mb-0 rounded-start"
                        />
                    </Col>
                    <Col lg={6} md={4} sm={4} xs={4} className='px-0'>
                        <h4 className="my-3 fs-6 text-center">{title}</h4>
                    </Col>
                    <Col lg={2} md={2} sm={3} xs={2} className='ps-2'>
                        <Button className='bg-button-color'>{description}</Button>
                    </Col>
                </Row></Link>

        </Container>
    );
};

const Category = () => {
    const features = [
        {
            imageSrc: "https://utfs.io/f/I2f0Fqj4SMNJb2aZ7I6GVqApeZWCH0xr6UIXh9wmb1lTFoM2",
            title: "Fashion",
            description: "6",
        },
        {
            imageSrc: "https://utfs.io/f/I2f0Fqj4SMNJ6F2UR935Kcf3wJQMAgBIdPj0V82ENveXZY91",
            title: "Brand",
            description: "4",
        },
        {
            imageSrc: "https://utfs.io/f/I2f0Fqj4SMNJXYBNHX9KwBZhAcTqEv49WV5n3bSgGN0xCkzD",
            title: "Wayfarer",
            description: "4",
        },
        {
            imageSrc: "https://utfs.io/f/I2f0Fqj4SMNJWbaB1OCa4DqSBPEGIZ1Nk7mcRvxjTh6uL9pg",
            title: "Oval",
            description: "3",
        },
        {
            imageSrc: "https://utfs.io/f/I2f0Fqj4SMNJ5AEExtTGTUk1ZVEAq4Bw83OeaRdSntL27XPD",
            title: "Polarized",
            description: "3",
        }
    ];

    return (
        <Container className='py-5' style={{ backgroundColor: '#3e012f', minHeight: '100dvh' }} fluid>
            <Container className='py-5'>
                <Row>
                    <Col md={12} className="text-center">
                        <div className="lc-block">
                            <h1 className='fw-medium text-white py-2' style={{ fontSize: "4rem" }}>Shop by category</h1>
                            <p className="lead text-white">
                                Looking for something specific?
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4 justify-content-center">
                    {features.map((feature, index) => (
                        <Col lg={4} md={6} sm={6} key={index} className='mb-4'>
                            <FeatureCard
                                imageSrc={feature.imageSrc}
                                title={feature.title}
                                description={feature.description}
                            />
                        </Col>
                    ))}
                </Row>
                {/* Rest of your content here */}
                <Row className="mt-5">
                    <Col md={12} className="text-center">
                        <Button size="lg" className="px-4 border bg-light text-main-color fw-bold hover">
                            <Link className='text-main-color hover' to="/shop">SHOP ALL</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>

    );
};

export default Category;
