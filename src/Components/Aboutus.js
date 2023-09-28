import React from "react";
import "./Aboutus.css";
import Aboutusimg from "../Assests/Aboutusimg.svg"
function Aboutus() {
  return (
    <div className="Aboutus">
      <div className="Aboutus-container-1">
        <img src={Aboutusimg} alt="Img" className="Aboutus-img"/>
      </div>
      <div className="Aboutus-container-2">
        <p className="Aboutus-heading">ABOUT US</p>
        <p className="Aboutus-text">
          At F1 Tyre city, we are passionate about providing top-notch wheel
          alignment and tire services to ensure your vehicle's safety,
          performance, and longevity. With years of industry experience and a
          team of skilled technicians, we are committed to delivering
          unparalleled service and customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
