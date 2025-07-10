import "./projects.css"
import React from "react";
import projects from "../projects/products.json";

function Projects() {
    return (
        <div className="container">
            <h1 className="heading">My Projects</h1>
            <div className="allProjects">
                {projects.map((projects, index) => {
                    return (<div className="project project_1">
                        <img src={projects.imageURL} alt="" />
                        <h1 className="p_title" >{projects.name}</h1>
                        <p>{projects.description}</p></div>)
                })}
            </div>
        </div>
    )
}

export default Projects;
