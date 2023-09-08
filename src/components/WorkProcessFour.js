import React from "react";
import { AiOutlineCar, AiFillBank, AiOutlineCloudUpload, AiOutlineShop, AiOutlineDatabase } from 'react-icons/ai'
import { BsHospital, BsHouseGear, BsBook, BsTruck, BsDatabaseCheck } from 'react-icons/bs';
import { LiaAmbulanceSolid, LiaWarehouseSolid, LiaPlaneDepartureSolid, LiaBroadcastTowerSolid } from 'react-icons/lia';
import { IoBusOutline } from 'react-icons/io5';
import { LuUtilityPole } from 'react-icons/lu';
import {AiOutlineMail} from 'react-icons/ai';
import {TbUsersGroup} from 'react-icons/tb'
import {LuMousePointerClick} from 'react-icons/lu';
import {MdOutlineCleaningServices} from 'react-icons/md'; 
import {TbDatabasePlus} from 'react-icons/tb'
import {BiPieChart} from 'react-icons/bi'
import {GiRecycle} from 'react-icons/gi';

import { Link } from "react-router-dom";
const WorkProcessFour = () => {
  return (
    <>
      
      {/*==================== Work Process One start ====================*/}
      <div className='work-process-area pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
     
          </div>
          <div className='row'>

            <div className='col-xl-4 col-md-6'>
            <Link to="/Data_Cleaning">
<div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                <MdOutlineCleaningServices className="inner-card-icon"/>
                  
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Data Cleansing</h5>
                  <p className='content'>
                  Clean, de-duplicate, standardize, normalize, verify and validate critical data of any of the company needs…
                  </p>
                </div>
              </div>
            </Link>  
            </div>

            <div className='col-xl-4 col-md-6'>
            <Link to="/Data_Appending">
<div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                <TbDatabasePlus className="inner-card-icon"/>
                  
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Data Appending</h5>
                  <p className='content'>
                  Append demographic, behavioral and lifestyle data to your customer needs & improve your marketing results…
                  </p>
                </div>
              </div>
            </Link>
            </div>

            <div className='col-xl-4 col-md-6'>
            <Link to="/Data_Segmentation">
<div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                <BiPieChart className="inner-card-icon"/>
                  
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Data Segmentation</h5>
                  <p className='content'>
                  Data segmentation will allow you to communicate a relevant and targeted message to each segment identified..,
                  </p>
                </div>
              </div>
            </Link>
            </div>

            <div className='col-xl-4 col-md-6'>
            <Link to="/Data_Verification">
<div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                <BsDatabaseCheck className="inner-card-icon"/>
                  
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Data Verification</h5>
                  <p className='content'>
                  Ensuring the data that are gathered are as accurate as possible, and to minimize human and instrument errors…
                  </p>
                </div>
              </div>
            </Link>
            </div>

            <div className='col-xl-4 col-md-6'>
            <Link to="/Email_Appending">
<div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                <AiOutlineMail className="inner-card-icon"/>
                  
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Email Appending</h5>
                  <p className='content'>
                  Processing of customer data and matching it with the data vendors database to obtain qualitative reach to the right customers…
                  </p>
                </div>
              </div>
            </Link>
            </div>

            <div className='col-xl-4 col-md-6'>
            <Link to="/Reverse_Appending">
<div className='single-work-process-inner-5'>
                <div className='thumb mb-3'>
                <GiRecycle className="inner-card-icon"/>
                  
                </div>
                <div className='details'>
                  <h5 className='mb-3'>Reverse Appending</h5>
                  <p className='content'>
                  Reverse lookup emails of your prospective customers can get high CTR for your campaigns … 
                  </p>
                </div>
              </div>
            </Link>
            </div>

          </div>
        </div>
      </div>
      {/* ==================== Work Process One end ====================*/}

      {/*==================== Work Process Three start ====================*/}
<div
        className='work-process-area bg-position-right pd-bottom-90'
        style={{ backgroundImage: 'url("./assets/img/bg/16.png")' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='section-title text-center pb-5'>
                <h6 className='sub-title-sky-blue'>Galileo Data Email Lists</h6>
                <h2 className='title'>
                We provide access to Client Insights with guaranteed response rates as the email lists is verified through human intelligence.
                </h2>
              </div>
            </div>
          </div>
          <div className='work-process-area-inner-2'>
            <div className='row'>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Automotive">
                <div className='single-work-process-inner style-2 text-center'>
                  <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                    {/* <img src='assets/img/icon/36.svg' alt='img' /> */}
                    <AiOutlineCar className="card-inner-icon"/>
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Automobile Industry</h5>
                    <p className='content'>
                    With our Automobile Industry Email and Mailing List target Automobile Dealers,
                    </p>
                  </div>
                </div>
                </Link>
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Banking_And_Financial">
                <div className='single-work-process-inner style-2 text-center'>
                  <img
                    className='line-img'
                    src='assets/img/about/30.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                    {/* <img src='assets/img/icon/37.svg' alt='img' /> */}
                    <AiFillBank className="card-inner-icon"/>
                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Banking & Financial</h5>
                    <p className='content'>
                    Our file comprises commercial banks, insurance companies,
                    </p>
                  </div>
                </div>
                </Link>
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Biotech_And_Pharmaceutical">
  <div className='single-work-process-inner style-2 text-center'>
                  <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <BsHospital className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Pharmaceutical and Biotech</h5>
                    <p className='content'>
                    The Pharmaceutical and Biotechnology Email Subscriber file is comprised
                    </p>
                  </div>
                </div>
              </Link>
              
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Construction_Industry">
                    <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/30.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <BsHouseGear className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Construction</h5>
                    <p className='content'>
                    Connect with the construction industry prospects in the US with a smart move
                    </p>
                  </div>
                </div>
              </Link>
            
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Education">
                  <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <BsBook className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Education</h5>
                    <p className='content'>
                    Galileo Data provides the most accurate and latest Education Email list that
                    </p>
                  </div>
                </div>
              </Link>

              
              </div>


              <div className='col-lg-3 col-md-6'>
              <Link to="/Hospitality">
                <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <LiaAmbulanceSolid className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Hospitality</h5>
                    <p className='content'>
                    The Hospitality Decision Makers business list has been meticulously researched
                    </p>
                  </div>
                </div>
              </Link>
                
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Information_Technology">
                   <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/30.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <AiOutlineCloudUpload className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>IT Industry</h5>
                    <p className='content'>
                    Galileo Data specializes in providing highly-responsive mailing lists, email lists
                    </p>
                  </div>
                </div>
              </Link>
             
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Logistic_and_Distribution">
   <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <BsTruck className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Logistic & Distribution</h5>
                    <p className='content'>
                    Our database in heavy machinery, retail, industrial manufacturing and similar
                    </p>
                  </div>
                </div>
              </Link>
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Real_Estate">
                     <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/30.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <LiaWarehouseSolid className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Real Estate</h5>
                    <p className='content'>
                    The real estate industry’s value chain has many moving parts, and each holds immense potential for creating
                    </p>
                  </div>
                </div>
              </Link>
           
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Retail">
                       <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <AiOutlineShop className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Retail</h5>
                    <p className='content'>
                    Demanding personalized products and services with digitally connected customers at the click of a button,
                    </p>
                  </div>
                </div>
              </Link>
         
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/">
                   <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/30.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <IoBusOutline className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Transport & Logistic</h5>
                    <p className='content'>
                    </p>
                  </div>
                </div>
              </Link>
             
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Travel_and_Tourism">
                <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <LiaPlaneDepartureSolid className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Travel & Tourism</h5>
                    <p className='content'>
                    The telecom sector continues to be at the epicenter for innovation, growth and disruption
                    </p>
                  </div>
                </div>
              </Link>
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Telecommunication_Company">
                  <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/30.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <LiaBroadcastTowerSolid className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Telecommunication</h5>
                    <p className='content'>
                    The telecom sector continues to be at the epicenter for innovation, growth
                    </p>
                  </div>
                </div>
              </Link>
              
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/Utility_And_Energy ">
                 <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/29.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <LuUtilityPole className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Utility & Energy</h5>
                    <p className='content'>
                   
                   Galileo Data provides of key professionals who manage and direct the overall
                    </p>
                  </div>
                </div>
              </Link>
               
              </div>

              <div className='col-lg-3 col-md-6'>
              <Link to="/">
                   <div className='single-work-process-inner style-2 text-center'>
                <img
                    className='line-img'
                    src='assets/img/about/30.png'
                    alt='img'
                  />
                  <div className='thumb mb-3'>
                  <AiOutlineDatabase className="card-inner-icon"/>

                  </div>
                  <div className='details'>
                    <h5 className='mb-3'>Custom</h5>
                    <p className='content'>
                    </p>
                  </div>
                </div>
              </Link>
             
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ==================== Work Process Three end ====================*/}
    </>
  );
};

export default WorkProcessFour;
