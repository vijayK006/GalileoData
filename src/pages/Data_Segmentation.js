
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import dataSegmentationImg from '../img/DataSegmentation-01.png';
import dataSegmentationContactImg from '../img/DataSegmentationContact.png';


const Data_Segmentation = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Data Segmentation"}
      subcontent={"Galileo data B2B Data Segmentation service adds guaranteed deliverable email addresses to your existing corporate postal database"} />

      <div className='about-area pd-top-120'>
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
                  src={dataSegmentationImg}
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
                {/* <h6 className='sub-title'>Data Cleaning</h6> */}
                <h2 className='title'>
              Data <span>Segmentation</span>  

                </h2>

               

                    <p className='content mb-4 mb-xl-5'>
                    Plan more efficient and rewarding marketing strategies. At Galileo Data, we offer you smart data
                     segmentation services which is the process of distributing large set of customers into groups or categories based on their
                     similarities in specific aspects aligned to marketing such as gender, age groups, income levels, demographics etc..</p>

                     <p className="content">Segmenting large customer database helps companies connect with their customers in
                      the best possible way. Companies, which employ data segmentation techniques
                      can allocate their resources more optimally and plan more systematic and rewarding marketing strategies.</p>
              </div>
            </div>
          </div>

        
        </div>
      </div>

      {/* Work Process One */}
          {/*==================== Work Process One start ====================*/}
          <div className='work-process-area pd-top-100'>
        <div className='container'>
       
        <div className="row pb-5">
            <div className="col-lg-12">

            <div className='section-title'>
            <h2 className='title'>
         
           How does <span>Galileo data</span> help you?
         
            </h2>
            {/* <h6 className='sub-title mt-3'>8 Steps to aggregating your targeted email lists</h6> */}

        
          </div>
            </div>

            <div className="row pt-2">

                 <div className="col-lg-6">


 <p style={{textAlign:"justify"}}>Enhance – Use additional demographic and lifestyle information to gain a better insight into consumer
                 behavior and ensure your communication is relevant. Match – Accurately identify and discard duplicate
                  records within a single file, or between two to avoid mailing an individual multiple times with the same offer.
                 Mailing an existing customer, or an individual who has specifically requested not to be contacted by your organization.</p>
            </div>

            <div className="col-lg-6">
            <p style={{textAlign:"justify"}}>Validate – Validate whether if individual is present at particular address and telephone contact 
            details are correct to ensure that your direct marketing reaches the expected recipient. Suppress –
             Identify and remove individuals that cannot or will not respond as a result of them moving house, passing away, or registering with one of
             the preference services. This curtails wasted mailing costs and helps to avoid consumer annoyance.</p>
            </div>

            <div className="col-lg-12 pt-3">
            <p>Enhances chances of success for marketing campaigns targeted at a particular group – 
Personalized touch is added to the way customers are approached.
 – More customized campaigns are planned. – Deepens relationship with customers and results in higher conversion ratio</p>
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
                <img className='w-100' src={dataSegmentationContactImg} alt='img' />
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
                  Reach our expert professionals   of <span>Data Segmentation</span> 
                   
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

export default Data_Segmentation;
