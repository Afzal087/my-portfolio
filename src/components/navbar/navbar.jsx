import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";


function Navbar (){
    return (
        <div className="navBar">
            <img className="logo"src={logo} alt="Logo" /> 
       <ul className="navMenu">
        <li>Projects</li>
        <li>Certificates</li>
        <li>About Me</li>
        <li>Contact Me</li>
       </ul>
       <div className="nav-Connect">Connect With Me</div>
        </div>
    )
}
export default Navbar;