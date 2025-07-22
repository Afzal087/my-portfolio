import React, { useRef, useEffect } from "react";
import certificate from "./all_certif.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Certificate() {
  const boxRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { x: 500, delay: 1, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 60%",
          },
        }
      );
    }

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { x: -500, opacity: 0, delay: 1 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div id="certif" className="flex w-screen justify-center items-center min-h-screen bg-blue-200 py-6 px-4">
      <div className="flex flex-col w-full max-w-6xl py-4 px-4 sm:px-8 items-center gap-8 bg-white rounded-lg shadow-lg">
        <p
          ref={headingRef}
          className="self-start text-blue-600 text-3xl sm:text-4xl md:text-5xl font-semibold"
        >
          Certifications
        </p>

        <div className="flex flex-wrap gap-6 w-full justify-center overflow-y-auto">
          {certificate.map((items, index) => (
            <div
              key={index}
              ref={(el) => (boxRef.current[index] = el)}
              className="flex flex-col w-full sm:w-[45%] md:w-[30%] justify-center px-4 py-4 items-center gap-2 rounded-lg shadow-lg bg-blue-100 hover:bg-blue-300 transition duration-300"
            >
              <img
                className="shadow-lg rounded-md bg-cover w-full h-auto object-cover"
                src={items.imageURL}
                alt="ImageofCertif"
              />
              <p className="text-blue-900 font-semibold text-center">{items.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
