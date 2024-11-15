import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { CartContext } from '../../components/Context/CartContext';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const CheckoutPage = () => {
    const { cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        discountCode: '',
    });

    const [totalPrice, setTotalPrice] = useState(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    const [discountApplied, setDiscountApplied] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDiscountChange = (e) => {
        setFormData({ ...formData, discountCode: e.target.value });
        applyDiscount(e.target.value);
    }


    const applyDiscount = (code) => {
        if (code === 'SAVE10') {
            const newTotalPrice = totalPrice * 0.9;
            setTotalPrice(newTotalPrice);
            setDiscountApplied(true);
        } else {
            setTotalPrice(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
            setDiscountApplied(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const orderData = { ...formData, cart, totalPrice };
            const response = await fetch('https://6735cef35995834c8a942bb1.mockapi.io/products/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const orderConfirmation = await response.json();

            const templateParams = {
                to_name: `${formData.firstName} ${formData.lastName}`,
                from_name: 'Your Store Name',
                to_email: formData.email,
                order_summary: cart.map(item => `${item.title} x ${item.quantity}`).join('\n'),
                total_price: totalPrice.toFixed(2),
                order_id: orderConfirmation.id,
                discountApplied: discountApplied ? "10%" : "0%",
            };

            emailjs.send("service_cayb8sp", "template_k4gthei", templateParams, "Sz29LVY7_-1voqeBH")
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                    clearCart();
                    navigate('/payment-success', { state: { orderId: orderConfirmation.id } });
                }, (error) => {
                    console.error('Email sending failed:', error.text);
                });

        } catch (error) {
            console.error('Error submitting order:', error);
        }
    };

    return (
        <Container className="py-5">
            <Row>
                <Col md={6} className='pb-3'>
                    <h2 className='text-main-color'>Shipping Details</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="city">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="zip">
                                    <Form.Label>ZIP / Postal Code</Form.Label>
                                    <Form.Control type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} required />
                        </Form.Group>


                    </Form>
                </Col>

                <Col md={6}>
                    <h2 className='text-main-color'>Order Summary</h2>
                    <Card>
                        <Card.Body>
                            <ul className="list-unstyled">
                                {cart.map(item => (
                                    <li key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                                        <div>{item.title} x {item.quantity}</div>
                                        <div>${(item.price * item.quantity).toFixed(2)}</div>
                                    </li>
                                ))}
                            </ul>
                            <hr />
                            <Form.Group className="mb-3" controlId="discountCode">
                                <Form.Label>Discount Code</Form.Label>
                                <Form.Control type="text" name="discountCode" value={formData.discountCode} onChange={handleDiscountChange} />
                            </Form.Group>
                            <div className="d-flex justify-content-between align-items-center fw-bold">
                                <div>Total:</div>
                                <div>${totalPrice.toFixed(2)}</div>
                            </div>
                            {discountApplied && <p>Discount applied: -10%</p>}
                            <Button className='bg-button-color w-100 p-3 fw-bold fs-5' type="submit">
                                Place Order
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckoutPage;
