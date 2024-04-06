import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './products.css';

const beautyCompanies = [
  {
    name: 'Forest Essentials',
    image: 'https://media.istockphoto.com/id/1341004223/photo/open-eco-friendly-cotton-reusable-bag-with-different-containers-from-natural-wood-and-brown.jpg?s=612x612&w=0&k=20&c=sqMyCUc2V8Q7vKEQdvFo1K1-oiV3jlMD0HECjFU65Z8=',
    description: 'Offers luxurious Ayurvedic skincare and haircare products using natural ingredients.',
    priceRange: 'Mid-Range to High-End',
    link: 'https://www.forestessentialsindia.com/'
  },
  {
    name: 'SoulTree',
    image: 'https://media.istockphoto.com/id/1200557416/photo/organic-herbal-cosmetic-products-on-green-background-top-view-beauty-spa-cosmetic-bottle.jpg?s=612x612&w=0&k=20&c=y_7vC-wUhwObHmT9waoUfcTjZGzf_hkEJyTNhsIDIFc=',
    description: 'Specializes in organic cosmetics and skincare inspired by Ayurveda and ethical practices.',
    priceRange: 'Mid-Range',
    link: 'https://www.soultree.in/'
  },
  {
    name: 'Juicy Chemistry',
    image: 'https://media.istockphoto.com/id/1210160424/photo/zero-waste-sustainable-bathroom-and-lifestyle.jpg?s=612x612&w=0&k=20&c=C1SiWC8VZpCx1ZMFXtHqVTkgcSUcPNjhQWlUJnoDps0=',
    description: 'Provides handmade organic skincare products, emphasizing affordability without compromising quality.',
    priceRange: 'Affordable',
    link: 'https://www.juicychemistry.com/'
  },
  {
    name: 'Kama Ayurveda',
    image: 'https://media.istockphoto.com/id/1140934856/photo/recycled-handmade-makeup-remover-pads-natural-balm-and-cream.jpg?s=612x612&w=0&k=20&c=fkuY9kKuaDPPLbhj7WeRtl6WlEOq9GZx5yBoYalWo9Y=',
    description: 'Known for its Ayurvedic skincare, haircare, and wellness products using natural ingredients.',
    priceRange: 'Mid-Range to High-End',
    link: 'https://www.kamaayurveda.com/'
  },
  {
    name: 'Khadi Essentials',
    image: 'https://media.istockphoto.com/id/1223169868/photo/woman-with-cotton-bag-buying-personal-hygiene-items-in-zero-waste-shop-eco-organic-cosmetics.jpg?s=612x612&w=0&k=20&c=nAVsqmNWIFDpUz8ipQ46gWXMfUeYU3Z1jygza55Z8mo=',
    description: 'Offers affordable Ayurvedic skincare and haircare solutions, promoting sustainability and authenticity.',
    priceRange: 'Affordable',
    link: 'https://www.khadiessentials.com/'
  }
];

const BeautyAndPersonalCare = () => (
  <div className='bgColor'>
    <Container>
      <h1 className='mb-4 text-emerald-100'>Beauty and Personal Care</h1>
      <Row>
        {beautyCompanies.map((company, index) => (
          <BeautyCompanyCard key={index} {...company} />
        ))}
      </Row>
    </Container>
  </div>
);

const BeautyCompanyCard = ({ name, image, description,priceRange, link }) => (
  <Col md={4} className="mb-5">
    <div className="card-wrapper">
      <Card style={{ border: 'none' }} className="bg-gray-400">
        <div className="card-image">
          <Card.Img variant="top" src={image} alt={name} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="card-text text-center" style={{ color: '#333' }}>{description}</Card.Text>
          <Card.Text className="card-text text-center" style={{ color: '#333' }}>{priceRange}</Card.Text>
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">Visit Website</a>
        </Card.Body>
      </Card>
    </div>
  </Col>
);

export default BeautyAndPersonalCare;
