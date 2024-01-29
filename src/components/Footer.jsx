// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import CSS file
import Contact from "./Contact";

const Footer = () => {
    const icon = ">>";
    return (
        <div className="footer">
           {/* <div className="flex">
                 <h3>Important Links</h3>
                <Link className="link" to="/">  {icon} Home</Link>
                <Link className="link" to="/about">   <h5>{icon} About</h5></Link>
                <Link className="link" to="/projects">   <h5>{icon} Project</h5></Link>
                <Link className="link" to="/contact">  <h5>{icon} Contact</h5></Link>
            </div> */}
            <div>
            <h3>Copyright::All rights reserved</h3>
            </div>
            <div>
                <p>Designed and Developed with <i className='fa fa-heart' /> By Creationology</p>
            </div>
            {/* Additional content goes here */}
        </div>
    );
};

export default Footer;
