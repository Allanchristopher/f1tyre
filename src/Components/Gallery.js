import React from "react";
import "./Gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Galleryimg1 from "../Assests/Galleryimg1.jpg";
import Galleryimg2 from "../Assests/Galleryimg1.jpg";
function Gallery() {
  const images = [Galleryimg1, Galleryimg2,Galleryimg2];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
     {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div className="Gallery">
      <div className="Gallery-heading-container">
        <p className="Gallery-heading">Gallery</p>
        <p className="Gallery-heading-text">
          Take a visual journey through the world of exceptional tires, stunning
          custom wheels, precise wheel alignment, and satisfied customers.
        </p>
      </div>
      <Slider {...settings} className="Gallery-slider-carousel">
   
  
    {images.map((image, index) => (
          <div className="Gallery-carousel-icon">
            <img
              key={index}
              src={image}
              alt={`image ${index + 1}`}
              className="Gallery-carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gallery;
  