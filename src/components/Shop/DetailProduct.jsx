import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext, CartProvider } from '../Context/CartContext';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://6735cef35995834c8a942bb1.mockapi.io/products/0/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleAddToCart = () => {
        addToCart(product);
        console.log(product);
        console.log("Product added to cart!");
    };

    if (!product) {
        return null;
    }



    return (
        <Container className="py-5 bg-main-color" fluid>
            <Container>
                <Row>
                    <Col md={6}>
                        <Card className='rounded-3 hover'>
                            <Card.Img variant="top" src={product.image} style={{ height: "100%", objectFit: "cover" }} className='rounded-3' />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <p className='fw-medium text-sub-color'>
                                    {product.category}
                                </p>
                                <Card.Title className='text-main-color fw-bold'>{product.title}</Card.Title>
                                <Card.Text className='text-main-color fw-medium'>
                                    ${product.price}
                                </Card.Text>
                                <Card.Text>{product.description}</Card.Text>
                                <Button className="bg-button-color hover" onClick={handleAddToCart}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ProductDetail;
