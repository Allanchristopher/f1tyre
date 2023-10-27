import React, { useState } from "react";
import logo from "../Assests/f1-logo.svg";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [activenavbar, setactivenavbar] = useState(false);
  const changebackground = () => {
    // console.log(window.screenY);
    if (window.scrollY >= 20) {
      setactivenavbar(true);
    } else {
      setactivenavbar(false);
    }
  };

  window.addEventListener("scroll", changebackground);
  return (
    <>
      <header className={activenavbar ? "header active-navbar" : "header"} >
        <Link
          activeClass="nav-a-active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <img className="navlogo" src={logo} alt="Logo" />
        </Link>
        <nav className={`nav-elements  ${showNavbar && "responsive_nav"}`}>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleShowNavbar}
            >
              HOME
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Aboutus"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={handleShowNavbar}
            >
              ABOUT
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Ourproducts"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={handleShowNavbar}
            >
              PRODUCTS
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Gallery"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={handleShowNavbar}
            >
              GALLERY
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Testmonial"
              spy={true}
              smooth={true}
              offset={-26}
              duration={500}
              onClick={handleShowNavbar}
            >
              TESTIMONIAL
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Ourservices"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={handleShowNavbar}
            >
              SERVICES
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={handleShowNavbar}
            >
              CONTACT
            </Link>
          </a>
          <button className="nav-res-close-btn" onClick={handleShowNavbar}>
            <FaTimes />
          </button>
        </nav>
        <a href="tel:+91 9843061699">
          <button className="call-button"> CALL US NOW!</button>
        </a>

        <button className="nav-res-btn" onClick={handleShowNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
