import React from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className='className="bg-main-color border-top py-5' fluid>
            <Container>
                <Row className="justify-content-between"> {/* Use justify-content for better spacing */}
                    <Col md={4} sm={6} xs={12} className="mb-4">
                        <h5 className='text-main-color'>About Ember</h5>
                        <div className='d-flex gap-2 flex-column'>
                            <Link className='text-main-color hover' to="/about">About</Link>
                            <Link className='text-main-color hover' to="/shop">Shop</Link>
                            <Link className='text-main-color hover' to="/article">Article</Link>
                        </div>
                        <ul className="list-inline mt-3 social-icons "> {/* Use list-inline for horizontal icons */}
                            <li className="list-inline-item">
                                <a href="#" className="text-decoration-none text-main-color">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-decoration-none text-main-color">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-decoration-none text-main-color">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} sm={6} xs={12} className="mb-4">
                        <h5 className='text-main-color'>Contact</h5>
                        <ul className="list-unstyled mt-3 text-main-color">
                            <li>123 Main Street</li>
                            <li>Anytown, CA 91234</li>
                            <li><a href="mailto:info@example.com" className="text-decoration-none text-main-color">info@example.com</a></li>
                            <li>(555) 555-5555</li>
                        </ul>
                    </Col>
                    <Col md={4} sm={6} xs={12} className="mb-4">
                        <h5 className='text-main-color'>Newsletter</h5>
                        <Form className="mb-3" >  {/* Use Form for better styling */}
                            <InputGroup>
                                <Form.Control
                                    type="email"
                                    placeholder="Your Email"
                                    aria-label="Email"
                                    required
                                />
                                <Button className='bg-button-color' type="submit">Subscribe</Button>
                            </InputGroup>
                        </Form>
                        <p className="text-muted small">No spam, unsubscribe at any time</p>
                    </Col>
                </Row>
                <div className="text-center mt-4"> {/* Centered copyright */}
                    <p className="text-muted small">© 2024 Ember  ·  Made by hyeucong</p>
                </div>
            </Container>
        </Container>
    );
};

export default Footer;
