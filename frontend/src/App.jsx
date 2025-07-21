import React from "react";
import './index.css';
import Navbar from "./components/navbar/navbar"; 
import Herosection from "./components/heroSection/herosection";
import AboutMe from "./components/aboutMe/aboutme";
import Projects from "./components/projects/projects";
import Certif from "./components/certification/certif";
import Contact from "./components/contact/contact";

function App() {
  return (
  <div>
    <Navbar />
   
   <Herosection />
   <AboutMe />
   <Projects />
    
   <Contact />
   {/* <Certif />  */}
  </div>
  
  )
}

export default App;
