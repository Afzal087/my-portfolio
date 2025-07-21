// Navbar.jsx
import React from "react";

function Navbar(){
  return(
    
<nav className=" font-outfit font-medium w-full h-14  flex items-center justify-between  text-blue-800 bg-white">

    <div className="w-80 ml-20 flex items-center"> 
      <p className="text-3xl ">Afzal</p>
    </div>
    
    <div className="mr-20 ">
      <ul className="flex text-md gap-5 items-center">
        <li>About Me</li>
        <li>Certificates</li>
        <li>Work</li>
      </ul>
    </div>
    
   
</nav>

   
  )
}

export default Navbar;