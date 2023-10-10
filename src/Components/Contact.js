import React from 'react';
import "./Contact.css";
function Contact() {
  return (
    <div className='Contact'>
       <div className="Contact-text-container">
        <p className="Contact-heading">Contact Us</p>
        <br />
        <p className="Contact-text">
        We are delighted that you want to get in touch with us. We value your inquiries, feedback, and suggestions, and our team is here to assist you in every possible way.        </p>
      </div>
      <div className="Contact-form-conatiner">
        <div className="Contact-formcontainer-1">
          <div className="Contact-formcontainer-1-1">
            <p className="Contact-information">Contact Information</p>
            <p className="Contact-information-text">
            We're here to assist you with any questions, appointments,
or inquiries you may have
            </p>
          </div>
          <div className="Contact-formcontainer-1-2">
          
          </div>
        </div>
        <div className="Contact-formcontainer-2">
          <input type="text" placeholder="First-Name" className="Contact-text-name" required/>
          <input type="text" placeholder="E-Mail" className="Contact-text-name" required/>
          <input type="text" placeholder="Message" className="Contact-text-area" required/>
          <button className="Contact-submit-button" type="Submit">SUBMIT</button>
          <div className='callus-direction-btn-container'>
            <button className="Callus-btn">CALL US NOW!</button>
            <button className="Direction-btn">GET DIRECTION</button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Contact
