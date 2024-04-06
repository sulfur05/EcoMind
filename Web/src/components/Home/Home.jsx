import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './styles.css'; 


const companies = [
  {
    name: 'Brands',
    title: 'Shop with Purpose! ',
    description: 'Explore our curated directory of sustainable brands creating positive change.',
  },
  {
    name: 'Articles',
    title: 'Every small step matters! ',
    description: 'Access tips, guides, and tutorials for easy ways to live a more sustainable life.',
  },
  {
    name: 'Chat Forum',
    title: 'Together, we are stronger! ',
    description: 'Join our vibrant community to share ideas, collaborate, and make a real impact.',
  },
  {
    name: 'Charity',
    title: 'Sustainability is fulfilling! ',
    description: 'Experience the joy of supporting ethical brands and making a difference.',
  },
];


const CompanyCard = ({ name, title, description, priceRange, link }) => (
  <Col md={6} className="">
    <div className="card-wrapper">
      <Card style={{ border: 'none' }} className="bg-gray-400 p-8">
        <Card.Body>
          <Card.Title style={{ fontSize: '2rem' }}>{name}</Card.Title>
          <Card.Text className="card-text text-center" style={{ color: '#333' , fontSize:'1.35rem' }}>{title}</Card.Text>
          <Card.Text className="card-text text-center" style={{ color: '#333' }}>{description}</Card.Text>
          <Card.Text className="card-text text-center" style={{ color: '#333' }}>{priceRange}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  </Col>
);

const Home = () => {
  return (
    <>
    <div className="bg-teal-500/20 blend-div relative overflow-hidden">
        <video
          src='images/background.mp4'
          autoPlay
          loop
          muted
          className="blend-video w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex">
          <div className="absolute w-full h-full flex flex-col items-center justify-center m-4">
            
            <div className="heading text-white text-4xl md:text-6xl lg:text-8xl font-bold pl-4 lg:pl-0">
              EcoMind
            </div>
            <div className="subheading text-white text-2xl md:text-3xl font-bold m-4 p-2">
              Sustainability Made Easy
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className='bgColor'>
          <Container>
          <div className="subheading text-white text-2xl md:text-3xl font-bold m-4 p-2">
        “A sustainable lifestyle isn't just about saving the planet; it's about creating a better world for ourselves and future generations”
        </div>
          <h1 className='m-4 text-white'>Our Features</h1>
            <Row>
              {companies.map((company, index) => (
                <CompanyCard key={index} {...company} />
              ))}
            </Row>
          </Container>
        </div>   
      </div>
    <div className="page1 min-h-screen flex flex-col items-center justify-center bg-green-950">
        <div className="m-5 w-3/3">
          <img
            src='images/page3.png'
            alt=""
            className="w-auto h-auto opacity-70 shadow-2xl"
          />
        </div>
      </div>
      <div className="page2 min-h-screen flex flex-col items-center justify-center bg-green-950">
        <div className="m-5 w-3/3">
          <img
            src='images/page4.png'
            alt=""
            className="w-auto h-auto opacity-70 shadow-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
