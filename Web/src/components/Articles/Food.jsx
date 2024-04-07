import React from 'react';
import arts from './arts';
const foodArticles = arts.filter((article) => article.category === 'food');
import { Card, Container, Row } from 'react-bootstrap';

const Food = () => {
  return (
    <div className='back'>
     
    <Container >
      <div className='Articles-heading'>
      <h2 style={{
        color: '#042b23'
      }}>Articles to teach you how about <span className='highlight'>sustainable</span> and <span className='highlight'>responsible consumption of food!</span></h2>
      <p>Read the below articles to gain info about maximum utillisation of food and to learn about different types of food </p>
      </div>
      <Row>
        {foodArticles.map((article, index) => (
          <Card key={index} style={{ width: '18rem', margin: '1rem' ,backgroundColor: '#eef6ed'}} className='article'>
            <Card.Body>
              <Card.Title className='article-title'>{article.title}</Card.Title>
              {/* Add custom class for description text */}
              <Card.Text style={{
                fontSize: '0.8rem'
              }} 
              className='text-dark text-sm article-description'>{article.desc}</Card.Text>
              <Card.Link className='btnn' href={article.link} target='_blank'><button className='card-button'>Read</button></Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default Food;
