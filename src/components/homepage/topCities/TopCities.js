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
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115398091.png"
                  className="img-fluid"
                  alt="pune"
                />
                <div className="top_city_overlay">
                  <p>Pune</p>
                </div>
              </div>
              <div className="col-lg-6 city_img_box">
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115417240.png"
                  alt="noida"
                  className="img-fluid"
                />
                <div className="top_city_overlay">
                  <p>Noida</p>
                </div>
              </div>
              <div className="col-lg-12 city_img_box">
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115439780.png"
                  alt="gurgaon"
                  className="img-fluid"
                />
                <div className="top_city_overlay" style={{ width: "94.3%" }}>
                  <p>Gurugram</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 city_img_box">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115449838.png"
              alt="mumbai"
              className="img-fluid"
            />
            <div className="top_city_overlay" style={{ width: "94.3%" }}>
              <p>Mumbai</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-6 city_img_box">
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115459637.png"
                  alt="hyderabad"
                  className="img-fluid"
                />
                <div className="top_city_overlay">
                  <p>Hyderabad</p>
                </div>
              </div>
              <div className="col-lg-6 city_img_box">
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115469731.png"
                  alt="ahmedabad"
                  className="img-fluid"
                />
                <div className="top_city_overlay">
                  <p>Ahmedabad</p>
                </div>
              </div>
              <div className="col-lg-12 city_img_box">
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115481557.png"
                  alt="banglore"
                  className="img-fluid"
                />
                <div className="top_city_overlay" style={{ width: "94.3%" }}>
                  <p>Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCities;
