import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListProduct = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://6735cef35995834c8a942bb1.mockapi.io/products/0');
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
                const uniqueCategories = ['all', ...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const filterProducts = () => {
            let filtered = products;

            if (selectedCategory !== 'all') {
                filtered = filtered.filter(product => product.category === selectedCategory);
            }

            if (searchTerm) {
                filtered = filtered.filter(product =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            setFilteredProducts(filtered);
        };

        filterProducts();
    }, [searchTerm, selectedCategory, products]);


    return (
        <Container fluid className='bg-main-color'>
            <Container className='py-5'>
                <Row>
                    <Col md={12} className='d-flex justify-content-between align-items-center'>
                        <DropdownButton
                            title={selectedCategory === 'all' ? 'Filter' : selectedCategory} //Improved display
                            id="category-dropdown"
                            onSelect={setSelectedCategory}
                            className="me-3"
                        >
                            <Dropdown.Item eventKey="all">All</Dropdown.Item>
                            {categories.slice(1).map(category => ( //Start from index 1 to skip "all"
                                <Dropdown.Item eventKey={category} key={category}>{category}</Dropdown.Item>
                            ))}
                        </DropdownButton>

                        <div className='d-flex justify-content-between align-items-center py-3 gap-3'>
                            <InputGroup style={{ width: "350px" }}>
                                <Form.Control
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Button className='bg-button-color' id="button-addon2">
                                    Search
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Row xs={1} sm={2} md={3} className="g-4">
                            {filteredProducts.map((product) => (
                                <Col key={product.id}>
                                    <Link to={`/product/${product.id}`}>
                                        <Card className='hover'>
                                            <Card.Img variant="top" src={product.image} style={{ height: "100%", objectFit: "cover" }} />
                                            <Card.Body className='d-flex flex-row justify-content-between'>
                                                <div>
                                                    <Card.Title className='fw-medium text-main-color'>{product.title}</Card.Title>
                                                    <p className='fw-medium text-sub-color'>
                                                        {product.category}
                                                    </p>
                                                </div>
                                                <Card.Text className='fw-medium text-main-color'>
                                                    ${product.price}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>

    );
};

export default ListProduct;
