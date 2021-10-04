import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Homecard from '../Homecard/Homecard';
import './Home.css'

const Home = () => {
    const [courses, setCourse] = useState([])
    useEffect(()=>{
        fetch('./homeServices.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    return (
        <div>
             <div className="home-banner">
            
            
            
            
            
            
            </div>   

        <div className="home">
                   <Row xs={1} md={3} className="g-4">
                   {
                courses.map(crouse=> 
                    <Homecard
                    key={crouse.title}
                    crouse={crouse}
                    >

                    </Homecard>
                    )
            }
                   </Row>
        </div>
        </div>
    );
};

export default Home;