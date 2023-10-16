import React from "react";
import "./Contact.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../Assests/locationmarker.svg";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
function Contact() {
  const locations = [
    { position: [8.72479, 77.74452], name: "Thirunelveli" },
    { position: [8.95729, 77.29232], name: "Thenkasi" },
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

  return (
    <div className="Contact">
      <div className="Contact-text-container">
        <p className="Contact-heading">Contact Us</p>
        <br />
        <p className="Contact-text">
          We are delighted that you want to get in touch with us. We value your
          inquiries, feedback, and suggestions, and our team is here to assist
          you in every possible way.{" "}
        </p>
      </div>
      <div className="Contact-form-conatiner">
        <div className="Contact-formcontainer-1">
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
        <div className="Contact-formcontainer-2">
          <input
            type="text"
            placeholder="First-Name"
            className="Contact-text-name"
            required
          />
          <input
            type="text"
            placeholder="E-Mail"
            className="Contact-text-name"
            required
          />
          <input
            type="text"
            placeholder="Message"
            className="Contact-text-area"
            required
          />
          <button className="Contact-submit-button" type="Submit">
            SUBMIT
          </button>
          <div className="callus-direction-btn-container">
            <button className="Callus-btn">CALL US NOW!</button>
            <button className="Direction-btn">GET DIRECTION</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
