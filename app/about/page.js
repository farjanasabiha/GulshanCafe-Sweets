import React from "react";
import Blog from "../Components/About/Blog/Blog";
import AboutUs from "../Components/About/AboutUs";
import CTA from "../Components/CTA";
import Footer from "../Components/Home/Footer";
import AboutHeader from "../Components/About/AboutHeader";
import Navbar from "../Components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar/>
      <AboutHeader/>
      <AboutUs/>
      <Blog />
      <CTA />
      <Footer/>
    </div>
  );
};

export default page;
