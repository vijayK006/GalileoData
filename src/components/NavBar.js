import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../src/img/logo/galileodata-white-logo.png';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log("hell");
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

// active class in navbar
const [selectedMenuItem, setSelectedMenuItem] = useState(
  localStorage.getItem('selectedMenuItem') || null
);

// Handle menu item click
const handleMenuItemClick = (menuItemId) => {
  // Update the selected menu item
  setSelectedMenuItem(menuItemId);

  // Save the selected menu item to localStorage
  localStorage.setItem('selectedMenuItem', menuItemId);
};

// Use useEffect to load the selected menu item from localStorage on initial render
useEffect(() => {
  const savedSelectedMenuItem = localStorage.getItem('selectedMenuItem');
  if (savedSelectedMenuItem) {
    setSelectedMenuItem(savedSelectedMenuItem);
    console.log(savedSelectedMenuItem)
  }
}, []);

  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? "td-search-popup active" : "td-search-popup "}
        id='td-search-popup'
      >
        <form action='/' className='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search.....'
            />
          </div>
          <button type='submit' className='submit-btn'>
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
      ></div>
      {/* navbar start */}
      <nav className='navbar navbar-area navbar-expand-lg'>
        <div className='container nav-container navbar-bg'>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target='#itech_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='img' />
            </Link>
          </div>
          {/* <div className='nav-right-part nav-right-part-mobile'>
            <span className='search-bar-btn' onClick={searchActive}>
              <FaSearch />
            </span>
          </div> */}
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-end'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about' >About Us</Link></li>
 <li className='menu-item-has-children'>
                <a href='#'>Our Data</a>
                <ul className='sub-menu'>
                <li>
                    <Link to='/Automotive'>Automotive</Link>
                  </li>
                  <li>
                    <Link to='/Banking_And_Financial'>Banking And Financial</Link>
                  </li>
                  <li>
                    <Link to='/Biotech_And_Pharmaceutical'>Biotech And Pharmaceutical</Link>
                  </li>
                  <li>
                    <Link to='/Construction_Industry'>Construction Industry</Link>
                  </li>
                  <li>
                    <Link to='/Education'>Education</Link>
                  </li>

                  <li>
                    <Link to='/Hospitality'>Hospitality</Link>
                  </li>

                  <li>
                    <Link to='/Information_Technology'>Information Technology</Link>
                  </li>

                  <li>
                    <Link to='/Logistic_and_Distribution'>Logistic and Distribution</Link>
                  </li>

                  <li>
                    <Link to='/Manufacturing'>Manufacturing</Link>
                  </li>

                  <li>
                    <Link to='/Retail'>Retail</Link>
                  </li>
                  
                  <li>
                    <Link to='/Real_Estate'>Real Estate</Link>
                  </li>

                  <li>
                    <Link to='/Telecommunication_Company'>Telecommunication Company</Link>
                  </li>

                  <li>
                    <Link to='/Travel_and_Tourism'>Travel and Tourism</Link>
                  </li>

                  <li>
                    <Link to='/Utility_And_Energy'>Utility And Energy</Link>
                  </li>
                </ul>
              </li>

             
              <li className='menu-item-has-children'>
                <a href='#'>Data Solutions</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/Data_Cleaning'>Data Cleaning</Link>
                  </li>

                  <li>
                    <Link to='/Data_Appending'>Data Appending</Link>
                  </li>

                  <li>
                    <Link to='/Data_Segmentation'>Data Segmentation</Link>
                  </li>

                  <li>
                    <Link to='/Data_Verification'>Data Verifiction</Link>
                  </li>

                  <li>
                    <Link to='/Reverse_Appending'>Reverse Appending</Link>
                  </li>

                  
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Digital Marketing</a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/Social_Media_Marketing'>Social Media Marketing</Link>
                  </li>
                  <li>
                    <Link to='/Web_Design'>Web Design</Link>
                  </li>
              
                </ul> 
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>GDPR</a>
               <ul className='sub-menu'>
                  
                  <li>
                    <Link to='/RDPSC'>RDPCS</Link>
                  </li>
                </ul> 
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>
        
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
