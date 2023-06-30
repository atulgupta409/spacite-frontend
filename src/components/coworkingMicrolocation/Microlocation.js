import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { CityContext } from "../context/CityContext";
import "./Microlocation.css";
import robot from "../media/robi.png";
import top_gurgaon from "../media/coworking_img/top-gurgaon.png";
import location_icon from "../media/icon/location.png";
import HomeContact from "../homepage/home-contact/HomeContact";
import { getWorkSpaceByMicrolocation } from "../service/Service";

function Microlocation() {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 2];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);
  let lastElem2 = pathArray[pathArray.length - 1];
  let microlocation = lastElem2.charAt(0).toUpperCase() + lastElem2.slice(1);
  let microName = microlocation.split("-").join(" ");

  const [workSpaces, setWorkSpaces] = useState([]);

  const { microlocations, handleFetchMicrolocations } = useContext(CityContext);
  const handleFetchWorkSpaces = async () => {
    await getWorkSpaceByMicrolocation(setWorkSpaces, microName);
  };
  console.log(microName);

  useEffect(() => {
    handleFetchMicrolocations();
    handleFetchWorkSpaces();
  }, [cityName]);
  console.log(workSpaces);

  // products.reduce((prev, current) => {
  //   return (current.price < prev.price) ? current : prev;
  // })

  return (
    <div style={{ marginTop: "100px" }}>
      <nav aria-label="breadcrumb" style={{ paddingLeft: "20px" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="breadcrumb-item">
            <Link to="/">Coworking Space</Link>
          </li> */}
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={`/coworking-space/${cityName.toLowerCase()}`}>
              {cityName}
            </Link>
          </li>
          <li
            style={{
              color: "#d09cff",
              fontWeight: "500",
            }}
            className="breadcrumb-item"
          >
            {microName}
          </li>
        </ol>
      </nav>
      <hr style={{ color: "rgba(68, 68, 68, 0.1)" }} />
      <div className="container">
        <div className="d-flex align-items-center city_heading">
          <img className="robot" src={robot} alt="robot" />
          <h1 className="page_main_title" style={{ marginLeft: "10px" }}>
            Coworking Space in{" "}
            <span style={{ color: "#d09cff" }}>{microName}</span>
          </h1>
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
        <div className="top_space_row">
          {workSpaces?.map((workspace, i) => {
            return (
              <Link to={`/coworking/${workspace.slug}`} className="space_link">
                <div className="property-card" key={i}>
                  <div className="property_img">
                    <img
                      src={workspace.images[0].image}
                      alt=""
                      className="propery_card_img"
                    />
                  </div>
                  <div className="card-body space_card">
                    <p className="card-title">{workspace.name}</p>
                    <div className="location_box">
                      <img src={location_icon} alt="location-icon" />
                      <p>{workspace.location.address}</p>
                    </div>
                    <p className="price_from">Starting from</p>
                    <div className="price_box">
                      <p className="price">
                        ₹
                        {
                          workspace.plans.reduce((prev, current) => {
                            return current.price < prev.price ? current : prev;
                          }).price
                        }
                        /*<span>month</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <HomeContact />
      <div className="other_location_box">
        <h2>
          Other <span style={{ color: "#d09cff" }}>Locations</span>
        </h2>
        <div className="container">
          <div className="row">
            {microlocations?.map((elem, i) => {
              return (
                <div className="col-6 col-md-3" key={i}>
                  <NavLink
                    to={`/coworking-space/${cityName.toLowerCase()}/${elem.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  >
                    {elem.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Microlocation;
