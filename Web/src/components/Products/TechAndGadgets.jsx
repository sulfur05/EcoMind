import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './products.css';

const techCompanies = [
  {
    name: 'Leaf Wearables',
    image: 'https://media.istockphoto.com/id/1335669510/vector/vector-isometric-devices-set.jpg?s=612x612&w=0&k=20&c=DBjsHSWGxGDkKrWTFus2CvvCDUHhksziuj8cN4FZKwo=',
    description: 'Specializes in wearable technology, including fitness trackers and smartwatches, focusing on affordability and innovation',
    link: 'https://www.leafstudios.in/'
  },
  {
    name: 'Ather Energy',
    image: 'https://media.istockphoto.com/id/1074903614/vector/electric-scooter-for-sharing.jpg?s=612x612&w=0&k=20&c=G9W93pPqXLlPCmg8nOOn-lU5ndg2Y3WJpTamg_SYnPE=',
    description: 'Electric vehicle manufacturer known for producing smart and eco-friendly electric scooters.',
    link: 'https://www.atherenergy.com/'
  },
  {
    name: 'GreenSutra',
    image: 'https://media.istockphoto.com/id/1299953733/photo/reduce-carbon-dioxide-emissions-to-limit-global-warming-and-climate-change-commitment-to.jpg?s=612x612&w=0&k=20&c=mBQSJP0j-0odUtgN9jCVlZJQaD6hVWVviZaV-zOrOAM=',
    description: 'Offers eco-friendly and sustainable tech products and solutions, promoting environmental consciousness.',
    link: 'https://www.greensutra.in/'
  }
];

const TechAndGadgets = () => (
  <div className='bgColor'>
    <Container>
      <h1 className='mb-4 text-emerald-100'>Tech and Gadgets</h1>
      <Row>
        {techCompanies.map((company, index) => (
          <TechCompanyCard key={index} {...company} />
        ))}
      </Row>
    </Container>
  </div>
);

const TechCompanyCard = ({ name, image, description, link }) => (
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

export default TechAndGadgets;
