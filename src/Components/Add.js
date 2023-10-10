import React from "react";
import "./Add.css";
import Addbackground from "../Assests/Addbackground.svg";
import tyrei2qmge from "../Assests/tyreimge.svg";
function Add() {
  return (
    <div className="Add">
      <div className="image-container">
        <img src={Addbackground} alt="background" className="add-background" />
        <div className="add-image-text-container">
          <p className="add-image-text">
            Get the perfect grip for every road with our premium tires
          </p>
          <div className="add-button-container">
            <button className="add-btn">enquire now!</button>
            <button className="add-btn">Call us now!</button>
          </div>
        </div>
        <img src={tyrei2qmge} className="tyre-imge" alt="image"/>
      </div>
    </div>
  );
}

export default Add;
