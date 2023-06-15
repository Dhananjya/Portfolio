import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import react from "../img/react.png"
import reactbg from "../img/reactbg.png"
import Result from "../img/Dipesh_CV.pdf";

const AboutContent = () => {
    
    
  return(  <div className="about">
    <div className="left">
        <h1> Who Am I?</h1>
        <p> I am a react front-end developer. I create responsive secure websites for my clients. </p>
        <div>
        
                <Link to="/Project" className="btn">
                    Project
                </Link>
               
         
                
            

            </div>

            <div className="CV">
            <p>Download My CV </p>
            <div>
            <Link to={Result} className="bttn" target="_blank"  download>Download</Link>
            </div>
            
            </div>
         
    </div>
    <div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={reactbg}
            className="img" alt="True "
            />
        </div>
        
        <div className="img-stack bottom">
            <img src={react}
            className="img" alt="True "/>
       </div>
       </div>
       </div>
       </div>
  )
}


export default AboutContent;