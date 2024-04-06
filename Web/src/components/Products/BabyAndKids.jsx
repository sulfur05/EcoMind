import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './products.css';

const babyAndKidsCompanies = [
  {
    name: 'Bumpadum',
    image: 'https://media.istockphoto.com/id/1296538545/photo/baby-cloth-diapers-for-girls.jpg?s=612x612&w=0&k=20&c=fRLuHKSq_nBQv61WPmY51u3Y-wirZZMyVik-e3F430w=',
    description: 'Provides eco-friendly cloth diapers and baby essentials, focusing on comfort and sustainability.',
    link: 'https://www.bumpadum.com/'
  },
  {
    name: 'Tura Turi',
    image: 'https://media.istockphoto.com/id/1395433628/photo/baby-and-child-clothes-toys-in-box-second-hand-apparel-idea.jpg?s=612x612&w=0&k=20&c=4hBDmxe3IrIOPEGWG51PoJbXZY_eVl30_CtpFBYEQTA=',
    description: 'Offers handmade and sustainable toys and accessories for kids, promoting creativity and eco-consciousness.',
    link: 'https://www.turaturi.com/'
  },
  {
    name: 'The Moms Co.',
    image: 'https://media.istockphoto.com/id/1257649082/vector/woman-sitting-on-a-huge-menstrual-cup-with-flowers-and-leaves-eco-protection-for-woman-in.jpg?s=612x612&w=0&k=20&c=NHCOfOcMm1EbK3A8w6FL584I78ZZx8SSA-LXBgCWJyY=',
    description: 'Specializes in natural and toxin-free baby and mother care products, ensuring safety and wellness.',
    link: 'https://www.themomsco.com/'
  }
];

const BabyAndKids = () => (
  <div className='bgColor'>
    <Container>
      <h1 className='mb-4 text-emerald-100'>Baby and Kids</h1>
      <Row>
        {babyAndKidsCompanies.map((company, index) => (
          <BabyAndKidsCompanyCard key={index} {...company} />
        ))}
      </Row>
    </Container>
  </div>
);

const BabyAndKidsCompanyCard = ({ name, image, description, link }) => (
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

export default BabyAndKids;
