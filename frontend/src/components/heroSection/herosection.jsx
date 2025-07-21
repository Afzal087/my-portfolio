import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



function Herosection() {
  return (
    
    <div className="flex justify-center   align-middle items-center w-full h-screen  bg-blue-50 text-white text-2xl">
      <div className="flex flex-col justify-start text-blue-600 gap-5 ml-12 h-1/2 w-1/2">
        <h1 className="text-7xl">I'm Mohd Afzal</h1>
        <p className="text-3xl">Fullstack Developer</p>
        <button className=" h-10 w-36 gap-3 border-blue-900-solid border-2 border-blue-900 hover:bg-blue-300 text-blue-900 text-sm rounded-3xl mr-3">Visit My Work<ArrowOutwardIcon fontSize="small" /></button>
      </div>

    </div>

     
  );
}

export default Herosection;
