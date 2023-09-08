import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterFour from "../components/FooterFour";
import NavBar from "../components/NavBar";
import travel_banner from '../img/Travel and Tourism.png';
import travel_contact from '../img/Travel and Tourism Email List.png';

import { FaCheckCircle } from 'react-icons/fa';

const Travel_and_Tourism = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Travel and Tourism Email List"}
      subcontent={"The telecom sector continues to be at the epicenter for innovation, growth and disruption for any industry virtually. Mobile devices and related broadband connectivity continue to be more embedded in the fabric of society today and they are key in driving the momentum around some key trends such as mobile payments, video streaming and Internet of Things."}
       />

      <div className='about-area pt-5'>
        <div className='container'>
          <div className='row d-flex justify-content-center align-items-center' >
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
                  src={travel_banner}
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
                <h6 className='sub-title'>Travel and Tourism</h6>
                <h2 className='title'>
             <span>Travel and Tourism</span> Email List
                   
                </h2>

                <h4 className="pt-4">Understand the expectations and purchasing behaviors of travel resellers to target precisely</h4>
                <h5 className="pt-2">Receive Dedicated Prospecting Support to Achieve Scalable Growth</h5>

                <p className='content mb-xl-3'>The tourism industry is widely dispersed with a number of independent travel distributors.
                 With such a diverse web of distribution channels, getting a competitive advantage can take time.</p>

                 <p className="content mb-xl-3">Reduce your marketing efforts by half using our well-defined customer bases.
                  Now leave the guesswork behind and trust our verified
                  contacts to identify, engage, and convert prospective customers using the hawk-eyed TAM approach.</p>

              </div>
            </div>
          </div>

          <div className='row pd-top-90'>

            <div
              className='col-lg-12'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                {/* <h6 className='sub-title'>Automotive</h6> */}
                <h3 className='title'>
                Get started by asking questions like:

                </h3>

       
              </div>
            </div>

            <div className='col-lg-12'>
            <div className="row">
                  <div className="col-lg-6">
                    <ul className='single-list-inner style-check style-heading mb-3'>
                      <li> <FaCheckCircle />Can I segment my TAM based on customer preferences?</li>
                    </ul>
                  </div>

                  <div className="col-lg-6">
                    <ul className='single-list-inner style-check style-heading mb-3'>
                      <li> <FaCheckCircle />Can I grow my outreach to customer clusters in a specific geography?</li>

                    </ul>
                  </div>

                  <div className="col-lg-6">
                    <ul className='single-list-inner style-check style-heading mb-3'>
                      <li> <FaCheckCircle />Can I access contacts of agents in premium locations across continents?</li>

                    </ul>
                  </div>

                  <div className="col-lg-6">
                    <ul className='single-list-inner style-check style-heading mb-3'>
                      <li> <FaCheckCircle />How can I find and target decision-makers involved in organizing MICE tours?</li>

                    </ul>

                  </div>

                  <div className="col-lg-6">
                    <ul className='single-list-inner style-check style-heading mb-3'>
                      <li> <FaCheckCircle />Can you provide sales-ready leads looking for business tour packages?</li>

                    </ul>

                  </div>

                  <div className="col-lg-6">
                    <ul className='single-list-inner style-check style-heading mb-3'>
                      <li> <FaCheckCircle />How can I check which distribution channels are best for my travel products?</li>

                    </ul>

                  </div>

                </div>
            </div>
            <p style={{textAlign:"justify"}} className="pt-3">Targeted marketing begins when you have 
            the correct answers to your questions and concerns. You name your core personas, and we’ll deliver. Consult
             our travel and tourism industry marketing specialist to join the growth curve today.</p>

          </div>

          <div className="pd-top-90 ">
            <h5>Simplify Selling Tours by Directly Engaging Tour Providers</h5>
            <h4 className="pb-4">Now directly engage your core customer clusters comprising:</h4>

            <div className='row '>

              <div className='col-md-6'>
                <ul className='single-list-inner style-check style-heading'>
                  <li> <FaCheckCircle />Online Travel Agencies (OTAs)
                  </li>

                  <li> <FaCheckCircle />Independent local agents
                  </li>

                  <li> <FaCheckCircle />Destination-specific OTAs
                  </li>

                
                </ul>
              </div>

              <div className='col-md-6'>

                <ul className='single-list-inner style-check style-heading'>
                <li> <FaCheckCircle />Activity providers
                  </li>

                  <li> <FaCheckCircle />MICE tour organizers
                  </li>

                  <li> <FaCheckCircle />Destination management organizers (DMOs)
                  </li>

              
                </ul>
              </div>
              <p className="pt-3">Whatever your domestic market looks like, your international customer base will always operate differently.
               As aggregators in the tourism segment, 
              you need to stay on top of the changing travel trends and market dynamics across distribution channels..</p>
               
               <p>Understanding the structure of the distribution system takes time, especially when you’re focused on a niche segment.
                That is why you stand to gain a lot from our nurturing marketing strategy that
                lets you access actionable TAM insights to deliver optimized content and engage/re-engage leads across multiple touchpoints.</p>


            </div>

          </div>

          <div className="pd-top-90 ">
            <h5>Realize True Revenue Potential & Drive More Traffic for Your Travel Business</h5>
            <h4 className="pb-4">What you can achieve with our highly customized growth strategies and services:</h4>
            <div className='row '>

              <div className='col-md-12'>
                <ul className='single-list-inner style-check style-heading'>
                  <li> <FaCheckCircle />Back your campaigns using niche and verified contacts
                  </li>

                  <li> <FaCheckCircle />Put end-to-end marketing solutions to use for comprehensive TAM analysis
                  </li>

                  <li> <FaCheckCircle />Learn about the most sought-after tourist spots across geographies to design more attractive products
                  </li>

                  <li> <FaCheckCircle />Take advantage of top-notch account profiling to segregate sales-ready leads from cold ones
                  </li>

                  <li> <FaCheckCircle />Let go of trial-and-error marketing by partnering with experienced growth partners for assured results
                  </li>
                </ul>
              </div>

        
              <p className="pt-3">Even amidst the ever-growing industry challenges, 
              find and bank on growth circuits without difficulty with our custom growth solutions.</p>
               
            </div>

          </div>

          <div className="pd-top-90 pd-bottom-100">
            <h4>Some of the Pressing Challenges in Travel that Demand Your Attention and Time</h4>
            <div className='row pt-3'>

              <div className='col-md-12'>
                <ul className='single-list-inner style-check style-heading'>
                  <li> <FaCheckCircle />Pitching complex selling propositions of tour packages in a precise manner for effective targeting
                  </li>

                  <li> <FaCheckCircle />Competitive pricing of tour products and packages because of growing market competition
                  </li>

                  <li> <FaCheckCircle />Inefficient management of B2B commissions and markups owed to the travel distributors and resellers
                  </li>

                  <li> <FaCheckCircle />Involvement of multiple representatives and stakeholders in the buying process leading to slow sales cycles
                  </li>

                  <li> <FaCheckCircle />Excruciating hours of communication over calls and emails with agents to bargain rate and availability
                  </li>

                  <li> <FaCheckCircle />Delayed sales cycles resulting from a constant back and forth of communication and negotiation
                  </li>
                </ul>
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
                <img className='w-100' src={travel_contact} alt='img' />
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
                    Reach our expert professionals   of <span>Travel and Tourism Email List</span>
                    
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

export default Travel_and_Tourism;
