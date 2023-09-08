
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import datVeriImg from '../img/DataVerification-01.png';
import datVeriContactImg from '../img/DataVeriContact.png';

const Data_Verification = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Data Verification Services"}
      subcontent={"For successful marketing campaigns, it is pivotal for organizations to have easy access to accurate and authentic database. Galileo Data houses a resource pool of dedicated and able professionals who provide high-quality data verification/ validation services to enhance your existing customers' dataset. Our services include verifying and validating prospects' residential/official addresses, postal codes, email addresses, phone numbers, etc."} />

      <div className='about-area pt-5 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
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
                  src={datVeriImg}
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>Data Verification</h6>
                <h2 className='title'>
              Data <span>Verification </span> Services

                </h2>

               

                    <p className='content mb-4 mb-xl-5'>
                    Having access to state of the art technology and tools, our experts scrutinize your dataset and
                     implement proven methodology to authenticate your records and ensure that they are accurate, consistent and up-to-date.</p>

                     <h6 className="mb-4">Our process when you Outsource Data Validation Services to us We go the extra mile to help you
                      significantly improve the quality of your data. Let’s have a quick glimpse at our quality control process:</h6>

                      <p className="content mb-4">
                      We employ automated as well as manual processes to examine and
                       verify your data against internal as well as external sources of information.
                      </p>

                      <p className="content mb-4">Our experts identify gaps, redundancies and inaccuracies
                       in the database. Further, they review, validate, cleanse and normalize your database
                        while ensuring that it is accurate and updated. – With in-depth research, we improve the
                       quality of your data and cross-check the entries across all the available sources, online as well as offline.</p>

                       <p className="content mb-4">Through our data verification and validation checks,
                        we make sure that your records are current and correct to the last detail.</p>
              </div>
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
                <img className='w-100' src={datVeriContactImg} alt='img' />
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
                  Reach our expert professionals   of <span>Data Verification</span> 
                   
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
                        <a  className='btn btn-black mt-0 w-100 border-radius-5'  href='#' >
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

export default Data_Verification;
