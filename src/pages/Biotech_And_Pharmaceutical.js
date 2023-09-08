import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import Boitech from "../img/Biotech _ Pharmaceutical-01.png"
import Boitech2 from "../img/Biotech _ Pharmaceutical_2-01.png"

import { FaCheckCircle } from 'react-icons/fa';

const Biotech_And_Pharmaceutical = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Biotech & Pharmaceutical Email List"}
      subcontent={"The Pharmaceutical and Biotechnology Email Subscriber file is comprised of individuals looking to stay on top of how leading pharmaceutical and biotechnology researchers are applying the latest discovery tools and development techniques and furthering the process of discovering."} />

      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
            <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img
                  className='animate-img-1 top_image_bounce'
                  src='assets/img/about/2.png'
                  alt='img'
                />
                <img
                  className='animate-img-2 left_image_bounce'
                  src='assets/img/about/3.png'
                  alt='img'
                />
                <img
                  className='animate-img-3 top_image_bounce'
                  src='assets/img/banner/5.svg'
                  alt='img'
                />
                <img
                  className='main-img'
                  src={Boitech}
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-7'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                {/* <h6 className='sub-title'>Automotive</h6> */}
                <h2 className='title'>
                Our <span>Biotech & Pharmaceutical</span>  Email List offers
                
                </h2>
              
                <ul className='single-list-inner style-check style-check mb-3 pt-5'>

                          <li className="pt-3">
                            <FaCheckCircle /> Galileo Data offers the most comprehensive and complete lists of Pharmaceutical & Biotechnology Executive Contact Databases available on the market.
                          </li>

                          <li className="pt-3">
                            <FaCheckCircle /> Contrary to list brokers and other list compilers, Galileo Data offers its clients the opportunity to acquire databases by delivering the actual 
                            databases, allowing companies and individuals to use the data for email marketing, direct mailings, and telephone lead generation.
                          </li>

                          <li className="pt-3"> <FaCheckCircle /> Developed in cooperation with leading Pharmaceutical Industry Marketing Executives, Galileo Data 
                            is the only list company offering full contact information on key executive contacts of the pharmaceutical industry, and allowing business 
                            to business marketers to use a multi-channel database by tapping in on email marketing, direct mail and telephone.
                          </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='row pd-bottom-100'>
                      <div className='col-md-12 mt-5'>
                        <ul className='single-list-inner style-check style-check mb-3'>
                        
                         <li>
                            <FaCheckCircle /> This list targets professionals and scientists at top pharmaceutical companies, biopharmaceutical 
                            companies, biotechnology companies, contract research organizations, government laboratories, university and hospital laboratories and medical 
                            centers, and instrument and system manufacturers, in order to maximize the results of your next marketing​
                          </li>
                        </ul>
                      </div>


                    
                    </div>
        </div>
      </div>

        {/* Counter Area One */}
        <CounterAreaOne />

      {/* ========================= contact Area One start =========================*/}
      <div className='contact-area  pd-bottom-120'>
        <div className='container '>
          <div className='contact-inner-1'>
            <img
              className='top_image_bounce animate-img-1'
              src='assets/img/banner/2.png'
              alt='img'
            />
            <img
              className='top_image_bounce animate-img-2'
              src='assets/img/about/6.png'
              alt='img'
            />
            <div className='row'>
              <div
                className='col-lg-8'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img className='w-100' src={Boitech2} alt='img' />
              </div>
              <div
                className='col-lg-4 wow animated fadeInRight'
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <div className='section-title mb-0'>
                  <h6 className='sub-title'>GET IN TOUCH</h6>
                  <h2 className='title'>
                  Reach our expert professionals   of <span>Biotech & Pharmaceutical Email List</span> 
                   
                  </h2>
                  <p className='content'>
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p>
                  <form className='mt-4'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Name' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Email' />
                        </div>
                      </div>

                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Business Email' />
                        </div>
                      </div>

                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Phone' />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Type Of List Needed' />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='single-input-inner style-border'>
                          <textarea placeholder='Message' defaultValue={""} />
                        </div>
                      </div>
                      <div className='col-12'>
                        <a
                          className='btn btn-black mt-0 w-100 border-radius-5'
                          href='#'
                        >
                          Submit now
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= contact-inner One end =========================*/}

      {/* Footer One */}
      <FooterFour />

    </>
  );
};

export default Biotech_And_Pharmaceutical;
