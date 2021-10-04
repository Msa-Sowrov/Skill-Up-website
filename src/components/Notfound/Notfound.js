import React from 'react';
import { Link } from 'react-router-dom';
import notfoundimg from '../../images/404.png'
import './Notfound.css'

const Notfound = () => {
    return (
        <div className="not-found">
            <img src={notfoundimg} alt="" />
            <br/>
            <Link to="/home">
            <button className="show-btn">Go Back Home</button>
            </Link>
        </div>
    );
};

export default Notfound;