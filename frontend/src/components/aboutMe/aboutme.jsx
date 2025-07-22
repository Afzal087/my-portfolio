import React, { useRef, useEffect } from "react";
import aboutImg from "../../assets/heroImage.jpg";
import about from "./aboutDetails.json";
import DownloadIcon from '@mui/icons-material/Download';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const boxRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { x: -1000, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current.querySelectorAll("p"),
        { x: 300, opacity: 0 },
        {
          x: 0,
          delay: 1,
          opacity: 1,
          duration: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-10 w-full px-6 py-12 md:h-screen"
    >
      <div ref={boxRef} className="w-full md:w-1/3 flex justify-center">
        <img src={aboutImg} alt="myPhoto" className="rounded-xl w-64 md:w-full" />
      </div>

      <div
        ref={aboutRef}
        className="w-full md:w-2/3 flex flex-col justify-center text-blue-950 gap-4"
      >
        <p className="flex justify-center text-4xl sm:text-5xl font-semibold text-blue-600 mb-6">About Me</p>
        <p>{about.summary}</p>
        <p>{about.experience}</p>
        <p>{about.education}</p>
        <p>
          <a href="/resume.pdf" download="Afzal_resume.pdf">
          <button className="h-8 w-24 bg-blue-300 text-blue-900 text-sm rounded-2xl flex items-center justify-center gap-1">
            Resume <DownloadIcon fontSize="small" />
          </button>
        </a>
          
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
