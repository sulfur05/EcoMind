import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './products.css';

const foodCompanies = [
  {
    name: 'Earthy Tales',
    image: 'https://media.istockphoto.com/id/1127769214/photo/zero-waste-shopping-concept.jpg?s=612x612&w=0&k=20&c=AE8mI6Jc16Wgico0nculuyKMMvKk62JakviABHJ2ECs=',
    description: 'Offers organic and natural food products, promoting healthy and sustainable eating habits.',
    link: 'https://www.earthytales.in/'
  },
  {
    name: 'Pure & Sure',
    image: 'https://media.istockphoto.com/id/1210531301/photo/juices-in-all-the-colours-of-the-rainbow.jpg?s=612x612&w=0&k=20&c=E3S5yfsPR-s8mWK7k2MEHe18_UcuB0F48DzWDKAORPY=',
    description: 'Provides certified organic food products, ensuring purity and quality for health-conscious consumers.',
    link: 'https://www.pureandsure.in/'
  }
];

const FoodAndBeverages = () => (
  <div className='bgColor'>
    <Container>
      <h1 className='mb-4 text-emerald-100'>Food and Beverages</h1>
      <Row>
        {foodCompanies.map((company, index) => (
          <FoodCompanyCard key={index} {...company} />
        ))}
      </Row>
    </Container>
  </div>
);

const FoodCompanyCard = ({ name, image, description, link }) => (
  <Col md={4} className="mb-5">
    <div className="card-wrapper">
      <Card style={{ border: 'none' }} className="bg-gray-400">
        <div className="card-image">
          <Card.Img variant="top" src={image} alt={name} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="card-text text-center" style={{ color: '#333' }}>{description}</Card.Text>
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">Visit Website</a>
        </Card.Body>
      </Card>
    </div>
  </Col>
);

export default FoodAndBeverages;
