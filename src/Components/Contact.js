import React,{useRef} from "react";
import "./Contact.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../Assests/locationmarker.svg";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import emailjs from "@emailjs/browser";
import { message } from "antd";
function Contact() {
  const [messageApi, contextHolder] = message.useMessage();
  const locations = [
    { position: [11.426468762635889, 77.67590653864181], name: "Kalingarayanpalayam" },
    { position: [11.431442611089402, 77.67574038773135], name: "Kalingarayanpalayam" },
  ];
  const bounds = L.latLngBounds(locations.map((location) => location.position));
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hs7tb69",
        "template_52nypfa",
        form.current,
        "MxDFTViY7UvoGCmS3"
      )
      .then(
        (result) => {
          console.log(result.text);
          messageApi.open({
            type: "success",
            content: "Message send",
            style: {
              marginTop: "20vh",
            },
          });
        },
        (error) => {
          console.log(error.text);
          messageApi.open({
            type: "error",
            content: "Message not send please sent again",
            style: {
              marginTop: "20vh",
            },
          });
        }
      );
  };
  return (
    <div className="Contact-big-screen">  {contextHolder} <div className="Contact">
      <div className="Contact-text-container" data-aos="fade-up" data-aos-duration="1000">
        <p className="Contact-heading">Contact Us</p>
        <br />
        <p className="Contact-text">
          We are delighted that you want to get in touch with us. We value your
          inquiries, feedback, and suggestions, and our team is here to assist
          you in every possible way.
        </p>
      </div>
      <div className="Contact-form-conatiner">
        <div className="Contact-formcontainer-1" data-aos="fade-right" data-aos-duration="1000">
          <div className="Contact-formcontainer-1-1">
            <p className="Contact-information">Contact Information</p>
            <p className="Contact-information-text">
              We're here to assist you with any questions, appointments, or
              inquiries you may have
            </p>
          </div>
          <div className="Contact-formcontainer-1-2">
          
          <MapContainer bounds={bounds} className="leaf-let-map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; OpenStreetMap contributors"
          />
          {locations.map((location, index) => (
            <Marker key={index} position={location.position} icon={customIcon}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
          
          </div>
        </div>
        <div className="Contact-formcontainer-2" data-aos="fade-left" data-aos-duration="1000"
        // ref={form}
        //   onSubmit={sendEmail}
        >
        <form className="Contact-formcontainer-2"><input
        type="text"
        placeholder="First-Name"
        className="Contact-text-name"
        required
      />
      <input
        type="email"
        placeholder="E-Mail"
        className="Contact-text-name"
        required
      />
      <textarea
        type="text"
        placeholder="Message"
        className="Contact-text-area"
        required
      />
      <button className="Contact-submit-button Home-btn" type="Submit">
        SUBMIT
      </button></form>
          
          
          <div className="callus-direction-btn-container">
            <a className="Callus-btn Home-btn" href="tel:+91 9843061699">CALL US NOW!</a>
            <a className="Direction-btn Home-btn" href="https://maps.app.goo.gl/mVhHH8gqBNouFTpN7">GET DIRECTION</a>
          </div>
        </div>
      </div>
    </div></div>
   
  );
}

export default Contact;
