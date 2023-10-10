import React from "react";
import "./Ourproducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ourproductimg1 from "../Assests/Ourproductimg-1.jpg";
function Ourproducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };
  return (
    <div className="Ourproducts">
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
          <p className="product-price">₹ 6000</p>
          <button className="product-Enquiry-btn">Enquiry</button>
        </div>
      </div>
    </div>
    <div className="product-carousel-icon">
    <div className="product-card">
        <img src={Ourproductimg1} alt="productimage" className="poductimage"/>
        <p className="product-name">Good Year Tyre - 165/65R14</p>
        <div className="porduct-price-container">
          <p className="product-price">₹ 6000</p>
          <button className="product-Enquiry-btn">Enquiry</button>
        </div>
      </div>
    </div>
    <div className="product-carousel-icon">
    <div className="product-card">
        <img src={Ourproductimg1} alt="productimage" className="poductimage"/>
        <p className="product-name">Good Year Tyre - 165/65R14</p>
        <div className="porduct-price-container">
          <p className="product-price">₹ 6000</p>
          <button className="product-Enquiry-btn">Enquiry</button>
        </div>
      </div>
    </div>
    <div className="product-carousel-icon">
    <div className="product-card">
        <img src={Ourproductimg1} alt="productimage" className="poductimage"/>
        <p className="product-name">Good Year Tyre - 165/65R14</p>
        <div className="porduct-price-container">
          <p className="product-price">₹ 6000</p>
          <button className="product-Enquiry-btn">Enquiry</button>
        </div>
      </div>
    </div>
    <div className="product-carousel-icon">
    <div className="product-card">
        <img src={Ourproductimg1} alt="productimage" className="poductimage"/>
        <p className="product-name">Good Year Tyre - 165/65R14</p>
        <div className="porduct-price-container">
          <p className="product-price">₹ 6000</p>
          <button className="product-Enquiry-btn">Enquiry</button>
        </div>
      </div>
    </div>
        </Slider>

    </div>
  );
}

export default Ourproducts;
