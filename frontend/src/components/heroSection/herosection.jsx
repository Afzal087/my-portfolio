import React, { useRef, useEffect } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import gsap from "gsap";
import bgVideo from "../../assets/bgVideo.mp4";

function Herosection() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { x: -500, opacity: 0 },
      { x: 0, duration: 0.7, opacity: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div id="herosection" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div
        ref={boxRef}
        className="relative z-10 flex flex-col gap-5 items-start justify-center h-full px-6 sm:px-12 md:px-20 text-blue-100"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">I'm Mohd Afzal</h1>
        <p className="text-xl sm:text-2xl md:text-3xl">Fullstack Developer</p>
        
        <button className="flex items-center justify-center gap-2 h-10 px-6 border-2 border-blue-100 text-blue-50 text-sm rounded-3xl hover:bg-blue-200 hover:text-black transition">
          Visit My Work <ArrowOutwardIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default Herosection;
