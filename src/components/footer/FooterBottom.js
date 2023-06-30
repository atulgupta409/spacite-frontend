import React, { useEffect, useContext } from "react";
import "./Footer.css";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";
import { CityContext } from "../context/CityContext";

function FooterBottom() {
  const { cities, handleFetchCities } = useContext(CityContext);

  useEffect(() => {
    handleFetchCities();
  }, []);

  let curYear = new Date().getFullYear();

  return (
    <div className="footer_bottom_main">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="footer_logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="footer_tagline">
              Coworking India is an online platform for discovering, booking,
              and accessing coworking spaces around the world.
            </p>
          </div>
          <div className="col-md-3 col-6">
            <h4 className="footer_h4">Coworking Space</h4>
            <ul style={{ paddingLeft: "0" }}>
              {cities?.map((city, i) => {
                return (
                  <li className="footer_list_item" key={i}>
                    <Link to={`/coworking-space/${city.name.toLowerCase()}`}>
                      Coworking space in {city.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to="/about" className="desk_hide mb-0 contact_mob">
              About Us
            </Link>
            <div className="footer_phone mob_hide">
              <p style={{ marginBottom: "0" }}>Phone :</p>
              <a href="tel: 9999108078">+91 9999108078</a>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <h4 className="footer_h4">Virtual Office</h4>
            <ul style={{ paddingLeft: "0" }}>
              {cities?.map((city, i) => {
                return (
                  <li className="footer_list_item" key={i}>
                    <Link to={`/virtual-office/${city.name.toLowerCase()}`}>
                      Virtual office in {city.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to="/contact" className="desk_hide mb-0 contact_mob">
              Contact Us
            </Link>
          </div>
          <div className="col-md-3 mob_hide">
            <h4 className="footer_h4">Knowledge Center</h4>
            <ul style={{ paddingLeft: "0" }}>
              <li className="footer_list_item">
                <Link>Coworking Space</Link>
              </li>
              <li className="footer_list_item">
                <Link>Virtual Office</Link>
              </li>
              <li className="footer_list_item">
                <Link to="/about">About Us</Link>
              </li>
              <li className="footer_list_item">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{ color: "rgba(33, 37, 41, 0.5)" }} />
        <div className="footer_copyright">
          <p>
            COPYRIGHT &#169; {curYear} SPACITE ALL RIGHTS RESERVED | SPACITE IS
            A PART OF COFYND SPACE NETWORK
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
