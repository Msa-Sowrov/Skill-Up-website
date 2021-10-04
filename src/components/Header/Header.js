import React from 'react';
import './Header.css'
import img from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Header = () => {
    return (
        <div className="container">
           <Container>
           <div className="navBar">

        
                <img src={img} alt="" />
                <h2>Skill<span className="green">UP</span></h2>
                <NavLink  className="nav-item" to="/home">Home</NavLink>
                <NavLink className="nav-item" to="/about">About</NavLink>
                <NavLink className="nav-item" to="/services">Services</NavLink>
                <NavLink className="nav-item" to="/faq">FAQs</NavLink>
            </div>
           </Container>
        </div>
    );
};

export default Header;