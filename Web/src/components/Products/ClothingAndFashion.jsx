import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './products.css';

const companies = [
  {
    name: 'Nicobar',
    image:'https://media.istockphoto.com/id/1292562223/photo/women-clothing-collection-on-hangers-in-the-store-the-concept-of-conscious-consumption-and.jpg?s=612x612&w=0&k=20&c=YoDAVeEiopG_5XPoWfJYqP3KowZRFamwb3t9RbG5s-8=',
    description: 'Offers contemporary Indian clothing and lifestyle products that blend tradition with modernity.',
    link: 'https://www.nicobar.com/'
  },
  {
    name: 'BLabel',
    image: 'https://media.istockphoto.com/id/1403297337/photo/second-hand-clothes-on-the-rail-the-concept-of-sustainable-economic-life-sale-of-clothes.jpg?s=612x612&w=0&k=20&c=2iVuxH7T0OwrOTC8PVuEmKHfe79g0WjTxVl7eUPV3zA=',
    description: 'Specializes in sustainable and eco-friendly fashion, promoting ethical practices in clothing production.',
    link: 'https://www.blabel.in/'
  },
  {
    name: 'No Nasties',
    image: 'https://media.istockphoto.com/id/1334431662/photo/woman-holding-paper-bag-with-reuse-sign-and-full-of-apparel-pack-with-reuse-symbol-clothes.jpg?s=612x612&w=0&k=20&c=NlX7wUU3uaD8U7WYSZCEJGrLdpL-NQomYycr9RYWawQ=',
    description: 'Provides organic and fair-trade clothing, prioritizing sustainability and social responsibility.',
    link: 'https://www.nonasties.in/'
  },
  {
    name: 'Fabindia',
    image: 'https://media.istockphoto.com/id/1358850502/photo/slow-fashion-concept-orange-knitted-sweater-on-beige-background-conscious-and-environmentally.jpg?s=612x612&w=0&k=20&c=N2l-ob1SG_a77h4MZXbmaQppysikAl4ft2b1gQw5oz4=',
    description: 'Known for its traditional Indian handcrafted products, including clothing, accessories, and home decor.',
    link: 'https://www.fabindia.com/'
  },
  {
    name: 'Doodlage',
    image: 'https://media.istockphoto.com/id/1363115810/photo/cotton-fabric-with-label-saying-100-recycled-fabric.jpg?s=612x612&w=0&k=20&c=60O6WaPVca3RGBQPVt-ioovMkgfUzJVAnfOAYsVz278=',
    description: 'Focuses on upcycled and recycled fashion, creating unique and eco-conscious clothing pieces.',
    link: 'https://www.doodlage.in/'
  }
];

const CompanyCard = ({ name, image, description, link }) => (
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

const ClothingAndFashion = () => {
  return (
    <div className='bgColor'>
      <Container>
        <h1 className='mb-4 text-white'>Clothing and Fashion</h1>
        <Row>
          {companies.map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ClothingAndFashion;
