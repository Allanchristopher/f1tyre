import React from "react";
import "./Footer.css";
import f1logo from "../Assests/f1-logo.svg";
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container-1">
        <div className="footer-box-1">
          <img src={f1logo} alt="logo" className="Footer-logo" />
          <p className="Footer-logo-text">
            We are passionate about providing top-notch wheel alignment and tire
            services to ensure your vehicle's safety, performance, and
            longevity.
          </p>
        </div>
        <div className="footer-box-2">
          <p className="Footer-headings">Company</p>
          <div className="Company-container">
            <p>About</p>
            <p>Products</p>
            <p>Gallery</p>
            <p>Testimonial</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="footer-box-3">
          <p className="Footer-headings">Reach us</p>
          <div className="Reachus-container">
            <p>+91 9843061699</p>
            <p>f1tyrecity@gmail.com</p>
            <p>
              NH 47, Lakshmi Nagar OPP to Old Kanthasami Mill, Bhavani 638316
            </p>
            <p>NH 47, Lakshmi Nagar
OPP to Old Kanthasami Mill,
Bhavani 638316</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
