import React, { useRef, useEffect } from "react";
import projects from "../projects/products.json";
import LinkIcon from "@mui/icons-material/Link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const headingRef = useRef(null);
  const projectRef = useRef([]);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { x: 1000, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (projectRef.current) {
      gsap.fromTo(
        projectRef.current,
        { x: -300, opacity: 0 },
        {
          x: 0,
          delay: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: projectRef.current[0],
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      id="projects"
      className="flex flex-col items-center py-10 px-4 sm:px-8 md:px-16 lg:px-20 bg-blue-50 w-full"
    >
      <div className="w-full max-w-6xl">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-right text-blue-600 mb-8"
        >
          Works
        </h1>

        <div className="flex flex-col gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              ref={(el) => (projectRef.current[index] = el)}
              className="flex flex-col bg-white hover:bg-blue-200 transition-colors duration-300 rounded-xl shadow-md p-5"
            >
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-base text-gray-700">{item.description}</p>

              <a href={item.gitURL}>
                <button className="mt-3 flex items-center text-blue-700 hover:text-red-600 gap-1">
                  Link to Project
                  <LinkIcon fontSize="small" />
                </button>
              </a>



            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
