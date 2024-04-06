import React from 'react';
import arts from './arts';
const homeArticles = arts.filter((article) => article.category === 'home');
import { Card, Container, Row } from 'react-bootstrap';

const Homes = () => {
  return (
    <div className='back'>
    <Container >
    <div className='Articles-heading'>
      <h2 style={{
        color: '#042b23'
      }}>Learn about incorporating sustainability to your homes!</h2>
      <p>The articles below contain information regarding organic cleaning and much more</p>
      </div>
      <Row>
        {homeArticles.map((article, index) => (
          <Card key={index} style={{ width: '18rem', margin: '1rem' ,backgroundColor: '#eef6ed'}} className='article'>
            <Card.Body>
              <Card.Title className='article-title'>{article.title}</Card.Title>
              {/* Add custom class for description text */}
              <Card.Text style={{
                fontSize: '0.8rem'
              }} 
              className='text-dark text-sm article-description'>{article.desc}</Card.Text>
              <Card.Link className='btnn' href={article.link}><button className='card-button'>Read</button></Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Homes;
