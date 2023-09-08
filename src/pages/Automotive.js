import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import Automotion from "../img/Automotive Industry-01.png"
import Automotion2 from "../img/Automotive Industry_2-01.png"

 import { FaCheckCircle } from 'react-icons/fa';
 import { BsChatRightText } from 'react-icons/bs';
 import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
 import { MdOutlineFlipCameraAndroid } from 'react-icons/md';
 import { CgRowLast } from 'react-icons/cg';
 import { GoMail } from 'react-icons/go';
 
 
 
const Automotive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Automobile/Automotive Email List"}
      subcontent={"With our Automobile Industry Email and Mailing List target Automobile Dealers, Automobile Manufacturing and Auto Retail Sector. Our Automobile Industry List has thousands of Executive from Automobile Dealers, Car Washes, auto OEMs, Automotive Parts & Accessories Stores, Repair & Maintenance Services and more. You can pick the right step of the ladder and contact the right decision maker or the Executive Level titles within our Automobile Industry Email and Mailing List."}
       />

      <div className='about-area pt-5'>
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
                  src={Automotion}
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
                <h6 className='sub-title'>Automotive</h6>
                <h2 className='title'>
                Customize Your   <span>Automotive Industry</span> Email List By

                 
                </h2>
               
                <div className='row pt-4'>
                      <div className='col-md-6'>
                        <ul className='single-list-inner style-check style-check mb-3'>
                          <li>
                            <FaCheckCircle /> Automobile Dealers
                          </li>
                          <li>
                            <FaCheckCircle /> Auto Lending
                          </li>
                          <li>
                            <FaCheckCircle />Automobile Manufacturing
                          </li>

                          <li>
                            <FaCheckCircle />Tire Wholesalers and Dealers
                          </li>

                          <li>
                            <FaCheckCircle />Automobile Manufacturing
                          </li>

                          <li>
                            <FaCheckCircle />Abrasives Manufacturing
                          </li>

                          <li>
                            <FaCheckCircle />Automobile Rental & Leasing
                          </li>

                          <li>
                            <FaCheckCircle />Automotive Repair & Maintenance Services
                          </li>
                        
                        </ul>
                      </div>
                      <div className='col-md-6'>
                        <ul className='single-list-inner style-check style-check mb-3'>
                          <li>
                            <FaCheckCircle /> Motor Vehicle Towing
                          </li>
                          <li>
                            <FaCheckCircle /> Auto Consumer Services
                          </li>
                          <li>
                            <FaCheckCircle /> Automobile Parts Manufacturing
                          </li>

                          <li>
                            <FaCheckCircle /> Automotive Parts & Accessories Stores
                          </li>

                          <li>
                            <FaCheckCircle /> Auto Fabricated Metal Product Manufacturing
                          </li>

                          <li>
                            <FaCheckCircle /> Auto Retail Sector
                          </li>

                          <li>
                            <FaCheckCircle />Automobile Rental & Leasing
                          </li>

                          <li>
                            <FaCheckCircle />Hospitality Dealers
                          </li>

                        </ul>
                      </div>
                    </div>

                
              </div>
            </div>
          </div>
         
  
          
        </div>
      </div>

      {/* Work Process One */}
          {/*==================== Work Process One start ====================*/}
          <div className='work-process-area pd-top-90 pd-bottom-120'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2 className='title'>
            Our <span className="color-default-h">Automobile Email</span>  List Key Features
              
              
            </h2>
            {/* <h6 className='sub-title mt-3'>8 Steps to aggregating your targeted email lists</h6> */}

            {/* <p>Our skilled experts help companies increase leads and sales, optimize your marketing costs, and differentiate brands</p> */}
          </div>
          <div className='row'>

            <div className='col-build-5 col-md-6'>
              <div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                <BsChatRightText className="inner-card-icon"/>

                </div>
                <div className='details'>
                {/* <p className="process-count">Step 1</p> */}
                  <p className='content'>Generates maximum response rates for your marketing campaigns</p>
                  {/* <p className='content'>
                  We acquire an opt-in email database to ensure maximum deliverability. Boost campaign success with the most extensive email addresses.
                  </p> */}
                </div>
              </div>
            </div>

            <div className='col-build-5 col-md-6'>
              <div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' />        */}
                <AiOutlineDeliveredProcedure className="inner-card-icon"/>

                </div>
                <div className='details'>
                {/* <p className="process-count">Step 2</p> */}
                <p className='content'>
                    High deliverance rate and brand recognition
                </p>
                
                </div>
              </div>
            </div>

            <div className='col-build-5 col-md-6'>
              <div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <MdOutlineFlipCameraAndroid className="inner-card-icon"/>

                </div>
                <div className='details'>
                {/* <p className="process-count">Step 3</p> */}
                <p className='content'>High conversion rates and ROI (return on investment)</p>
                 
                </div>
              </div>
            </div>

            <div className='col-build-5 col-md-6'>
              <div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                <CgRowLast className="inner-card-icon"/>
                  
                </div>
                <div className='details'>
                {/* <p className="process-count">Step 4</p> */}
                <p className='content'>High opt-in data that provide marketers zero-in on their very best prospects</p>
                
                </div>
              </div>
            </div>

            <div className='col-build-5 col-md-6'>
              <div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <GoMail className="inner-card-icon"/>

                </div>
                <div className='details'>
                {/* <p className="process-count">Step 5</p> */}
                <p className='content'>Reach prospects without any geographical barriers 
                  by associating with the best Mailing List Industry service</p>
               
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}

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
                <img className='w-100' src={Automotion2} alt='img' />
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
                  Reach our expert professionals   of <span>Automobile-Automotive-Email-List</span> 
                   
                  </h2>
                  {/* <p className='content'>
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p> */}
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

export default Automotive;
