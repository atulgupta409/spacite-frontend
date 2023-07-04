import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../media/logo.png";
import "./Navbar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CityContext } from "../context/CityContext";

function Navbar() {
  const { allCities, handleFetchCities } = useContext(CityContext);

  useEffect(() => {
    handleFetchCities();
  }, []);

  return (
    <div className="nav-main">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="specite-logo" width="150px" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <AiOutlineMenuUnfold />
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
                        {allCities?.map((elem, i) => {
                          return (
                            <div
                              className="col-md-4"
                              style={{ paddingBottom: "20px" }}
                              key={i}
                            >
                              <img
                                className="city-icon"
                                src={elem.cityImg}
                                alt={elem.city.name}
                              />
                              <NavLink
                                to={`/coworking-space/${elem.city.name.toLowerCase()}`}
                              >
                                {elem.city.name}
                              </NavLink>
                            </div>
                          );
                        })}
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
                    {/* <li>
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
                    </li> */}
                    <li>
                      <NavLink className="dropdown-item" to="/about">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/contact">
                        Contact Us
                      </NavLink>
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
