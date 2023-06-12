import React from "react";
import logo from "../media/logo.png";
import "./Navbar.css";
import gurugram from "../media/city-icon/Gurugram.png";
import noida from "../media/city-icon/noida.png";
import pune from "../media/city-icon/Pune.png";
import hyderabad from "../media/city-icon/Hyderabad.png";
import ahemdabad from "../media/city-icon/Ahemdabad.png";
import mumbai from "../media/city-icon/Mumbai.png";
import bangalore from "../media/city-icon/bangalore 1.png";

function Navbar() {
  return (
    <div className="nav-main">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="specite-logo" width="150px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown has-megamenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Coworking Space
                  </a>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="row megamenu-row">
                        <div className="col-md-4">
                          <img
                            className="city-icon"
                            src={gurugram}
                            alt="gurugram"
                          />
                          <a href="#"> Gurugram</a>
                        </div>
                        <div className="col-md-4">
                          <img className="city-icon" src={noida} alt="noida" />
                          <a href="#">Noida</a>
                        </div>
                        <div className="col-md-4">
                          <img
                            className="city-icon"
                            src={mumbai}
                            alt="mumbai"
                          />
                          <a href="#">Mumbai</a>
                        </div>
                      </div>
                      <div className="row megamenu-row">
                        <div className="col-md-4">
                          <img
                            className="city-icon"
                            src={bangalore}
                            alt="bangalore"
                          />
                          <a href="#">Bangalore</a>
                        </div>
                        <div className="col-md-4">
                          <img className="city-icon" src={pune} alt="pune" />
                          <a href="#">Pune</a>
                        </div>
                        <div className="col-md-4">
                          <img
                            className="city-icon"
                            src={hyderabad}
                            alt="hyderabad"
                          />
                          <a href="#">Hyderabad</a>
                        </div>
                      </div>
                      <div className="row megamenu-row">
                        <div className="col-md-4">
                          <img
                            className="city-icon"
                            src={ahemdabad}
                            alt="ahemdabad"
                          />
                          <a href="#">Ahemdabad</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Virtual Office
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link  dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Knowledge
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="#">
                        Enterprise Solutions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        List Your Space
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Franchise
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
