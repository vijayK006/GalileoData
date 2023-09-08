import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";

import whyGaligio from '../img/whyGaliliodata.jpg';

const AboutAreaFive = () => {
  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 mb-4 mb-lg-0'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner'>
                {/* <img
                  className='animate-img-3 z-index-2 top_image_bounce'
                  src={homepage}
                  alt='img'
                /> */}
                <img
                  className='main-img top_image_bounce'
                  src={whyGaligio}
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6'
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0 ps-xl-5'>
                <h6 className='sub-title-sky-blue'>Why Galileo Data</h6>
                <h2 className='title title_Update'>
                Galileo Data Inc is a full-service data and marketing agency.
                </h2>
                <p className='content mb-4' style={{textAlign:"justify"}}>
                We are a primary source of consumer and business data, identity data, and analytics for enterprises 
                and the largest data providers in the world. We offer end-to-end custom data-driven marketing solutions 
                as a white-glove service. The ability to deliver data from challenging geographies makes Galileo Data a 
                leader in global data, and our quality campaigns make us a high-value partner with competitive pricing and results. 
                We deliver Fortune 100 experiences on Fortune 5000 budgets.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle className='sky' /> Proven Results
                      </li>
                      <li>
                        <FaCheckCircle className='sky' /> Unparalleled Expertise
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle className='sky' /> Innovation
                      </li>
                      <li>
                        <FaCheckCircle className='sky' /> Commitment
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <IoStarSharp className='sky' />World’s #1 Business Professional and Consumer People Database
                      </li>
                      <li>
                        <IoStarSharp className='sky' />Offline Campaigns: 99+% Deliverability, 88+% global Direct Mail
                      </li>
                      <li>
                        <IoStarSharp className='sky' />Online Campaigns: 1,745+% Programmatic Brand Lift, 1,098+% Traffic Lift
                      </li>
                      <li>
                        <IoStarSharp className='sky' />Privacy Compliant: GDPR, CCPA, CASL, Privacy Shield
                      </li>
                    </ul>
                </div>
                {/* <Link
                  className='btn btn-base-color border-radius-5'
                  to='/about'
                >
                  Discover More <FaArrowRight />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaFive;
