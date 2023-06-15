import React from "react";
import Navbar from "../components/Navbar.js/Navbar";
import HeroImg from "../components/HeroImg.js";

import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
     
      <Footer />
    </div>
  );
};

export default Home;