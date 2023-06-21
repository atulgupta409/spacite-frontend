import React, { useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Citypage.css";
import robot from "../media/home_contact_img.png";
import exploreArrow from "../media/icon/explore_arrow.png";
import top_gurgaon from "../media/coworking_img/top-gurgaon.png";
import location_icon from "../media/icon/location.png";
import office_icon from "../media/icon/private_office.png";
import Carousel, { consts } from "react-elastic-carousel";
import LeftArrow from "../media/icon/left_arrow.png";
import RightArrow from "../media/icon/right_arrow.png";
import HomeContact from "../homepage/home-contact/HomeContact";
import { CityContext } from "../context/CityContext";

function CityPage() {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 1];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);

  const { microlocations, handleFetchMicrolocations } = useContext(CityContext);

  useEffect(() => {
    handleFetchMicrolocations();
  }, [cityName]);

  // console.log(microlocations);

  function Myarrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? LeftArrow : RightArrow;
    return (
      <button onClick={onClick} disabled={isEdge} className="carousel_arrow">
        <img src={pointer} alt="arrow" />
      </button>
    );
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1.5 },
    // { width: 420, itemsToShow:  },
    { width: 500, itemsToShow: 2.2 },
    { width: 768, itemsToShow: 4 },
    { width: 992, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 4 },
  ];

  return (
    <div className="city_page_main" style={{ marginTop: "100px" }}>
      <nav aria-label="breadcrumb" style={{ paddingLeft: "20px" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link>Coworking Space</Link>
          </li>
          <li
            style={{
              color: "#d09cff",
              fontWeight: "500",
            }}
            className="breadcrumb-item active"
            aria-current="page"
          >
            {cityName}
          </li>
        </ol>
      </nav>
      <hr style={{ color: "rgba(68, 68, 68, 0.1)" }} />
      <div className="container">
        <div className="d-flex align-items-center city_heading">
          <img className="robot" src={robot} alt="robot" />
          <h2 style={{ marginLeft: "10px" }}>
            Coworking Space in <span className="top_city_span">{cityName}</span>
          </h2>
        </div>
        <div className="microlocation_tab">
          <ul>
            {microlocations?.map((elem, i) => {
              return (
                <div key={i} className="d-inline-block">
                  <NavLink
                    to={`/coworking-space/${cityName.toLowerCase()}/${elem.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  >
                    <li>{elem.name}</li>
                  </NavLink>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="city_page_title_box">
          <h3 className="city_page_title">
            Golf Course
            <span className="city_span"> Road</span>
          </h3>
          <div className="city_explore">
            <Link to="/microlocation">
              View All{" "}
              <img
                src={exploreArrow}
                style={{ marginBottom: "4px" }}
                alt="explore"
              />
            </Link>
          </div>
        </div>
        <div className="top_space_row">
          <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
            <div className="card">
              <img src={top_gurgaon} className="card-img-top" alt="..." />
              <div className="card-body space_card">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <img src={location_icon} alt="location-icon" />
                  <p>JMD Megapolis, Gurgaon</p>
                </div>
                <div className="location_box">
                  <img src={office_icon} alt="office-icon" />
                  <p>Private Office</p>
                </div>
                <p className="price_from">Starting from</p>
                <div className="price_box">
                  <p className="price">
                    ₹9,000/<span>month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={top_gurgaon} className="card-img-top" alt="..." />
              <div className="card-body space_card">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <img src={location_icon} alt="location-icon" />
                  <p>JMD Megapolis, Gurgaon</p>
                </div>
                <div className="location_box">
                  <img src={office_icon} alt="office-icon" />
                  <p>Private Office</p>
                </div>
                <p className="price_from">Starting from</p>
                <div className="price_box">
                  <p className="price">
                    ₹9,000/<span>month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={top_gurgaon} className="card-img-top" alt="..." />
              <div className="card-body space_card">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <img src={location_icon} alt="location-icon" />
                  <p>JMD Megapolis, Gurgaon</p>
                </div>
                <div className="location_box">
                  <img src={office_icon} alt="office-icon" />
                  <p>Private Office</p>
                </div>
                <p className="price_from">Starting from</p>
                <div className="price_box">
                  <p className="price">
                    ₹9,000/<span>month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={top_gurgaon} className="card-img-top" alt="..." />
              <div className="card-body space_card">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <img src={location_icon} alt="location-icon" />
                  <p>JMD Megapolis, Gurgaon</p>
                </div>
                <div className="location_box">
                  <img src={office_icon} alt="office-icon" />
                  <p>Private Office</p>
                </div>
                <p className="price_from">Starting from</p>
                <div className="price_box">
                  <p className="price">
                    ₹9,000/<span>month</span>
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <HomeContact />
      <div className="other_location_box">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <NavLink to="/microlocation">Golf Course Road</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityPage;
