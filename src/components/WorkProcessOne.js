import React from "react";

const WorkProcessOne = () => {
  return (
    <>
      {/*==================== Work Process One start ====================*/}
      <div className='work-process-area pd-top-90 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2 className='title'>
            Our Digital <span className="color-default-h">Marketing</span> Services
            </h2>
            <h6 className='sub-title mt-3'>Our skilled experts help companies increase leads and sales, optimize your marketing costs, and differentiate brands</h6>

            {/* <p>Our skilled experts help companies increase leads and sales, optimize your marketing costs, and differentiate brands</p> */}
          </div>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/10.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Social Media Marketing</h5>
                  <p className='content'>
                  We use a number of SEO/SEM and SMM techniques to assist you to build a strong and unparalleled reputation online...
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/11.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Web Design</h5>
                  <p className='content'>
                  We offer state of the art, cutting edge technology by creating new and unique website designs by top experts....
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                  <img src='assets/img/icon/12.svg' alt='img' />
                </div>
                <div className='details'>
                  <h5 className='mb-3'>PPC (Pay Per Click)</h5>
                  <p className='content'>
                  We help online advertisers accrue low costs when users click their ads on any advertising channel...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}
    </>
  );
};

export default WorkProcessOne;
