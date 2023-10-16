import React,{useEffect,useState} from "react";
import "./Aboutus.css";
import Aboutusimg from "../Assests/Aboutusimg.svg"
function Aboutus() {
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
    <div className="Aboutus">
      <div className="Aboutus-container-1">
      {isSmallScreen && (
        <p className="Aboutus-heading">ABOUT US</p>
      )}
        <img src={Aboutusimg} alt="Img" className="Aboutus-img"/>
      </div>
      <div className="Aboutus-container-2">
      {!isSmallScreen && (
        <p className="Aboutus-heading">ABOUT US</p>
      )}
        <p className="Aboutus-text">
          At F1 Tyre city, we are passionate about providing top-notch wheel
          alignment and tire services to ensure your vehicle's safety,
          performance, and longevity. With years of industry experience and a
          team of skilled technicians, we are committed to delivering
          unparalleled service and customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
