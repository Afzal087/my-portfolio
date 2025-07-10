import "./styles.css"
import React from "react";
import certificate from "./certificate.json";

function Certificate() {
    return (
        <div className="container">
            <h1 className="heading">My Projects</h1>
            <div className="allCertificate">
                {certificate.map((certificate, index) => {
                    return (<div className=" certificate ">
                        <img src={certificate.imageURL} alt="" />
                        <h1 className="p_title" >{certificate.name}</h1>
                        <p>{certificate.description}</p></div>)
                })}
            </div>
        </div>
    )
}

export default Certificate;
