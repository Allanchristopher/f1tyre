import React from "react";
import "./Enquiry.css";
import Enquirybackimg from "../Assests/Enquirybackimg.svg";
function Enquiry() {
  return (
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
            <p className="Enquiry-information-number">+91 9843061699</p>
            <p className="Enquiry-information-text-mail">
              f1tyrecity@gmail.com
            </p>
            <p className="Enquiry-information-text-address">
              NH 47, Lakshmi Nagar OPP to Old Kanthasami Mill, Bhavani 638316
            </p>
            <p className="Enquiry-information-text-address">
              NH 47, Lakshmi Nagar OPP to Old Kanthasami Mill, Bhavani 638316
            </p>
          </div>
          <div>Socail media</div>
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
    </div>
  );
}

export default Enquiry;
