import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CityContext } from "../context/CityContext";
import ContactFormModal from "../modal-form/ContactFormModal";
import Modal from "react-modal";
import RequestCallBtn from "../request-call-button/RequestCallBtn";

function Navbar() {
  const { allCities, handleFetchCities } = useContext(CityContext);

  useEffect(() => {
    handleFetchCities();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="nav-main">
        <nav className="navbar navbar-expand-lg">
          <div className="container pl_0">
            <NavLink className="navbar-brand" to="/">
              <img
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688623571085.png"
                alt="specite-logo"
                width="150px"
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
                            <div className="col-md-4 mega_menu_items" key={i}>
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
                  <a className="nav-link" href="">
                    Virtual Office
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown mob_hide">
                  <RequestCallBtn />
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        className="centered-modal"
      >
        <ContactFormModal closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default Navbar;
