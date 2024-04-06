import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './products.css';

const homeCompanies = [
  {
    name: 'Brown Living',
    image: 'https://media.istockphoto.com/id/1166945451/photo/wooden-soap-dish-soap-eucalyptus-over-green-background-zero-waste-natural-organic-bathroom.jpg?s=612x612&w=0&k=20&c=rfKXuoPfN4Suz5tNVwIlBS220RowKAt00upmQ51ZP3g=',
    description: 'Focuses on sustainable and eco-friendly home decor and lifestyle products at affordable prices.',
    link: 'https://www.brownliving.in/'
  },
  {
    name: 'The Better Home',
    image: 'https://media.istockphoto.com/id/1494734880/photo/modern-minimal-white-fabric-bolster-back-corner-sofa-cushion-wooden-side-table-on-japanese.jpg?s=612x612&w=0&k=20&c=MLxTqFQi_ipxcA8lM_ZjtmKR6ssv45Z7z3s37ACulw4=',
    description: 'Offers environmentally friendly home cleaning and care products that are safe and effective.',
    link: 'https://www.thebetterhome.com/'
  },
  {
    name: 'Greenfeels',
    image: 'https://media.istockphoto.com/id/1165099786/photo/cotton-bag-glass-jar-green-leaves-and-recycled-tableware-top-view-zero-waste-eco-friendly.jpg?s=612x612&w=0&k=20&c=WeWYYa0f5iB73X-2ibZWE1Tfga7cIUWUBSt-0rKkuyw=',
    description: 'Provides sustainable and stylish home and lifestyle products, promoting a green and conscious lifestyle.',
    link: 'https://www.greenfeels.in/'
  }
];

const HomeAndLifestyle = () => (
  <div className='bgColor'>
    <Container>
      <h1 className='mb-4 text-emerald-100'>Home and Lifestyle</h1>
      <Row>
        {homeCompanies.map((company, index) => (
          <HomeCompanyCard key={index} {...company} />
        ))}
      </Row>
    </Container>
  </div>
);

const HomeCompanyCard = ({ name, image, description, link }) => (
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

export default HomeAndLifestyle;
