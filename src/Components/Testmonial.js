import React from "react";
import "./Testmonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testmonialreview1 from "../Assests/testmonial-review-1.jpg";
import Testmonialstar1 from "../Assests/Testmonial-star-1.jpg";
function Testmonial() {
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
    <div className="Testmonial">
      <div className="Ourproducts-heading-container">
        <p className="Ourproducts-heading">Testimonial</p>
        <p className="Ourproducts-heading-text">
          Our valued customers share their experiences and thoughts about the
          exceptional services and products they have received at F1 Tyre City.
        </p>
      </div>
      <Slider {...settings} className="Testmonial-slider-carousel">
      <div className="Testmonial-carousel-icon ">
    <div className="review-container">
        <div className="image-conateiner">
          <img src={testmonialreview1} alt="img" className="coustomer-img" />
          <img src={Testmonialstar1} alt="star" className="Star" />
        </div>
        <p className="Coustomer-name">Floyd Miles</p>
        <p className="review-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div> 
    </div>
    <div className="Testmonial-carousel-icon ">
    <div className="review-container">
        <div className="image-conateiner">
          <img src={testmonialreview1} alt="img" className="coustomer-img" />
          <img src={Testmonialstar1} alt="star" className="Star" />
        </div>
        <p className="Coustomer-name">Ronald Richards</p>
        <p className="review-text">
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div> 
    </div>
    
    <div className="Testmonial-carousel-icon ">
    <div className="review-container">
        <div className="image-conateiner">
          <img src={testmonialreview1} alt="img" className="coustomer-img" />
          <img src={Testmonialstar1} alt="star" className="Star" />
        </div>
        <p className="Coustomer-name">Savannah Nguyen</p>
        <p className="review-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div> 
    </div>
      <div className="Testmonial-carousel-icon ">
    <div className="review-container">
        <div className="image-conateiner">
          <img src={testmonialreview1} alt="img" className="coustomer-img" />
          <img src={Testmonialstar1} alt="star" className="Star" />
        </div>
        <p className="Coustomer-name">Floyd Miles</p>
        <p className="review-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div> 
    </div>
    <div className="Testmonial-carousel-icon ">
    <div className="review-container">
        <div className="image-conateiner">
          <img src={testmonialreview1} alt="img" className="coustomer-img" />
          <img src={Testmonialstar1} alt="star" className="Star" />
        </div>
        <p className="Coustomer-name">Ronald Richards</p>
        <p className="review-text">
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div> 
    </div>
    
    <div className="Testmonial-carousel-icon ">
    <div className="review-container">
        <div className="image-conateiner">
          <img src={testmonialreview1} alt="img" className="coustomer-img" />
          <img src={Testmonialstar1} alt="star" className="Star" />
        </div>
        <p className="Coustomer-name">Savannah Nguyen</p>
        <p className="review-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div> 
    </div>
    
      </Slider>
    </div>
  );
}

export default Testmonial;
