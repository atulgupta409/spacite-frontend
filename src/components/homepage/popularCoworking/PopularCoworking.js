import React, { useContext } from "react";
import { CityContext } from "../../context/CityContext";
import HomeContact from "../home-contact/HomeContact";
import top_gurgaon from "../../media/coworking_img/top-gurgaon.png";
import location_icon from "../../media/icon/location.png";
import office_icon from "../../media/icon/private_office.png";
import Carousel from "react-elastic-carousel";

function PopularCoworking({ city }) {
  const { cities, breakPoints, Myarrow } = useContext(CityContext);

  return (
    <div>
      <div className="container">
        {cities?.map((elem, i) => {
          return (
            <div style={{ marginTop: "60px" }} key={i}>
              <h2>
                Popular Coworking in{" "}
                <span className="top_city_span">{elem.name}</span>
              </h2>
              <div className="top_space_row">
                <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                  <div className="property-card">
                    <div className="property_img">
                      <img
                        src={top_gurgaon}
                        alt=""
                        className="propery_card_img"
                      />
                    </div>
                    <div className="card-body space_card">
                      <p className="card-title">Accesswork Sohna Road</p>
                      <div className="location_box">
                        <img src={location_icon} alt="location-icon" />
                        <p>JMD Megapolis, Gurgaon</p>
                      </div>
                      {/* <p className="price_from">Starting from</p> */}
                      <div className="price_box">
                        <p className="price">
                          ₹9,000/*<span>month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="property-card">
                    <div className="property_img">
                      <img
                        src={top_gurgaon}
                        alt=""
                        className="propery_card_img"
                      />
                    </div>
                    <div className="card-body space_card">
                      <p className="card-title">Accesswork Sohna Road</p>
                      <div className="location_box">
                        <img src={location_icon} alt="location-icon" />
                        <p>JMD Megapolis, Gurgaon</p>
                      </div>
                      {/* <p className="price_from">Starting from</p> */}
                      <div className="price_box">
                        <p className="price">
                          ₹9,000/*<span>month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="property-card">
                    <div className="property_img">
                      <img
                        src={top_gurgaon}
                        alt=""
                        className="propery_card_img"
                      />
                    </div>
                    <div className="card-body space_card">
                      <p className="card-title">Accesswork Sohna Road</p>
                      <div className="location_box">
                        <img src={location_icon} alt="location-icon" />
                        <p>JMD Megapolis, Gurgaon</p>
                      </div>
                      {/* <p className="price_from">Starting from</p> */}
                      <div className="price_box">
                        <p className="price">
                          ₹9,000/*<span>month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="property-card">
                    <div className="property_img">
                      <img
                        src={top_gurgaon}
                        alt=""
                        className="propery_card_img"
                      />
                    </div>
                    <div className="card-body space_card">
                      <p className="card-title">Accesswork Sohna Road</p>
                      <div className="location_box">
                        <img src={location_icon} alt="location-icon" />
                        <p>JMD Megapolis, Gurgaon</p>
                      </div>
                      {/* <p className="price_from">Starting from</p> */}
                      <div className="price_box">
                        <p className="price">
                          ₹9,000/*<span>month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="property-card">
                    <div className="property_img">
                      <img
                        src={top_gurgaon}
                        alt=""
                        className="propery_card_img"
                      />
                    </div>
                    <div className="card-body space_card">
                      <p className="card-title">Accesswork Sohna Road</p>
                      <div className="location_box">
                        <img src={location_icon} alt="location-icon" />
                        <p>JMD Megapolis, Gurgaon</p>
                      </div>
                      {/* <p className="price_from">Starting from</p> */}
                      <div className="price_box">
                        <p className="price">
                          ₹9,000/*<span>month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
              {i === 2 && <HomeContact />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularCoworking;
