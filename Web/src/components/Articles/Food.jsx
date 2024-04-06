import React from 'react';
import arts from './arts';
const foodArticles = arts.filter((article) => article.category === 'food');
import { Card, Container, Row } from 'react-bootstrap';

const Food = () => {
  return (
    <div className='back'>
    <Container >
      <Row>
        {foodArticles.map((article, index) => (
          <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              {/* Add custom class for description text */}
              <Card.Text style={{
                fontSize: '0.8rem'
              }} 
              className='text-dark text-sm description'>{article.desc}</Card.Text>
              <Card.Link href={article.link}>Read here</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Food;
