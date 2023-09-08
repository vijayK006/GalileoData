
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import socialmediaImg from '../img/SocialMedia Marketing-01.png';
import socialmediaContactImg from '../img/SocialMedia MarketingContact.png';

const Social_Media_Marketing = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Social Media Marketing"}
      subcontent={"Digital Media is the answer to approximately every question as the world is moving ahead and anywhere in those answers, your business wants to fit in. These days, business is not limited to transactions; the other aspects developing fame are web presence and word of mouth. We are in the middle of the top SMM companies and our result oriented approach gets your website online visibility with the better ranking and maximum Return on Investment."} />

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
                  src={socialmediaImg}
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
                Social <span>Media Marketing</span> 
               
                </h2>

               

                    <p className='content mb-4 mb-xl-5'>
                    Our Approach We use the number of SEO/SEM and SMM techniques to assist you to build
                     a strong and unparalleled reputation online. We examine your target audience, marketing objectives,
                      exclusive selling points, and offline uniqueness to offer a consistent message to target audiences
                       across online media. Our team injects positive content about your business on different search engines,
                        blogs, online media, social networking websites and forums</p>

                      <p className="content mb-4">
                      We will discuss with you and offer information on how you can get the most out of your social media pages. 
                      Tell us about your business and we will design a social media plan that will reach your target audience and improve online engagement.
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
                <img className='w-100' src={socialmediaContactImg} alt='img' />
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
                  Reach our expert professionals   of <span>Social Media Marketing</span> 
                   
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

export default Social_Media_Marketing;
