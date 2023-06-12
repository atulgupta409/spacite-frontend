import React from "react";
import top_gurgaon from "../../media/coworking_img/top-gurgaon.png";
import location_icon from "../../media/icon/location.png";
import office_icon from "../../media/icon/private_office.png";
import explore_icon from "../../media/icon/explore_arrow.png";
import Carousel, { consts } from "react-elastic-carousel";
import LeftArrow from "../../media/icon/left_arrow.png";
import RightArrow from "../../media/icon/right_arrow.png";
import gurgaonBanner from "../../media/page_banner/section-banner1.png";

function Toppune() {
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
    { width: 768, itemsToShow: 3 },
    { width: 992, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 3 },
  ];

  return (
    <div>
      <div className="container main_banner2" style={{ height: "auto" }}>
        <h2>
          Top Coworking Spaces for rent in{" "}
          <span className="top_gurgaon_span">Pune</span>
        </h2>

        <div className="top_space_row">
          <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
            <div class="card">
              <img src={top_gurgaon} className="card-img-top" alt="..." />
              <div class="css-1bechtd-curveStyle">
                <svg
                  className="css-weowpq-curveSvgStyle"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 320 20.45"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <path d="M0 18S54.1-9.38 137.05 9.31 307 13 320 0v20.45H.08L0 18z"></path>
                </svg>
              </div>
              <div className="card-body">
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
                  <div className="explore_box">
                    <p>Explore</p>
                    <img width="10px" src={explore_icon} alt="explore" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img src={top_gurgaon} className="card-img-top" alt="..." />
              <div class="css-1bechtd-curveStyle">
                <svg
                  className="css-weowpq-curveSvgStyle"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 320 20.45"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <path d="M0 18S54.1-9.38 137.05 9.31 307 13 320 0v20.45H.08L0 18z"></path>
                </svg>
              </div>
              <div className="card-body">
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
                  <div className="explore_box">
                    <p>Explore</p>
                    <img width="10px" src={explore_icon} alt="explore" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img src={top_gurgaon} className="card-img-top" alt="..." />
              <div class="css-1bechtd-curveStyle">
                <svg
                  className="css-weowpq-curveSvgStyle"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 320 20.45"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <path d="M0 18S54.1-9.38 137.05 9.31 307 13 320 0v20.45H.08L0 18z"></path>
                </svg>
              </div>
              <div className="card-body">
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
                  <div className="explore_box">
                    <p>Explore</p>
                    <img width="10px" src={explore_icon} alt="explore" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img src={top_gurgaon} className="card-img-top" alt="..." />
              <div class="css-1bechtd-curveStyle">
                <svg
                  className="css-weowpq-curveSvgStyle"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 320 20.45"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <path d="M0 18S54.1-9.38 137.05 9.31 307 13 320 0v20.45H.08L0 18z"></path>
                </svg>
              </div>
              <div className="card-body">
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
                  <div className="explore_box">
                    <p>Explore</p>
                    <img width="10px" src={explore_icon} alt="explore" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div
          className="banner_section"
          style={{ backgroundImage: `url(${gurgaonBanner})` }}
        >
          <h2 style={{ textAlign: "left" }}>
            Get the Perfect Coworking{" "}
            <span style={{ color: "#d09cff" }}>in Pune</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Toppune;
