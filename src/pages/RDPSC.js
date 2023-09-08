
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { TbNotebook } from 'react-icons/tb';
import {MdOutlineLocalPolice} from 'react-icons/md';
import {LiaKeySolid} from 'react-icons/lia';
import {BsDatabaseLock} from 'react-icons/bs';
import {BsShieldLock} from 'react-icons/bs';
import {BsFileLock} from 'react-icons/bs';
import {SiSpeedtest} from 'react-icons/si';
import {AiOutlineAudit} from 'react-icons/ai';
import {PiRecycleFill} from 'react-icons/pi';
import RDPSCImg from '../img/Safety Controls.png';
import RDPSContact from '../img/SafetyControlContact.png';

const RDPSC = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Robust Data Privacy & Safety Controls"}
      subcontent={""} />

      <div className='about-area pt-5 pd-bottom-120'>
        <div className='container'>
          <div className='row '>
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
                  src={RDPSCImg}
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
                {/* <h6 className='sub-title'>Social Media Marketing</h6> */}
                <h2 className='title'>
                Robust Data <span>Privacy & Safety</span> controls
                 
                </h2>

               

                    <p className='content mb-4 mb-xl-5'>
                    Galileo Data Inc. Platform is now enhanced with enterprise grade security and built to protect personal information.</p>


              </div>
            </div>
          </div>

        
        </div>
      </div>


      {/* Work Process One */}
          {/*==================== Work Process One start ====================*/}
          <div className='work-process-area pd-bottom-120'>
        <div className='container'>
        
          <div className='row'>

            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-10'>
                <div className='thumb mb-3'>
                <TbNotebook className="inner-card-icon"/>

                </div>
                <div className='details'>
                {/* <p className="process-count">Step 1</p> */}
                  <h5 className='mb-3'>SOC 2 Type II certified</h5>
                  <p className='content'>
                  Galileo Data Inc. is SOC 2 Type II certified by leading compliance providers.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-10'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <MdOutlineLocalPolice className="inner-card-icon"/>         
                </div>
                <div className='details'>
                {/* <p className="process-count">Step 2</p> */}
                  <h5 className='mb-3'>GDPR & CPRA compliant</h5>
                  <p className='content'>
                  Galileo Data Inc. is a GDPR & CPRA compliant Data Processor. To learn more  <Link to="/">click here .</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-10'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <LiaKeySolid className="inner-card-icon"/>         
                </div>
                <div className='details'>
                {/* <p className="process-count">Step 3</p> */}
                  <h5 className='mb-3'>Data Encryption</h5>
                  <p className='content'>
                  We ensure encryption of idle and active data over public networks in our database.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-10'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <BsDatabaseLock className="inner-card-icon"/>                   
                </div>
                <div className='details'>
                {/* <p className="process-count">Step 4</p> */}
                  <h5 className='mb-3'>Database security</h5>
                  <p className='content'>
                  Our database is developed using multi-layer security
                   including encrypted passwords, two factor authentication, intrusion detection systems, and VPC with strict firewall settings.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-10'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <BsShieldLock className="inner-card-icon"/>                   
                  
                </div>
                <div className='details'>
                {/* <p className="process-count">Step 5</p> */}
                  <h5 className='mb-3'>Integrations security</h5>
                  <p className='content'>
                  Integrated SaaS Services are authorized securely with OAuth2 and credentials are not stored for those services.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-10'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <BsFileLock className="inner-card-icon"/>                   
                </div>
                <div className='details'>
                {/* <p className="process-count">Step 6</p> */}
                  <h5 className='mb-3'>Privacy & safety</h5>
                  <p className='content'>
                  Custom control to enable or disable privacy-impacting features based on your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-10'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <SiSpeedtest className="inner-card-icon"/>                   
                  
                </div>
                <div className='details'>
                {/* <p className="process-count">Step 7</p> */}
                  <h5 className='mb-3'>Penetration testing</h5>
                  <p className='content'>
                  Annual network and graybox application penetration tests are performed by a certified third party consultant.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-10'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <AiOutlineAudit className="inner-card-icon"/>                   
                </div>
                <div className='details'>
                {/* <p className="process-count">Step 8</p> */}
                  <h5 className='mb-3'>Internal and external audits</h5>
                  <p className='content'>
                  Audits are carried out, quarterly, on access control, risk, information security, IT infrastructure, and HR procedures.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-10'>
                <div className='thumb mb-3'>
                  {/* <img src='assets/img/icon/10.svg' alt='img' /> */}
                <PiRecycleFill className="inner-card-icon"/>                   
                  
                </div>
                <div className='details'>
                {/* <p className="process-count">Step 8</p> */}
                  <h5 className='mb-3'>Data recovery</h5>
                  <p className='content'>
                  Regular data backup with a maximum 24-hour RTO and RPO.
                  </p>
                </div>
              </div>
            </div>

          </div>
          <h3 className=" text-center mt-5">All the B2B Data You Need to Prospect, Qualify, and Close Deals</h3>
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
                <img className='w-100' src={RDPSContact} alt='img' />
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
                  Reach our expert professionals   of <span>Web Design</span> 
                   
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

export default RDPSC;
