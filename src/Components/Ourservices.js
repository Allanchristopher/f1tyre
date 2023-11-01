import React,{useEffect,useState} from "react";
import "./Ourservices.css";
import Ourserviceimg from "../Assests/Ourserviceimg.svg";
function Ourservices() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="Ourservices-big-screen"><div className="Ourservices">
      <div className="Ourservices-container-1" data-aos="fade-up" data-aos-duration="1000">
        <p className="Ourservice-heading">Our Services</p>
        <p className="Ourservice-text">
          We offer a comprehensive range of top-notch solutions to meet all your
          tire and wheel alignment needs.
        </p>
      </div>
      <div className="Ourservices-container-2">
        <div className="Ourservice-1">
          <div className="Ourservice--img-container" data-aos="zoom-in-right" data-aos-duration="1000">
          {isSmallScreen && (
            <p className="Ourservice-1-text-heading">Wheel Alignment</p>
          )}
            <img src={Ourserviceimg} alt="Img" className="Ourserviceimg" />
          </div>
          <div className="Ourservice--text" data-aos="zoom-in-left" data-aos-duration="1000">
          {!isSmallScreen && (
            <p className="Ourservice-1-text-heading">Wheel Alignment</p>
          )}
            <p className="Ourservice-1-text-text">
              Maintaining your vehicle's peak performance and ensuring your
              safety on the road requires more than just routine oil changes and
              tire rotations. One often overlooked but crucial aspect of vehicle
              maintenance is wheel alignment. Proper wheel alignment ensures
              that your vehicle's wheels are positioned correctly, optimizing
              tire wear, handling, and overall driving experience.
            </p>
          </div>
        </div>
        <div className="Ourservice-1">
        {isSmallScreen && (
          <> 
          <div className="Ourservice--img-container" data-aos="zoom-in-left" data-aos-duration="1000">
          <p className="Ourservice-1-text-heading">Wheel Balancing</p>
          <img src={Ourserviceimg} alt="Img" className="Ourserviceimg" />
        </div>
         <div className="Ourservice--text" data-aos="zoom-in-right" data-aos-duration="1000">
            <p className="Ourservice-1-text-text">
              When it comes to maintaining your vehicle's performance and
              ensuring a safe driving experience, wheel balancing is a crucial
              aspect that should never be overlooked. As your vehicle's tires
              wear down over time, they become imbalanced, leading to
              vibrations, uneven tire wear, and potentially hazardous driving
              conditions.
            </p>
          </div>
         </>
        
        )}

        {!isSmallScreen && (
          <>   <div className="Ourservice--text" data-aos="zoom-in-right" data-aos-duration="1000">
            <p className="Ourservice-1-text-heading">Wheel Balancing</p>
            <p className="Ourservice-1-text-text">
              When it comes to maintaining your vehicle's performance and
              ensuring a safe driving experience, wheel balancing is a crucial
              aspect that should never be overlooked. As your vehicle's tires
              wear down over time, they become imbalanced, leading to
              vibrations, uneven tire wear, and potentially hazardous driving
              conditions.
            </p>
          </div>
          <div className="Ourservice--img-container" data-aos="zoom-in-left" data-aos-duration="1000">
            <img src={Ourserviceimg} alt="Img" className="Ourserviceimg" />
          </div></>
        )}


       
        </div>
        <div className="Ourservice-1">
          <div className="Ourservice--img-container" data-aos="zoom-in-right" data-aos-duration="1000">
          {isSmallScreen && (
            <p className="Ourservice-1-text-heading">Tyre Fitting</p>
          )}
            <img src={Ourserviceimg} alt="Img" className="Ourserviceimg" />
          </div>
          <div className="Ourservice--text" data-aos="zoom-in-left" data-aos-duration="1000">
          {!isSmallScreen && (
            <p className="Ourservice-1-text-heading">Tyre Fitting</p>
          )}
            <p className="Ourservice-1-text-text">
              Your vehicle's tires are the only point of contact between you and
              the road, making their proper installation and fitting essential
              for your safety and driving performance. Tire fitting service,
              carried out by experienced professionals, ensures that your tires
              are correctly mounted, balanced, and aligned, maximizing their
              lifespan and optimizing your driving experience.
            </p>
          </div>
        </div>
      </div>
    </div></div>
    
  );
}

export default Ourservices;
