import React from "react";
import "./Enquiry.css";
import Enquirybackimg from "../Assests/Enquirybackimg.svg";
import callicon from "../Assests/call-icon.svg";
import emailicon from "../Assests/email-icon.svg";
import locationicon from "../Assests/location-icon.svg";
import footerfb from "../Assests/footer-fb.svg";
import footertwitter from "../Assests/footer-twitter.svg";
import footerlinked from "../Assests/footer-linkedin.svg";
import footerintsa from "../Assests/footer-intsa.svg";
import Navbar1 from "./Navbar1.js";
function Enquiry() {
  return (
    <>
    <Navbar1/>
    <div className="Enquiry">
      <div className="Enquiry-text-container">
        <p className="Enquiry-heading">Enquiry</p>
        <br />
        <p className="Enquiry-text">
          We're here to assist you with all your tire and wheel alignment needs.
        </p>
      </div>
      <div className="Enquiry-form-conatiner">
        <div className="Enquiry-formcontainer-1">
          <div className="Enquiry-formcontainer-1-1">
            <p className="Enquiry-information">Enquiry information</p>
            <p className="Enquiry-information-text">
              Please fill out the following information so we can better assist
              you
            </p>
          </div>
          <div className="Enquiry-formcontainer-1-2">
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
          <div className="Enquiry-socialmedia-icon">
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
        </div>
        <div className="Enquiry-formcontainer-2">
          <input type="text" placeholder="Name" className="Enquiry-text-name" required/>
          <input type="text" placeholder="Phone Number" className="Enquiry-text-name" required/>
          <input type="text" placeholder="choose Brand" className="Enquiry-text-name" required/>
          <input type="text" placeholder="Tyre Size" className="Enquiry-text-name" required/>
          <input type="text" placeholder="Tyre Pattern" className="Enquiry-text-name" required/>
          <button className="Enquiry-submit-button" type="Submit">SUBMIT</button>
        </div>
      </div>
    </div></>
    
  );
}

export default Enquiry;
