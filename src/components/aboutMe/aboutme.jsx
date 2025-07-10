import React from "react";
import "./aboutme.css";
import aboutImg from "../../assets/About.jpg";

function AboutMe() {
  return (
    <div className="about-section">
      <h1 className="about-heading">About Me</h1>

      <div className="about-container">
        <img src={aboutImg} alt="About" className="about-image" />

        <div className="about-text">
          <p>
            I'm a Full Stack Web Developer specializing in the MERN stack
            (MongoDB, Express.js, React.js, Node.js). I build clean, responsive,
            and scalable web applications — from crafting robust backend APIs to
            designing intuitive frontends.
          </p>
          <p>
            My experience includes real-world projects like inventory systems,
            appointment platforms, and e-commerce apps. I'm passionate about
            writing efficient code and delivering seamless user experiences.
          </p>
          <h2>Education</h2>
          <p>
            I have completed my Bachelor of Computer Applications (BCA), where I
            gained strong foundational knowledge in programming, databases,
            operating systems, computer networks, and digital electronics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
