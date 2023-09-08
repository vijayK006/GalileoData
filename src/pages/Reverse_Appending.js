
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import reverseAppendingImg from '../img/Reverse Appending-01.png';
import reverseAppendingCASSImg from '../img/ReverseAppendingCASSCertified.png';
import reverseAppendingContactImg from '../img/ReverseAppendingContact.png';


const Reverse_Appending = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Reverse Appending"}
      subcontent={"Galileo data B2B Data Appending service adds guaranteed deliverable email addresses to your existing corporate postal database."} />

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
                  src={reverseAppendingImg}
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
                {/* <h6 className='sub-title'>Reverse Appending</h6> */}
                <h2 className='title'>
                Reverse <span>Appending</span> 
               
                </h2>

               

                    <p className='content mb-4 mb-xl-5'>
                    Use email to locate name and address Business to Business Your existing email addresses database
                     will be used to provide additional information about the individuals who own these email addresses
                      – allowing you to further segment, target and contact them by additional means. Reverse Append takes
                       advantage of the fact that for many online marketers, the email address is the only identifier within 
                       their online database. To find postal addresses, Reverse Append matches your email-only file with the
                        Smart Business contacts database of over 900 million records that include email addresses as well as
                         name and postal address. Where an email address matches,
                     Reverse Append will return a file containing the name and deliverable postal address of the individual at the given email address.</p>

              </div>
            </div>
          </div>

        
        </div>
      </div>

      <div className='about-area pt-5 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
           
            <div
              className='col-lg-6'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                {/* <h6 className='sub-title'>Reverse Appending</h6> */}
                     <h6 className="mb-4">CASS Certified Addresses</h6>

                      <p className="content mb-4">
                      CASS Certified Addresses Reverse Append uses a CASS certified database and a proprietary addresses
                       standardization technology. This platform ensures that you receive only the highest quality addresses
                        from the reverse append process. Based on an industry leading matching technology, our standardization
                         solution evaluates each unique element of an address for complete address accuracy according to the USPS.
                          Items such as suffixes, apartment numbers, suite numbers, PO boxes, and rural/highway contract route addresses,
                           as well as city names do not confuse our platform. Updated monthly, our
                       solution includes ZIP+4 information so the address you receive is guaranteed to be a deliverable address – every time.
                      </p>

                     <h6 className="mb-4 pt-3">Lower Postal Costs</h6>

                     <p className="content"> Standardization lowers your postal costs by making sure your addresses conform 
                     to USPS requirements for address format and content. Reverse Append adds missing address information; 
                     standardizes city names and state abbreviations, corrects misspelled address elements and converts addresses into a USPS
                      readable format. The result is that provide to you a high quality, deliverable database ready to mail.</p>

              </div>
            </div>

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
                  src={reverseAppendingCASSImg}
                  alt='img'
                />
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
                <img className='w-100' src={reverseAppendingContactImg} alt='img' />
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
                  Reach our expert professionals   of <span>Reverse Appending</span> 
                   
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

export default Reverse_Appending;
