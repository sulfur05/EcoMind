import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './products.css'

const companies = [
  {
    name: 'Nicobar',
    image: 'nicobar_image_url',
    description: 'Description of Nicobar',
    link: 'https://www.nicobar.com/'
  },
  {
    name: 'BLabel',
    image: 'blabel_image_url',
    description: 'Description of BLabel',
    link: 'https://www.blabel.in/'
  },
  {
    name: 'No Nasties',
    image: 'nonasties_image_url',
    description: 'Description of No Nasties',
    link: 'https://www.nonasties.in/'
  },
  {
    name: 'Fabindia',
    image: 'fabindia_image_url',
    description: 'Description of Fabindia',
    link: 'https://www.fabindia.com/'
  },
  {
    name: 'Doodlage',
    image: 'doodlage_image_url',
    description: 'Description of Doodlage',
    link: 'https://www.doodlage.in/'
  }
];

const CompanyCard = ({ name, image, description, link }) => (
  <Col md={4} className="mb-4">
    <div>
      <Card style={{border: 'none' }}>
        <div className="card-image">
          <Card.Img variant="top" src={image} alt={name} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <a href={link} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </Card.Body>
      </Card>
    </div>
  </Col>
);

const ClothingAndFashion = () => {
  return (
    <div className='bgColor'>
      <Container>
      <h1 className='mb-4'>Clothing and Fashion</h1>
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
