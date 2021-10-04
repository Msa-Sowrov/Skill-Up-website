import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Homecard from '../Homecard/Homecard';
import './Home.css'
import image from '../../images/math teacher.svg'
import { Link } from 'react-router-dom';

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
            <div>
                <h1>
                 We Help You To Learn What You Love.
                </h1>
                <h3 className='title'>ONLINE COURSES & EDUCATION </h3>
            </div>
            <div>
                    <img src={image} alt="" />
            </div>
            
            
            
            
            </div>   

        <div className="home">
            
            
                    <h1>Explore Featured <span className="green">Cources</span></h1>


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
                   
                   <Link to="/services">
                       <button className="show-btn">Show More</button>
                   
                   </Link>     
                       
        </div>
        </div>
    );
};

export default Home;