import React from "react";
import aboutImg from "../../assets/heroImage.jpg";
import about from "./aboutDetails.json";
import DownloadIcon from '@mui/icons-material/Download';





function AboutMe() {
  return (
    <div id="about" className="flex justify-center gap-10 w-screen h-screen" >

      <div className="flex flex-col justify-center  h-full w-1/4">
       <img src={aboutImg} alt="myPhoto" className=" rounded-xl"/>
        
      </div>
      <div className="flex flex-col  justify-center text-blue-950  gap-4 h-full w-1/2 ">
          <h1 className ="text-5xl  font-semibold text-blue-600 mb-10 ">About Me</h1>
          <p>{about.summary}</p>
          <p>{about.experience}</p>
          <p>{about.education}</p>
                  <button className=" h-8 w-24 bg-blue-300 text-blue-900 text-sm rounded-2xl mr-3">Resume<DownloadIcon fontSize="small" /></button>

        </div>

    </div>
  );
}

export default AboutMe;
