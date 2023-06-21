import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../media/logo.png";
import "./Navbar.css";
import gurugram from "../media/city-icon/Gurugram.png";
import noida from "../media/city-icon/noida.png";
import pune from "../media/city-icon/Pune.png";
import hyderabad from "../media/city-icon/Hyderabad.png";
import ahemdabad from "../media/city-icon/Ahemdabad.png";
import mumbai from "../media/city-icon/Mumbai.png";
import bangalore from "../media/city-icon/bangalore 1.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { getCity } from "./Service";

function Navbar() {
  let coworkingCities = [
    { id: 1, name: "Gurugram", img: gurugram },
    { id: 2, name: "Noida", img: noida },
    { id: 3, name: "Mumbai", img: mumbai },
    { id: 4, name: "Bangalore", img: bangalore },
    { id: 5, name: "Pune", img: pune },
    { id: 6, name: "Hyderabad", img: hyderabad },
    { id: 7, name: "Ahmedabad", img: ahemdabad },
  ];
  const [allCity, setAllCity] = useState([]);
  const [cities, setCities] = useState([]);
  const handleFetchCity = async () => {
    await getCity(setAllCity);
  };

  useEffect(() => {
    const combinedArray = allCity.map((city, index) => ({
      city,
      cityImg: coworkingCities[index].img,
    }));
    setCities([...combinedArray]);
  }, [allCity]);
  useEffect(() => {
    handleFetchCity();
  }, []);
  console.log(cities);
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
                        {coworkingCities.map((elem, i) => {
                          return (
                            <div
                              className="col-md-4"
                              style={{ paddingBottom: "20px" }}
                            >
                              <img
                                className="city-icon"
                                src={elem.img}
                                alt={elem.name}
                              />
                              <NavLink
                                to={`/coworking-spaces/${elem.name.toLowerCase()}`}
                              >
                                {elem.name}
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
