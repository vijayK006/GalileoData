import React from "react";
import AboutAreaFive from "../components/AboutAreaFive";
import AboutAreaSix from "../components/AboutAreaSix";
import BannerFive from "../components/BannerFive";
import BlogAreaFive from "../components/BlogAreaFive";
import CaseStudyAreaTwo from "../components/CaseStudyAreaTwo";
import FooterFour from "../components/FooterFour";
import NavbarFour from "../components/NavbarFour";
import ServiceAreaFive from "../components/ServiceAreaFive";
import TeamAreaThree from "../components/TeamAreaThree";
import TestimonialFive from "../components/TestimonialFive";
import WorkProcessFour from "../components/WorkProcessFour";
import FaqAreaOne from "../components/FaqAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";
import NavBar from "../components/NavBar";


const HomeFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Banner Five */}
      <BannerFive />

      {/* About Area Five */}
      <AboutAreaFive />

      {/* Work Process Four */}
      <WorkProcessFour />

       {/* FAQ Area One */}
       <FaqAreaOne />
       
        {/* Team Area Three */}
        <TeamAreaThree />

         {/* Work Process One */}
      <WorkProcessOne />

       

      {/* Testimonial Five */}
      {/* <TestimonialFive /> */}

      {/* Blog Area Five */}
      {/* <BlogAreaFive /> */}

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default HomeFive;
