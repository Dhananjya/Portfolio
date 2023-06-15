
import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}  />
                <div>

                    <p>
                        Mahalaxmi-5 Tikathali 
                    </p>
                    <p>
                       Lalitpur, Nepal.
                    </p>
                </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}  />
                9867979471</h4>
                </div>

                <div className="email">
                <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}  />
                4ipesh24@gmail.com 
                </h4>
                </div>
            </div>

            <div className="right">
            <h4> About My Experiences</h4>
            <p> Hi this is me Dipesh Kaphle. I am Intrested in Software Development and Designing.
                 I am recently join this community hope you approciate me and my work. </p>

                 <div className="social">
                   <a href="https://www.facebook.com/deepesh.kafle.7/" target="_blank" ><FaFacebook size={20} style={{color: "#fff", marginRight: "2rem"}} 
                
                /></a>
                 
                
                 <a href="https://www.instagram.com/dipesh_kaphle.18/" target="_blank" >
                 <FaInstagram size={20} style={{color: "#fff", marginRight: "2rem"}}  />
                 </a>
                 
                 <a href="https://github.com/Dhananjya" target="_blank" >
                 <FaGithub size={20} style={{color: "#fff", marginRight: "2rem"}}  />
                </a>
                <a href="https://www.linkedin.com/in/dipesh-kafle-aa25b5211/" target="_blank" >
                <FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem"}}  />
                </a>

                </div>
</div>
       `         </div>
       <div className="Center">

        <p className="col-sm">
            &copy;{new Date().getFullYear()} DIPESH KAFLE | All right reserved |<button>Terms & Condition</button>
        </p>
       </div>
    </div>

  );
}

export default Footer;