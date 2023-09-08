import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import ContactAreaOne from "../components/ContactAreaOne";
import NavBar from "../components/NavBar";
import commonly from "../img/Commonly Asked Questions-01.png";


import {BsDatabaseLock, BsEnvelopePaper} from 'react-icons/bs';
import {TbUserSearch, TbExchange} from  'react-icons/tb';
import {VscServerProcess} from 'react-icons/vsc';
import {AiOutlineMail} from 'react-icons/ai';
import {MdOutlineMarkEmailRead} from 'react-icons/md';
import {RiPassValidLine} from 'react-icons/ri';
import FooterFour from "../components/FooterFour";


const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb
       title={"About Galileo Data Inc"} 
      subcontent={"We have seen the data market at its best, and worst. Irrespective of how tricky the situation is, our data-driven  approach is equipped to get you through and transform your investments into sales and marketing opportunities."} />

      {/* About Area One */}
      <AboutAreaOne />

      <div className="container ">
<h3 className="text-center">Why Galileo Data?</h3>

        <p style={{textAlign:"justify"}}>Galileo Data provides global business organizations with the fuel — ‘DATA’ to power their multi-channel 
        marketing campaigns. Having emerged as one of the highly trusted sources of sales and marketing data across 
        the globe, we help your sales and marketing cadre in utilizing data to generate sales, 
        drive conversations and achieve greater returns on investment.</p>


        <p style={{textAlign:"justify"}}>By harnessing the Big Data/ Data Science world, Galileo Data collates contact 
        and company information from all over the web. Once done, it applies 1000+ data/process 
        rules to build a robust and accurate repository of context-rich, clean, normalized and 
        deduped data. Today, Galileo Data maintains a rich data repository of over 90 Million 
        business records and updates the same on a constant basis to ensure it remains accurate 
        and reliable at all times. We provide pre-packaged as well as customized B2B Marketing 
        Data configured as per industry, geographic regions, demographics, size of the prospective 
        market and so on. Our rich directory of decision makers from numerous industries provides 
        marketers with complete access to information to interact with 
        their prospects via emails, physical mails or telephone.</p>
      </div>




      {/* Team Area One */}
      {/* <TeamAreaOne /> */}

      {/* Counter Area One */}
      {/* <CounterAreaOne /> */}

      {/* Work Process One */}
          {/*==================== Work Process One start ====================*/}
          <div className='work-process-area pd-top-90 pd-bottom-120'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2 className='title'>
            Email Data <span className="color-default-h">Hygiene</span> Is Everything

              
            </h2>
            <h6 className='sub-title mt-3'>8 Steps to aggregating your targeted email lists</h6>

            {/* <p>Our skilled experts help companies increase leads and sales, optimize your marketing costs, and differentiate brands</p> */}
          </div>
          <div className='row'>

            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner-4'>
                <div className='thumb mb-3'>
                  <BsDatabaseLock className="inner-card-icon"/>
                </div>
                <div className='details'>
                <p className="process-count">Step 1</p>
                  <h5 className='mb-3'>Your lead data is in safe hands</h5>
                  <p className='content'>
                  We acquire an opt-in email database to ensure maximum deliverability. Boost campaign success with the most extensive email addresses.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner-4'>
                <div className='thumb mb-3'>
                <TbUserSearch className="inner-card-icon"/>
                </div>
                <div className='details'>
                <p className="process-count">Step 2</p>
                  <h5 className='mb-3'>We research your top customers</h5>
                  <p className='content'>
                  Our in-house research team fills in the missing information. 
                  We add more intelligence fields for relevant contextual campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner-4'>
                <div className='thumb mb-3'>
                <VscServerProcess className="inner-card-icon"/>

                </div>
                <div className='details'>
                <p className="process-count">Step 3</p>
                  <h5 className='mb-3'>Rigorous validation process</h5>
                  <p className='content'>
                  Our contact center team verifies and validates the data of your email leads.We 
                  collect more customer details through tele-surveys and white paper download programs.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner-4'>
                <div className='thumb mb-3'>
                <AiOutlineMail className="inner-card-icon"/>

                </div>
                <div className='details'>
                <p className="process-count">Step 4</p>
                  <h5 className='mb-3'>Identification of email blind spots</h5>
                  <p className='content'>
                  NCOA, Mortis suppression, Spam traps /honeypots, complainers 
                  and opt-outs etc. are aggregated into a suppression file and de-duped.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner-4'>
                <div className='thumb mb-3'>
                <MdOutlineMarkEmailRead className="inner-card-icon"/>

                </div>
                <div className='details'>
                <p className="process-count">Step 5</p>
                  <h5 className='mb-3'>Email address verification</h5>
                  <p className='content'>
                  Simple SMTP ping tests using partner tools such as BriteVerify, 
                  Xverify, ImpressionWise, Freshaddress, DataValidation, Informatica etc.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner-4'>
                <div className='thumb mb-3'>
                <BsEnvelopePaper className="inner-card-icon"/>

                </div>
                <div className='details'>
                <p className="process-count">Step 6</p>
                  <h5 className='mb-3'>Executing email campaigns</h5>
                  <p className='content'>
                  Live email campaign is executed with high email deliverability. 
                  Any opt-outs or bounces are added to our suppression ﬁles.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner-4'>
                <div className='thumb mb-3'>
                <RiPassValidLine className="inner-card-icon"/>

                </div>
                <div className='details'>
                <p className="process-count">Step 7</p>
                  <h5 className='mb-3'>Automated email validation</h5>
                  <p className='content'>
                  Our social and web validation team manually validates the email database. 
                  Through this validation process we add social media links to contacts.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-6'>
              <div className='single-work-process-inner-4'>
                <div className='thumb mb-3'>
                <TbExchange className="inner-card-icon"/>

                </div>
                <div className='details'>
                <p className="process-count">Step 8</p>
                  <h5 className='mb-3'>Convert email leads to customers</h5>
                  <p className='content'>
                  We run a targeted opt-in campaign for purchased email lists by seeking approval of your prospects. 
                  We use 3rd party direct marketing activities and remove opt-outs within 48 hours.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}

      {/*==================== Faq area start ====================*/}
      <div
        className='faq-area faq-area-margin-top bg-cover pd-top-120 pd-bottom-110'
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
                  src={commonly}
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
                <h2 className='title'>
                Commonly <span className="color-default-h">Asked</span> Questions
                  
                </h2>
                {/* <p className='content'>
                A marketing service company which helps in providing a direct connection with targeted prospects, 
                helping companies across all verticals and delivering quality databases at reasonable cost.
                </p> */}
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
                      Why Should I Buy An Email List?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    As an astute marketer, you should buy email list for effective multichannel 
                    campaigning. When you buy targeted email list you get access to authentic data 
                    on key decision makers, technology users and C-Suite executives. At Galileo Data Inc we ensure that once you buy email 
                    list you get higher market penetration and that your campaigns reach a genuinely interested audience base.
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
                      How To Buy Email List?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    You may buy email list with tele-verified and responsive data from Galileo Data Inc. That 
                    is not all; you may get access to a sample list before you buy email lists. A sample mailing list 
                    gives a preview of the lists from Galileo Data Inc. ensuring that marketers get nothing but the best.
                    </div>
                  </div>
                </div>

                <div className='accordion-item'>
                  <h2 className='accordion-header' id='heading3'>
                    <button
                      className='accordion-button collapsed color-default-h'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse3'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                   Is It Worth Buying Email Lists?
                    </button>
                  </h2>
                  <div
                    id='collapse3'
                    className='accordion-collapse collapse'
                    aria-labelledby='heading3'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    It is an astute business decision to buy email list if you wish to succeed in global multichannel 
                    campaigns. The verified and validated email lists are certain to give you 
                  an edge over your competitors with authentic, responsive and customizable B2B email lists.
                    </div>
                  </div>
                </div>

                <div className='accordion-item'>
                  <h2 className='accordion-header' id='heading4'>
                    <button
                      className='accordion-button collapsed color-default-h'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapse4'
                      aria-expanded='false'
                      aria-controls='collapse4'
                    >
                  Can I Purchase Email Lists From Galileo Data Inc?
                    </button>
                  </h2>
                  <div
                    id='collapse4'
                    className='accordion-collapse collapse'
                    aria-labelledby='heading4'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Yes, you can and it is quite simple. Before investing in the mailing lists, you may get a 
                    preview of the purchasing email list by opting to get a sample list for free. Our B2B email 
                    lists are exhaustive and 
                    based on your business criteria we can customize the email list.
                    </div>
                  </div>
                </div>
        
              </div>
            </div>
          </div>

<div className="row pt-5 ">
  <div className="col-md-6">

  <div
                className='accordion accordion-inner style-2 accordion-icon-left mt-3'
                id='accordionExample'
              >

                <div className='accordion-item'>
                  <h2 className='accordion-header' id='botheadingOne'>
                    <button
                      className='accordion-button color-default-h'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#botcollapseOne'
                      aria-expanded='true'
                      aria-controls='botcollapseOne'
                    >
                      How Much Does It Cost To Buy An Email List?
                    </button>
                  </h2>
                  <div
                    id='botcollapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='botheadingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    There is no ‘one size fits all’ rule when it comes to the pricing of mailing lists. 
                    You may write in to us at info@galileodata.us for more information on pricing.
                    </div>
                  </div>
                </div>

                <div className='accordion-item'>
                  <h2 className='accordion-header' id='botheadingTwo'>
                    <button
                      className='accordion-button collapsed color-default-h'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#botcollapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
              What Do I Get With An Email List?
                    </button>
                  </h2>
                  <div
                    id='botcollapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='botheadingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Yes, you can buy email lists in a few simple steps. Once you buy the mailing list, you get the 
                    database with first name and last name, location and zip code, email address, SIC code and more.
                    </div>
                  </div>
                </div>
        
              </div>
  </div>

  <div className="col-md-6">

<div
              className='accordion accordion-inner style-2 accordion-icon-left mt-3'
              id='accordionExample'
            >

              <div className='accordion-item'>
                <h2 className='accordion-header' id='botheading3'>
                  <button
                    className='accordion-button color-default-h'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#botcollapse3'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    How Do I Get An Email List For Marketing?
                  </button>
                </h2>
                <div
                  id='botcollapse3'
                  className='accordion-collapse collapse show'
                  aria-labelledby='botheading3'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                  Galileo Data Inc is a leading provider of mailing list and you may procure the list by writing in 
                  to us at: info@galileodata.us Additionally, 
                  you may download a sample list to know more about our databases.
                  </div>
                </div>
              </div>


              <div className='accordion-item'>
                  <h2 className='accordion-header' id='botheading5'>
                    <button
                      className='accordion-button collapsed color-default-h'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#botcollapse5'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                 What Is The Pricing Like For Email Lists?
                    </button>
                  </h2>
                  <div
                    id='botcollapse5'
                    className='accordion-collapse collapse'
                    aria-labelledby='botheading5'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    To know more about the email database pricing, you may call at 646 461 2757 for a free one-on-one consultation 
                  or write in to us at: info@galileodata.us for detailed information on pricing.
                    </div>
                  </div>
                </div>
      
            </div>
</div>
</div>
        </div>

        
      </div>
      {/* ==================== Faq area end ====================*/}



   {/* Contact Area One */}
   <ContactAreaOne />

      {/* Footer One */}
      <FooterFour />

    </>
  );
};

export default About;
