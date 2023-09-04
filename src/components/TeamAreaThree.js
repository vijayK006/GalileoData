import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import partner1 from "../img/partner_1.jpeg"
import partner2 from "../img/partner_2.jpeg"
import partner3 from "../img/partner_3.jpeg"
import partner4 from "../img/partner_4.jpeg"
import partner5 from "../img/partner_5.jpeg"
import partner6 from "../img/partner_6.jpg"
import partner7 from "../img/partner_7.jpg"
import partner8 from "../img/partner_8.jpg"
import partner9 from "../img/partner_9.jpg"
import partner10 from "../img/partner_10.jpg"
import partner11 from "../img/partner_11.jpg"
import partner12 from "../img/partner_12.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Grid, Pagination } from 'swiper/modules';

const TeamAreaThree = () => {

  return (
    <>
      {/*====================== team area start ======================*/}
      <div
        className='team-area bg-relative pd-bottom-90'
        style={{ backgroundImage: 'url("assets/img/bg/15.png")' }}
      >
        <div className='container pd-top-120'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='section-title style-white'>
                <h6 className='sub-title-sky-blue'>MEET OUR EXPERTS</h6>
                <h2 className='title'>Innovation Through Is Intelligence</h2>
              </div>
            </div>

            <div className="col-lg-12">
            <Swiper
        // slidesPerView={4} 
        //  spaceBetween={30}

         breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // grid={{
        //   rows: 2,
        // }}
      
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay ,Grid, Pagination]}
        className="mySwiper"
      >

        <SwiperSlide> 
        <div className="d-flex justify-content-center">
        <img className="com-logo" src={partner1} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center">
        <img className="com-logo" src={partner2} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center">
        <img className="com-logo" src={partner3} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center">
        <img className="com-logo" src={partner4} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center">
        <img className="com-logo" src={partner5} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center pt-2 pb-2">
        <img className="com-logo" src={partner6} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center pt-2 pb-2">
        <img className="com-logo" src={partner7} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center pt-2 pb-2">
        <img className="com-logo" src={partner8} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center pt-2 pb-2">
        <img className="com-logo" src={partner9} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center pt-2 pb-2">
        <img className="com-logo" src={partner10} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center pt-2 pb-2">
        <img className="com-logo" src={partner11} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="d-flex justify-content-center pt-2 pb-2">
        <img className="com-logo" src={partner12} alt="partner-logos" /> 
        </div>
        </SwiperSlide>

      </Swiper>
            </div>
          </div>
       
        </div>
      </div>

      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaThree;
