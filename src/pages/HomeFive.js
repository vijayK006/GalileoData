import React from "react";
import AboutAreaFive from "../components/AboutAreaFive";
import BannerFive from "../components/BannerFive";
import FooterFour from "../components/FooterFour";
import TeamAreaThree from "../components/TeamAreaThree";
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

      {/* Footer Four */}
      <FooterFour />
    </>
  );
};

export default HomeFive;
