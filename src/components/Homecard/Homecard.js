import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Homecard.css'

const Homecard = (props) => {
const {Cirtificate, img,rating, student, title } = props.crouse;        

return (
    <div className="card-container">
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Rating: {rating} </Card.Text>
          <Card.Text>Student: {student}</Card.Text>
          <Card.Text>{Cirtificate}</Card.Text>
        </Card.Body>
      </Card>
    </Col>




        </div>

        );
};

export default Homecard;