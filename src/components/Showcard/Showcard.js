import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Showcard.css'
const Showcard = (props) => {
const {Cirtificate, img,rating, student, title } = props.cards;        

    return (
        <div className="cards">
            <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Rating: {rating}</Card.Text>
          <Card.Text>Student: {student}</Card.Text>
          <Card.Text>{Cirtificate}</Card.Text>
                
                               
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Showcard;