import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useEffect } from 'react/cjs/react.development';
import Showcard from '../Showcard/Showcard';
import './Services.css'

const Services = () => {
    const [servicesCard, setServicesCard] = useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res=> res.json())
        .then(data=>setServicesCard(data))
    },[])

    return (
        <div className="services">
            <Row xs={1} md={4} className="g-4">
                {
                   servicesCard.map(cards=>
                       <Showcard key={cards.title} cards={cards} ></Showcard>
                   ) 
                }
            </Row>
        </div>
    );
};

export default Services;