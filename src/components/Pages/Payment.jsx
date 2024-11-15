import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const PaymentSuccessPage = () => {
    const location = useLocation();
    const orderId = location.state?.orderId;
    const navigate = useNavigate();
    const [redirectTime, setRedirectTime] = useState(10);

    useEffect(() => {
        if (!orderId) {
            navigate('/checkout');
            return;
        }

        const timer = setTimeout(() => {
            navigate('/');
        }, redirectTime * 1000);

        return () => clearTimeout(timer);
    }, [orderId, navigate, redirectTime]);


    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h1>Payment Successful!</h1>
                    {orderId && <p>Your order ID is: {orderId}</p>}
                    <p>
                        Thank you for your order. You will receive a confirmation email shortly.
                        You will be redirected to the homepage in {redirectTime} seconds.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};


export default PaymentSuccessPage;
