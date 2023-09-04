import React from "react";
import intell from '../img/inteligancy.jpg'

const FaqAreaOne = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className='faq-area faq-area-margin-top bg-cover pd-top-90 pd-bottom-110'
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className='container'>
          <div className='row'>
            <div
              className='col-xl-5 col-lg-6 col-md-8 order-lg-last'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner pt-lg-3'>
                <img
                  className='main-img'
                  src={intell}
                  alt='img'
                />
                <img
                  className='animate-img-bottom-right top_image_bounce'
                  src='assets/img/about/5.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-xl-7 col-lg-6'
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0 mt-4 mt-lg-0'>
                {/* <h6 className='sub-title'>SOME FAQ'S</h6> */}
                <h2 className='title FaqArea_title'>
                Intelligent <span className="color-default-h">Database</span> Management
                    
                </h2>
                <p className='content'>
                A marketing service company which helps in providing a direct connection with targeted prospects, 
                helping companies across all verticals and delivering quality databases at reasonable cost.
                </p>
              </div>
              <div
                className='accordion accordion-inner style-2 accordion-icon-left mt-3'
                id='accordionExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button color-default-h'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      Go beyond the regular contact lists – choose intelligent database
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body' style={{textAlign:"justify"}}>
                    Redundant and unstructured data hinders qualified lead generation and stumps digital engagement efforts increasing the sales cost exponentially. Marketing campaigns often suffer due to inaccurate, outdated, or limited data. Additionally, there could be challenges linked to not having enough look-alike accounts required to maximising net new prospects.
                     Backed by over two decades of sales enablement experience, Galileo’s Intelligent Database Management Service could just be the solution for you.
Over the years, we have have built a machine-learning based automated platform for synthesizing huge
 volumes of industry segmented data, quality checked by multiple automated and manual validation engines for verified company and contact information. In short, when you want a database provider who focused on the ROI of the campaigns, Galileo’s Intelligent Database Management Service is a one stop answer that your business might be looking for.
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed color-default-h'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      Access the untapped – even in highly specialized customer segments
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body' style={{textAlign:"justify"}}>
                    Leverage our Intelligent Database Management Services (IDBMS) to reach out to key contacts of your target markets. Galileo’s tech powered B2B Database service leveraging automation and machine learning, ensures access to large volumes of contactable contacts and unique accounts in a remarkably shorter span of time. It also leverages Natural Language Processing (NLP) capability that helps in overcoming the challenges of market penetration in non-English speaking countries with geo-specific accurate and refreshed database. To ensure you get maximum output from the intelligent database, the constant automated cleansing of the contact data guarantees that your CRM data never reeks of any obsolescence.
The result is verified, structured, clean and on-demand generated B2B database – a dream come true for any lead generation campaign. And the cherry on the cake? You have upfront visibility to the quality score of the corporate database – so no more hitting the blind spot!
With benefits such as higher accuracy and speed, greater depth of profiling, reduction in manual errors, high volumes of clean, standardized and high-quality data, deeper market access and lower costs – the journey to achieve stellar market penetration could just start right away for your business!
                    </div>
                  </div>
                </div>
        
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;
