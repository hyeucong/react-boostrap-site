import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const sampleSunglassesData = [
    {
        title: 'Aviator Classics Reimagined',
        date: '2023-11-15',
        content: 'Timeless aviator style gets a modern update with lightweight materials and polarized lenses.',
        imageUrl: 'https://utfs.io/f/I2f0Fqj4SMNJoKxhYlrB8ZhrPUMHjaTRm4InOQeNyFcxDi6G',
    },
    {
        title: 'Sporty Shades for Peak Performance',
        date: '2023-11-10',
        content: 'Enhance your athletic pursuits with sunglasses designed for optimal vision and comfort during any activity.',
        imageUrl: 'https://utfs.io/f/I2f0Fqj4SMNJOy8mkCCDnUyiSrMDuIoxTHVvtCeRGZAaq8jX',
    },
    {
        title: 'Retro Chic Sunglasses Collection',
        date: '2023-11-05',
        content: 'Step back in time with vintage-inspired sunglasses featuring bold frames and vibrant colors.',
        imageUrl: 'https://utfs.io/f/I2f0Fqj4SMNJLQHzFkY5fmE0wJBC7avpeVoxrhDTkO1ldNjy',

    },
    {
        title: 'Designer Frames for Every Face',
        date: '2023-10-30',
        content: 'Discover the perfect pair of designer sunglasses to complement your unique facial features and personal style.',
        imageUrl: 'https://utfs.io/f/I2f0Fqj4SMNJ3iS7mGL8VMP4RYn06IXOmdrfzAqxleQhosKw',
    },
    {
        title: 'Polarized Lenses for Ultimate Clarity',
        date: '2023-10-25',
        content: 'Experience unparalleled visual clarity and reduced glare with our premium polarized sunglasses.',
        imageUrl: 'https://utfs.io/f/I2f0Fqj4SMNJ94KyMmzdgYJ0sE7Q2icTmIKUHyXPo8LOzn35',
    },
];

const NewsArticles = () => {
    return (
        <Container className='py-5 bg-main-color' fluid>
            <Container className=''>
                <Row>
                    {sampleSunglassesData.map((article, index) => (
                        <Col md={12} key={index} className="mb-4 px-4 hover">
                            <Row className='align-items-center bg-white rounded-3 '>
                                <Col md={6} className='p-0'>
                                    <img src={article.imageUrl} alt="" className='img-fluid rounded-start-3' />
                                </Col>
                                <Col md={6} className='p-0'>
                                    <Container>
                                        <Card.Body className='ps-4 d-flex flex-column justify-content-between gap-3'>
                                            <Card.Title className='text-main-color'>{article.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{article.date}</Card.Subtitle>
                                            <Card.Text>{article.content}</Card.Text>
                                        </Card.Body>
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default NewsArticles;
