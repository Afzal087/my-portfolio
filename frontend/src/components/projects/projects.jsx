
import React from "react";
import projects from "../projects/products.json";
import LinkIcon from '@mui/icons-material/Link';

function Projects() {
    return (

        <div id="projects" className=" flex flex-col gap-3 justify-start items-center py-8 h-screen bg-blue-50  w-screen">
            <div className="w-3/4 h-1/4">
                <h1 className="flex justify-end  font-semibold text-5xl  text-blue-600">Works</h1>
                {projects.map(item => {
                    return (
                        <div className="flex flex-col w-full  justify-center gap-5 h-full my-10 bg-white-200 hover:bg-blue-300 px-20 p-4 text-blue-900 rounded-lg">
                            <p className="text-lg font-semibold">{item.name}</p>
                            <p>{item.description}</p>
                            <button className="flex justify-start gap-1 text-red-600 items-center" >Link to Project<LinkIcon  fontSize="Small"/></button>
                        </div>
                    )
                })}

            </div>







        </div>
    )
}

export default Projects;
