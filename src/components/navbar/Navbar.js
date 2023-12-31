import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CityContext } from "../context/CityContext";
import RequestCallBtn from "../request-call-button/RequestCallBtn";
import PopupBtn from "../virtual-office/PopupBtn";

function Navbar() {
  const { allCities } = useContext(CityContext);

  return (
    <>
      <div className="nav-main">
        <nav className="navbar navbar-expand-lg">
          <div className="container pl_0">
            <NavLink className="navbar-brand" to="/">
              <img
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688623571085.png"
                alt="specite-logo"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: "#444", padding: "0" }}
            >
              <AiOutlineMenuUnfold />
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown has-megamenu">
                  <p
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{ cursor: "pointer" }}
                  >
                    Coworking Space
                  </p>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="row megamenu-row">
                        {allCities?.map((elem, i) => {
                          return (
                            <div className="col-md-4 mega_menu_items" key={i}>
                              <img
                                className="city-icon"
                                src={elem?.img}
                                alt={elem?.name}
                              />
                              <NavLink
                                to={`/coworking-space/${elem.name.toLowerCase()}`}
                              >
                                {elem?.name}
                              </NavLink>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <PopupBtn location={"spacite.com"} />
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown mob_hide">
                  <RequestCallBtn location={"spacite.com"} />
                  {/* <a
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
                </ul> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
