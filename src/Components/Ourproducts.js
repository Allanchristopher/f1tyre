import React from "react";
import "./Ourproducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ourproductimg1 from "../Assests/Ourproductimg-1.jpg";
import 'font-awesome/css/font-awesome.min.css';
function Ourproducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    prevArrow: (
      <button className="custom-prev-button">
        <i className="fa fa-chevron-left"></i>
      </button>
    ),
    nextArrow: (
      <button className="custom-next-button">
        <i className="fa fa-chevron-right"></i>
      </button>
    ), responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },{
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div className="Ourproducts-big-screen"> <div className="Ourproducts">
      <div className="Ourproducts-heading-container">
        <p className="Ourproducts-heading">Our Products</p>
        <p className="Ourproducts-heading-text">
          We take pride in offering a wide range of high-quality products to
          meet all your tire and wheel alignment needs.
        </p>
      </div>
      <Slider {...settings} className="product-slider-carousel">
    <div className="product-carousel-icon">
    <div className="product-card">
        <img src={Ourproductimg1} alt="productimage" className="poductimage"/>
        <p className="product-name">Good Year Tyre - 165/65R14</p>
        <div className="porduct-price-container">
          
          <a href="/Enquiry">  <button className="product-Enquiry-btn">Enquiry</button></a>
        
        </div>
      </div>
    </div>
    <div className="product-carousel-icon">
    <div className="product-card">
        <img src={Ourproductimg1} alt="productimage" className="poductimage"/>
        <p className="product-name">Good Year Tyre - 165/65R14</p>
        <div className="porduct-price-container">
          
          <a href="/Enquiry"> <button className="product-Enquiry-btn">Enquiry</button></a>
         
        </div>
      </div>
    </div>
    <div className="product-carousel-icon">
    <div className="product-card">
        <img src={Ourproductimg1} alt="productimage" className="poductimage"/>
        <p className="product-name">Good Year Tyre - 165/65R14</p>
        <div className="porduct-price-container">
          
          <a href="/Enquiry"><button className="product-Enquiry-btn">Enquiry</button></a>
          
        </div>
      </div>
    </div>
    <div className="product-carousel-icon">
    <div className="product-card">
        <img src={Ourproductimg1} alt="productimage" className="poductimage"/>
        <p className="product-name">Good Year Tyre - 165/65R14</p>
        <div className="porduct-price-container">
          
          <a href="/Enquiry"><button className="product-Enquiry-btn">Enquiry</button></a>
          
        </div>
      </div>
    </div>
    <div className="product-carousel-icon">
    <div className="product-card">
        <img src={Ourproductimg1} alt="productimage" className="poductimage"/>
        <p className="product-name">Good Year Tyre - 165/65R14</p>
        <div className="porduct-price-container">
          
          <a href="/Enquiry"> <button className="product-Enquiry-btn">Enquiry</button></a>
         
        </div>
      </div>
    </div>
        </Slider>

    </div></div>
   
  );
}

export default Ourproducts;
