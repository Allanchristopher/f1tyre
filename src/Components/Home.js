import React, { useEffect, useRef } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Home() {
  const homeRef = useRef(null);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const itemsHeight = document.querySelector(".Total-conatainer-gsap").clientHeight
  //   let items = gsap.utils.toArray(".Total-conatainer-gsap");
  //   gsap.to(".Total-conatainer-gsap", {
  //     y: -itemsHeight + 400,
  //     // x: innerWidth,
  //     ease: "none",
  //     scrollTrigger: {
  //       // trigger: ".hero",
  //       start: "top",
  //       end: itemsHeight - 300,
  //       scrub: 2,
  //       // pin: true,
  //       // pinSpacing: false,
  //       //markers: true,

  //     }
  //   });
  //   // gsap.utils.toArray('.scroll-trigger').forEach((element) => {
  //   //   gsap.from(element, {
  //   //     opacity: 0,
  //   //     y: 100,
  //   //     scrollTrigger: {
  //   //       trigger: element,
  //   //       start: 'top 80%', // Adjust as needed
  //   //       end: 'bottom 20%', // Adjust as needed
  //   //       scrub: true,
  //   //     },
  //   //   });
  //   // });
  // }, []);
  return (
    <div div className="Total-conatainer-gsap">
      <Navbar />
      <div className="Home-big-screen" ref={homeRef}>
        <div className="Home-background-color">
          <div></div>
          <div className="Home-background-color-container"></div>
          <div className="Socialmedia-home" data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000">
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/">
              <img
                src={homefb}
                alt="fb-icon"
                className="home-socialmedia-icon"
              />
            </a>
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/">
              {" "}
              <img
                src={homeyt}
                alt="youtube-icon"
                className="home-socialmedia-icon"
              />
            </a>
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/">
              <img
                src={homelinkedin}
                alt="linkedin-icon"
                className="home-socialmedia-icon"
              />
            </a>
            <a href="https://www.facebook.com/people/Gracelin-Home-For-Ladies/100069548683405/">
              {" "}
              <img
                src={homeig}
                alt="insta-icon"
                className="home-socialmedia-icon"
              />
            </a>
          </div>
        </div>
        <div className="Home">
          <div className="Home-container-1" >
            <p className="Home-heading" data-aos="fade-right"  
            data-aos-duration="1000">
              Discover the Perfect
              <br />
              <span>Tyres</span> for your Ride.
            </p>
            <p className="Home-text" data-aos="fade-right" 
            data-aos-duration="1000">
              We're here to provide the best tires for your journey ahead.
            </p>
            <div className="Home-btn-container" data-aos="fade-up" data-aos-duration="1500">
              <a href="/Enquiry">
                {" "}
                <button className="Home-enquiry-btn Home-btn"> enquiry</button>
              </a>
              <a href="tel:+91 9843061699" >
                <button className="Home-call-btn Home-btn">Call us now</button>
              </a>
            </div>
          </div>
          <div className="Home-container-2" data-aos="fade-down" data-aos-duration="1500">
            <img src={Homeimg} alt="Img" className="Home-img" />
          </div>
        </div>
      </div>

      <Aboutus />
      <Ourbrands />
      <Ourproducts />
      <Gallery />
      <Testmonial />
      <Add />
      <Ourservices />
    </div>
  );
}

export default Home;
