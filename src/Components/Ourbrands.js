import React from 'react';
import './Ourbrands.css';
import Slider from 'react-slick';
import Bridgestoneicon from '../Assests/Bridgestoneicon.svg';
import JKTyreimg from '../Assests/JKTyreimg.svg';
import Goodyearsimg from '../Assests/Goodyearsimg.svg';
import Michelinimg from '../Assests/Michelinimg.svg';

function Ourbrands() {
  const logos = [Bridgestoneicon, JKTyreimg, Goodyearsimg, Michelinimg];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };

  return (
    <div className="Ourbrands">
      <Slider {...settings} className="Ourbrands-slider-carousel">
        {logos.map((logo, index) => (
          <div key={index} className="Ourbrands-carousel-icon">
            <img src={logo} alt={`Logo ${index + 1}`} className="Ourbrands-carousel-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Ourbrands;
