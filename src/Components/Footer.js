import React from "react";
import "./Footer.css";
import f1logo from "../Assests/f1-logo.svg";
import footerfb from "../Assests/footer-fb.svg";
import footertwitter from "../Assests/footer-twitter.svg";
import footerlinked from "../Assests/footer-linkedin.svg";
import footerintsa from "../Assests/footer-intsa.svg";
import callicon from "../Assests/call-icon.svg";
import emailicon from "../Assests/email-icon.svg";
import locationicon from "../Assests/location-icon.svg";
import { Link } from "react-scroll";
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container-1" data-aos="fade-up" data-aos-duration="1000">
        <div className="footer-box-1">
          <div className="footer-socialmedia-icon">
          <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/"><img
              src={footerfb}
              alt="fb-icon"
              className="home-socialmedia-icon"
            /></a>
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/"> <img
              src={footertwitter}
              alt="twitter-icon"
              className="home-socialmedia-icon"
            /></a>
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/"> <img
              src={footerlinked}
              alt="linkedin-icon"
              className="home-socialmedia-icon"
            /></a>
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/"><img
              src={footerintsa}
              alt="insta-icon"
              className="home-socialmedia-icon"
            /></a>
            
          </div>
          <Link
          activeClass="nothing"
          to="Home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        ><img src={f1logo} alt="logo" className="Footer-logo" /></Link>
          
          <p className="Footer-logo-text">
            We are passionate about providing top-notch wheel alignment and tire
            services to ensure your vehicle's safety, performance, and
            longevity.
          </p>
        </div>
        <div className="footer-box-2">
          <p className="Footer-headings">Pages</p>
          <div className="Company-container">
          <Link
          activeClass="nothing"
          to="Home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        ><p>Home</p></Link>
        <Link
        activeClass="nothing"
        to="Aboutus"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      ><p>About</p></Link>
      <Link
      activeClass="nothing"
      to="Ourproducts"
      spy={true}
      smooth={true}
      offset={-60}
      duration={500}
    ><p>Products</p></Link>
    <Link
    activeClass="nothing"
    to="Gallery"
    spy={true}
    smooth={true}
    offset={-60}
    duration={500}
  ><p>Gallery</p></Link>
  <Link
  activeClass="nothing"
  to="Testmonial"
  spy={true}
  smooth={true}
  offset={-60}
  duration={500}
><p>Testimonial</p></Link>
<Link
activeClass="nothing"
to="Ourservices"
spy={true}
smooth={true}
offset={-40}
duration={500}
><p>Services</p></Link>
<Link
activeClass="nothing"
to="Contact"
spy={true}
smooth={true}
offset={0}
duration={500}>
<p>Contact</p></Link>
            
          </div>
        </div>
        <div className="footer-box-3">
          <p className="Footer-headings">Reach us</p>
          <div className="Reachus-container">
          <a href="tel:9486963873"> <p>
              <img src={callicon} alt="call-icon" />
              &nbsp;&nbsp;+91 9843061699
            </p></a>
            <a href="mailto:gracelinhomeforladies@gmail.com"> <p>
              <img src={emailicon} alt="call-icon" />
              &nbsp;&nbsp;f1tyrecity@gmail.com
            </p></a>
            <a href="https://goo.gl/maps/UBYodC6DiYUewMda8?coh=178572&entry=tt"><div className="Address">
              <img src={locationicon} alt="call-icon" />
              <p >
                NH 47, Lakshmi Nagar OPP to Old Kanthasami Mill, Bhavani 638316
              </p>
            </div></a>
            <a href="https://goo.gl/maps/UBYodC6DiYUewMda8?coh=178572&entry=tt">     <div  className="Address"><img src={locationicon} alt="call-icon" />  <p>
              
           NH 47, Lakshmi Nagar OPP to Old Kanthasami Mill,
              Bhavani 638316
            </p></div></a>
       
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
