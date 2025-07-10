import React from "react";
import "./herosection.css";  
import heroImg from "../../assets/heroImage.jpg";                       

function Herosection(){

    return (
        <div className="heroSection">
            <img src={heroImg} alt="portfolioImage" />
             <h1><span>I'm Mohd Afzal,</span> Full Stack Web Developer</h1>
             
             <p>I work with technologies like JavaScript, React.js, Node.js, Express.js and PostgreSQL</p>  
            <div className="hero-action">
               <div className="hero-resume">My Resume</div>
                <div className="hero-Connect">Connect Me</div>
            </div>
           
        </div>
            
        
    )
}


export default Herosection;




