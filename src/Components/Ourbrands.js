import React from 'react';
import './Ourbrands.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bridgestoneicon from '../Assests/Bridgestoneicon.svg';
import JKTyreimg from '../Assests/JKTyreimg.svg';
import Goodyearsimg from '../Assests/Goodyearsimg.svg';
import Michelinimg from '../Assests/Michelinimg.svg';

function Ourbrands() {
  const logos = [Bridgestoneicon, JKTyreimg,Goodyearsimg,Michelinimg];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
   autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
 
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           centerMode: true,
        }
      },]
  };

  return (
    <div className='Ourbrands-big-screen'><div className="Ourbrands">
    <p className='Ourbrands-heading'>OUR BRANDS</p>
      <Slider {...settings} className="Ourbrands-slider-carousel">
        {logos.map((logo, index) => (
          <div  className="Ourbrands-carousel-icon">
            <img key={index} src={logo} alt={`Logo ${index + 1}`} className="Ourbrands-carousel-logo" />
          </div>
        ))}
      </Slider>
    </div></div>
    
  );
}

export default Ourbrands;
