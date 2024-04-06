import React from 'react';
import arts from './arts';
import { Card, Container, Row } from 'react-bootstrap';

const fashionArticles = arts.filter((article) => article.category === 'fashion');

const Fashion = () => {
  return (
    <div className='back'>
    <Container >
    <div className='Articles-heading'>
      <h2>Sustainable Fashion - here's how to achieve it!</h2>
      <p>Let us replace fast fashion and be more mindful by learning new ways through these articles
      </p>
      </div>
      <Row>
        {fashionArticles.map((article, index) => (
          <Card key={index} style={{ width: '18rem', margin: '1rem' ,backgroundColor: '#eef6ed'}} className='article'>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              {/* Add custom class for description text */}
              <Card.Text style={{
                fontSize: '0.8rem'
              }} 
              className='text-dark text-sm description'>{article.desc}</Card.Text>
              <Card.Link className='btnn' href={article.link}><button className='card-button'>Read</button></Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Fashion;
