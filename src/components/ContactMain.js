import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import demo_video from '../video/GalileoGIF.gif';

import haeadquaters from '../img/symbols/Headquaters.jpg'
import Licencs from '../img/symbols/Licencs.jpg'
import delight from '../img/symbols/delight.jpg'
const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_yipk4xg", //YOUR_SERVICE_ID
        "template_71bgc2q", //YOUR_TEMPLATE_ID
        form.current,
        "cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>

    <div className="video-bg-map">
    {/* <video autoplay="autoplay" loop="loop" muted defaultMuted playsinline="playsinline" oncontextmenu="return false;"  preload="auto" id="myVideo" className="video_content">
        <source src={demo_video} type="video/mp4" />
        </video> */}
        
<div className="d-flex justify-content-center" style={{backgroundColor:"black"}}>
<img src={demo_video} className="video_content" alt="galilioDatas"/>
</div>
 
        <div className="vidoe-banner">
<div className="container">
  <div className="container">
          <div className="row">

            <div className="col-lg-6 col-6">
<div className="con-card pb-5">
<h3>50%</h3>
<p>Reduction in sales prospecting time</p>
</div>

<div className="con-card pb-5">
<h3>30%</h3>
<p>Sales Pipeline Growth</p>
</div>

<div className="con-card pb-5">
<h3>3X</h3>
<p>Increase In Response Rates</p>
</div>

            </div>

            <div className="col-lg-6 col-6">
<div className="con-card pb-5">
<h3 style={{textAlign:"end"}}>50%</h3>
<p style={{textAlign:"end"}}>More Meetings Booked</p>
</div>

<div className="con-card pb-5">
<h3 style={{textAlign:"end"}}>4X</h3>
<p style={{textAlign:"end"}}>Increase In Win Rates</p>
</div>

<div className="con-card pb-5">
<h3 style={{textAlign:"end"}}>3X</h3>
<p style={{textAlign:"end"}}>Increase in Productivity</p>
</div>

            </div>
            
          </div>
        </div>
</div>
        </div>


        
    </div>

      {/* ================= Contact Main start =================*/}
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className='contact-area pt-lg-5 pt-1 pd-bottom-120'>
        <div className='container'>

<div className="row pb-5">

  <div className="col-lg-4 pt-2 pb-2">
<div className="contact-inner-card">
  <div className="d-flex align-items-center">
<div className="contact-inner-img">
<img src={haeadquaters} alt="contact-country"/>
</div>

<div className="contact-inner-info">
<h6>Galileo Headquarters</h6>
<p>2150 South, 1300 East, 500 PMB #1771, Salt Lake City, UT 84106 United States</p>
</div>
  </div>
</div>
  </div>

  <div className="col-lg-4 pt-2 pb-2">
<div className="contact-inner-card">
  <div className="d-flex align-items-center">
<div className="contact-inner-img">
<img src={Licencs} alt="contact-country"/>
</div>

<div className="contact-inner-info">
<h6>Galileo Acquisitions & Licensing</h6>
<p>One Liberty Plaza , Suite 2310, New York, NY 10006United States</p>
</div>
  </div>
</div>
  </div>

  <div className="col-lg-4 pt-2 pb-2">
<div className="contact-inner-card">
  <div className="d-flex align-items-center ">
<div className="contact-inner-img">
<img src={delight} alt="contact-country"/>
</div>

<div className="contact-inner-info">
<h6>Galileo Customer Delight & Finance</h6>
<p>1 Radisson Plaza, Suite 800 New Rochelle NY 10801 United States</p>
</div>
  </div>
</div>
  </div>
</div>

          <div className='contact-page-inner bg-gray'>
            <div className='section-title mb-4 pb-2'>
              <h2 className='title'>Get in Touch</h2>
              <p className='content mb-0'>
              Contact our data experts now or call +1 646-461-2757
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='name'
                      name='user_name'
                      type='text'
                      placeholder='Enter Your Name.'
                      required
                    />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='single-input-inner'>
                    <input
                      id='email'
                      name='user_email'
                      type='email'
                      placeholder='Enter Your Email.'
                      required
                    />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='single-input-inner'>
                    <input
                      id='phone'
                      name='user_phone'
                      type='number'
                      placeholder='Enter Your Phone Number.'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='subject'
                      name='subject'
                      type='text'
                      placeholder='Enter Your Subject.'
                      required
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className='single-input-inner'>
                    <textarea
                      name='message'
                      id='massage'
                      cols='1'
                      rows='5'
                      placeholder='Enter Your Massage ...'
                      required
                    />
                  </div>
                </div>
                <div className='col-12 text-center'>
                  <button
                    className='btn btn-base border-radius-5'
                    type='submit'
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* contact list */}
      <div className='contact-page-list'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/13.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Contacts us</h5>
                  <a href="tel:+1 646 461 2757"><h6>+1 646 - 461 - 2757</h6></a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/14.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Your Email</h5>
                 <a href="mailto:info@galileodata.us"><h6>info@galileodata.us</h6></a> 
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/15.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h6>2150 SOUTH, 1300 EAST , 500 PMB #1771, SALT LAKE, UT 84106 UNITED STATES</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map  */}
      <div className='contact-g-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24195.73644223575!2d-111.87702103339888!3d40.7077337013618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87526029ed1ce58f%3A0xe2a551a2e2355520!2sSalt%20Lake%20City%2C%20UT%2084106%2C%20USA!5e0!3m2!1sen!2sin!4v1693899490158!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
