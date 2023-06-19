import React from "react";
import "./TopCities.css";
import pune from "../../media/city-images/pune.png";
import gurgaon from "../../media/city-images/gurgaon.png";
import mumbai from "../../media/city-images/mumbai.png";
import main_banner from "../../media/top_city_banner.svg";

function TopCities() {
  return (
    <div
      className="outer_top_city_box"
      style={{ backgroundImage: `url(${main_banner})` }}
    >
      <div className="container top_city_container">
        <h2>
          Top Coworking <span className="top_city_span">Cities</span>
        </h2>
        <div className="row top_city_box">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-6 city_img_box">
                <img src={pune} alt="pune" />
                <div className="top_city_overlay"></div>
              </div>
              <div className="col-lg-6 city_img_box">
                <img src={pune} alt="pune" />
                <div className="top_city_overlay"></div>
              </div>
              <div className="col-lg-12 city_img_box">
                <img src={gurgaon} alt="gurgaon" />
                <div
                  className="top_city_overlay"
                  style={{ width: "94.3%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 city_img_box">
            <img src={mumbai} alt="mumbai" />
            <div className="top_city_overlay" style={{ width: "94.3%" }}></div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-6 city_img_box">
                <img src={pune} alt="pune" />
                <div className="top_city_overlay"></div>
              </div>
              <div className="col-lg-6 city_img_box">
                <img src={pune} alt="pune" />
                <div className="top_city_overlay"></div>
              </div>
              <div className="col-lg-12 city_img_box">
                <img src={gurgaon} alt="gurgaon" />
                <div
                  className="top_city_overlay"
                  style={{ width: "94.3%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCities;
