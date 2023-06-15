import "./HeroImgStyles.css";
import React from 'react'

import IntroImg from "../img/bg.webp";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">

        <img className="into-img"src= {IntroImg} alt="IntroImg"/>
        <div className="content">
            <p>HI I'M A PROGRAMMER.</p>
            <h1>Frontend Developer </h1>
            <div>
                <Link to="/Project" className="btn">
                    Project
                </Link>
                <Link to="/Contact" className="btn-light">CONTACT</Link>

          

            </div>

        </div>
        </div>
        </div>
  )
 
}

export default HeroImg
