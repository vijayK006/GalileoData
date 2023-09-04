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
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay ,Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner1} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner2} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner3} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner4} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner4} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner4} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner4} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner4} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner4} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner4} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner4} alt="" />  */}
        slide
        </SwiperSlide>
        <SwiperSlide> 
        {/* <img className="com-logo" src={partner4} alt="" />  */}
        slide
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
