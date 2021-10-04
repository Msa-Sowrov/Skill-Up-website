import React from 'react';
import './Myfooter.css'
import img from "../../images/logo.png"
const Myfooter = () => {
    return (
        <div className="footer-warp">
        <div className="footer">
            <div className="footer-container">
                    <img src={img} alt="" />
                <h2>Skill<span className="green">UP</span></h2>
            </div>
        <p>©2021. All rights reserved.</p>

        </div>
        </div>
    );
};

export default Myfooter;