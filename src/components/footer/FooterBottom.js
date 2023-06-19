import React from "react";
import "./Footer.css";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";

function FooterBottom() {
  let coworkingCities = [
    { id: 1, name: "Gurugram" },
    { id: 2, name: "Noida" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Bangalore" },
    { id: 5, name: "Pune" },
    { id: 6, name: "Hyderabad" },
    { id: 7, name: "Ahmedabad" },
  ];

  return (
    <div className="footer_bottom_main">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer_logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="footer_tagline">
              Coworking India is an online platform for discovering, booking,
              and accessing coworking spaces around the world.
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="footer_h4">Coworking Space</h4>
            <ul style={{ paddingLeft: "0" }}>
              {coworkingCities.map((city, i) => {
                return (
                  <li className="footer_list_item" key={i}>
                    <Link to={`/coworking-spaces/${city.name.toLowerCase()}`}>
                      Coworking space in {city.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="footer_h4">Virtual Office</h4>
            <ul style={{ paddingLeft: "0" }}>
              {coworkingCities.map((city, i) => {
                return (
                  <li className="footer_list_item" key={i}>
                    <Link to={`/coworking-spaces/${city.name.toLowerCase()}`}>
                      Virtual office in {city.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="footer_h4">Knowledge Center</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
