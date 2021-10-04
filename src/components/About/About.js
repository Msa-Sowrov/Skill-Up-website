import React from 'react';
import './About.css'
import about from '../../images/about.png'
const About = () => {
    return (
        <div>
            <h1 className="title-about">Who We Are??</h1>
        <div className='about'>
            <div>
                <h1>What We Do</h1>
                <ul>
                    <li>Full Lifetime Access</li>
                    <li>20+ Downloadable Resources</li>
                    <li>Certificate Of Completion</li>
                    <li>Free Trial 7 Days</li>
                </ul>
            </div>
           <div>
           <img src={about} alt="" />
           </div>
        </div>
        
        </div>

    );
};

export default About;