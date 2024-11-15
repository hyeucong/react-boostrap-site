import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faXmark, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../components/Context/CartContext';

const Navigation = () => {
    const [showCart, setShowCart] = useState(false);
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const handleShowCart = () => setShowCart(!showCart);
    const handleCloseCart = () => setShowCart(false);

    const handleCheckout = () => {
        handleCloseCart();
        navigate('/checkout');
    };

    return (
        <Container fluid style={{ height: "80px" }}>
            <Navbar expand="lg" className="border-bottom bg-light" fixed="top">
                <Container className='gap-4'>
                    <Link to="/" className='pb-2 hover'> <img src={logo} alt="logo" width="150" className="d-inline-block" /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto mx-4 d-flex gap-2">
                            <Link className='text-main-color nav-link hover' to="/shop">SHOP</Link>
                            <Link className='text-main-color nav-link hover' to="/article">ARTICLE</Link>
                            <Link className='text-main-color nav-link hover' to="/about">ABOUT</Link>
                        </Nav>
                        <Row>
                            <Col xs="auto" className='d-flex gap-2 py-3'>
                                <Button type="submit" className='bg-button-color hover' onClick={handleShowCart}>
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span className="cart-count">{cart.length}</span>
                                </Button>
                            </Col>
                        </Row>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='d-flex flex-column justify-content-between'>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul className='list-group ps-0'>
                            {cart.map((item) => (
                                <li key={item.id} className="list-group-item d-flex flex-column align-items-start">
                                    <Container fluid className='d-flex align-items-center justify-content-between'>
                                        <div className="d-flex align-items-center">
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Button onClick={() => removeFromCart(item.id)} className=' bg-button-color'>
                                                <FontAwesomeIcon icon={faXmark} />
                                            </Button>
                                        </div>
                                    </Container>
                                    <Container className='d-flex align-items-center justify-content-between'>
                                        <div className='d-flex align-items-center'>
                                            <div className="me-2">
                                                <Button onClick={() => decreaseQuantity(item.id)} variant="outline-secondary" size="sm" disabled={item.quantity <= 1}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </Button>
                                            </div>
                                            <div className="me-2">{item.quantity}</div>
                                            <div className="me-2">
                                                <Button onClick={() => increaseQuantity(item.id)} variant="outline-secondary" size="sm">
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </Button>
                                            </div>
                                        </div>
                                        <span className="me-2">${(item.price * item.quantity).toFixed(2)}</span>
                                    </Container>
                                </li>
                            ))}
                        </ul>
                    )}

                    {cart.length > 0 && (
                        <Button className=" bg-button-color" onClick={handleCheckout}>Checkout</Button>
                    )}
                </Offcanvas.Body>

            </Offcanvas>

        </Container>
    );
};

export default Navigation;
