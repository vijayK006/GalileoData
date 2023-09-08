
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import webDesignImg from '../img/WebDesign-01.png';
import webDesignContactImg from '../img/WebDesignContact.png';

const Web_Design = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Web Design"}
      subcontent={"Web design includes a lot of skills in the production and maintenance of websites. The different areas of web design comprise web graphic design, interface design, authoring, as well as standardized code and proprietary software, user experience design and search engine optimization."} />

      <div className='about-area pt-5 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
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
                  src={webDesignImg}
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-8'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                {/* <h6 className='sub-title'>Social Media Marketing</h6> */}
                <h2 className='title'>
                Web <span>Design</span> 

                </h2>

               

                    <p className='content mb-4 mb-xl-5'>
                    Galileo Data offer only state of the art, cutting edge technology and are for all time creating new and original ways 
                    to make our customers’ experience better. If you are searching for a trusted reputable Web Design corporation to grip 
                    all of your online business wants then look no further. We recommend complete solutions for all industries 
                    and can meet the demands of any business, and have been ranked one of the most excellent Web Design Companies to do business.</p>

                      <p className="content mb-4">
                      We are a premium web design and development company that offers a broad range of solutions for both small to large companies globally. We dedicated in rich interactive experiences in Web, designing the long time.
We are a close team of creative’s, web designers & web developers who work jointly to create beautiful, engaging digital experiences. We take arrogance in delivering only the most excellent.
                      </p>

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
                <img className='w-100' src={webDesignContactImg} alt='img' />
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

export default Web_Design;
