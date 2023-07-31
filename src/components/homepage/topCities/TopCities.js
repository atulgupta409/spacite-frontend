import React from "react";
import "./TopCities.css";
import { NavLink } from "react-router-dom";

function TopCities() {
  return (
    <div
      className="outer_top_city_box"
      style={{ background: "linear-gradient(90deg, #FEEFF9 0%, #EEFBFE 100%)" }}
    >
      <div className="container top_city_container">
        <h2>
          Top Coworking <span className="top_city_span">Cities</span>
        </h2>
        <div className="row top_city_box">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-6 city_img_box">
                <NavLink to="/coworking-space/pune">
                  <img
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115398091.png"
                    className="img-fluid"
                    alt="pune"
                    style={{ width: "90%" }}
                  />
                  <div className="top_city_overlay">
                    <p>Pune</p>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-6 city_img_box">
                <NavLink to="/coworking-space/noida">
                  <img
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690797453434.jpg"
                    alt="noida"
                    className="img-fluid"
                    style={{ width: "90%" }}
                  />
                  <div className="top_city_overlay">
                    <p>Noida</p>
                  </div>
                </NavLink>
              </div>

              <div className="col-lg-12 city_img_box">
                <NavLink to="/coworking-space/gurugram">
                  <img
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690797442284.jpg"
                    alt="gurgaon"
                    className="img-fluid"
                    style={{ width: "94.3%" }}
                  />
                  <div className="top_city_overlay" style={{ width: "94.3%" }}>
                    <p>Gurugram</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-4 city_img_box">
            <NavLink to="/coworking-space/mumbai">
              <img
                src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115449838.png"
                alt="mumbai"
                className="img-fluid"
                style={{ width: "94.3%" }}
              />
              <div className="top_city_overlay" style={{ width: "94.3%" }}>
                <p>mumbai</p>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-6 city_img_box">
                <NavLink to="/coworking-space/hyderabad">
                  <img
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690796061086.jpg"
                    alt="hyderabad"
                    className="img-fluid"
                    style={{ width: "90%" }}
                  />
                  <div className="top_city_overlay">
                    <p>Hyderabad</p>
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-6 city_img_box">
                <NavLink to="/coworking-space/ahmedabad">
                  <img
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115469731.png"
                    alt="ahmedabad"
                    className="img-fluid"
                    style={{ width: "90%" }}
                  />
                  <div className="top_city_overlay">
                    <p>Ahmedabad</p>
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-12 city_img_box">
                <NavLink to="/coworking-space/bangalore">
                  <img
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115481557.png"
                    alt="banglore"
                    className="img-fluid"
                    style={{ width: "94.3%" }}
                  />
                  <div className="top_city_overlay" style={{ width: "94.3%" }}>
                    <p>Bangalore</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCities;
