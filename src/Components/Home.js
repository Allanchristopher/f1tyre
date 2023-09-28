import React from "react";
import "./Home.css";
import Homeimg from "../Assests/Homeimg.svg"
function Home() {
  return (
    <div className="Home">
      <div className="Home-container-1">
        <p className="Home-heading">
          Discover the Perfect
          <br />
          <span>Tyres</span> for your Ride.
        </p>
        <p className="Home-text">
          We're here to provide the best tires for your journey ahead.
        </p>
        <div className="Home-btn-container">
          <button className="Home-enquiry-btn"> enquiry</button>
          <button className="Home-call-btn">Call us now</button>
        </div>
      </div>
      <div className="Home-container-2">
        <img src={Homeimg} alt="Img"/>
      </div>
    </div>
  );
}

export default Home;
