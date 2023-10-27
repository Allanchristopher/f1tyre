import React from "react";
import "./Home.css";
import Homeimg from "../Assests/Homeimg.svg";
import homefb from "../Assests/home-fb.svg";
import homeyt from "../Assests/home-yt.svg";
import homelinkedin from "../Assests/home-linkedin.svg";
import homeig from "../Assests/home-ig.svg";
import Aboutus from "./Aboutus";
import Ourbrands from "./Ourbrands";
import Ourproducts from "./Ourproducts";
import Gallery from "./Gallery";
import Testmonial from "./Testmonial";
import Ourservices from "./Ourservices";
import Add from "./Add";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
    <Navbar/>
    <div className="Home-big-screen">   <div className="Home">
      
        <div className="Home-background-color">
          <div></div>
          <div className="Home-background-color-container"></div>
        </div>
        <div className="Home-container-1">
          <div className="Socialmedia-home">
          <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/"><img src={homefb} alt="fb-icon" className="home-socialmedia-icon" /></a>
          <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/">  <img
              src={homeyt}
              alt="youtube-icon"
              className="home-socialmedia-icon"
            /></a>
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/"><img
              src={homelinkedin}
              alt="linkedin-icon"
              className="home-socialmedia-icon"
            /></a>
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/"> <img
              src={homeig}
              alt="insta-icon"
              className="home-socialmedia-icon"
            /></a>
           
          </div>
          <p className="Home-heading">
            Discover the Perfect
            <br />
            <span>Tyres</span> for your Ride.
          </p>
          <p className="Home-text">
            We're here to provide the best tires for your journey ahead.
          </p>
          <div className="Home-btn-container">
            <a href="/Enquiry">
              {" "}
              <button className="Home-enquiry-btn Home-btn"> enquiry</button>
            </a>
            <a href="tel:+91 9843061699"><button className="Home-call-btn Home-btn">Call us now</button></a>
            
          </div>
        </div>
        <div className="Home-container-2">
          <img src={Homeimg} alt="Img" className="Home-img" />
        </div>
      </div></div>
   
      <Aboutus />
      <Ourbrands />
      <Ourproducts />
      <Gallery />
      <Testmonial />
     <Add /> 
      <Ourservices />
    </>
  );
}

export default Home;
