import React from "react";
import Navbar from "./components/navbar/navbar"; 
import Herosection from "./components/heroSection/herosection";
import AboutMe from "./components/aboutMe/aboutme";
import Projects from "./components/projects/projects";
import Certificate from "./components/certification/certif.jsx";

function App() {
  return (
  <div>
   <Navbar />
   <Herosection />
   <AboutMe />
   <Projects />
   <Certificate />
  </div>
  
  )
}

export default App;
