import React from 'react';
import charity from './charities';
import { Card, Container, Row } from 'react-bootstrap';



const Charities = () => {
  return (
    <div className='back2'>
       
    <Container >
    <div className='charity-heading'>
            <h1>Charities you can donate to !</h1>
            <p>Choose the motive you would like to support and donate towards their hardwork!</p> 
            </div>
      <Row>
        {charity.map((charity, index) => (
          <Card key={index} style={{ width: '18rem', margin: '1rem', backgroundColor: '#eef6ed', display:'flex' , flexDirection:'column'}} className='charity-card'>
            <Card.Body>
              <Card.Title className='charity-title'> {charity.title}</Card.Title>
              {/* Add custom class for description text */}
              <Card.Text style={{
                fontSize: '0.8rem'
              }} 
              className='text-dark  charity-description'>{charity.desc}</Card.Text>
              <Card.Link className='btnn' href={charity.link}><button className='card-button'>Donate</button></Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Charities;
