import React from "react";
import HeroSection from "../HeroSection/Hero";
import Facilities from "../Facilities/Facilities";
import Why1 from "../WhyOne/Why1";
import Why2 from "../WhyTwo/Why2";
import Services from "../Services/AllServices";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Facilities />
      <Why1 />
      <Why2 />
      <Services />
      <Testimonial />
    </>
  );
};

export default Home;
