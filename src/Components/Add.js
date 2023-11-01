import React from "react";
import "./Add.css";
import Addbackground from "../Assests/Addbackground.svg";
import tyrei2qmge from "../Assests/tyreimge.svg";
function Add() {
  return (
    <div className="Add-big-screen">
    <img src={Addbackground} alt="background" className="add-background" /><div className="Add">
      <div className="image-container">
       
        <div className="add-image-text-container">
          <p className="add-image-text" data-aos="fade-right" data-aos-duration="1000">
            Get the perfect grip for every road with our premium tires
          </p>
          <div className="add-button-container" data-aos="fade-up" data-aos-duration="1000">
          <a href="/Enquiry"><button className="add-btn">enquire now!</button></a>
          <a href="tel:+91 9843061699"><button className="add-btn">Call us now!</button></a>
            
          </div>
        </div>
        <img src={tyrei2qmge} className="tyre-imge" data-aos="fade-down" data-aos-duration="1000" alt="image"/>
      </div>
    </div></div>
    
  );
}

export default Add;
