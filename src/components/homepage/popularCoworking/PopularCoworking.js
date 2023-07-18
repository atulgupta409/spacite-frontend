import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../../context/CityContext";
import HomeContact from "../home-contact/HomeContact";
import top_gurgaon from "../../media/coworking_img/top-gurgaon.png";
import Carousel from "@itseasy21/react-elastic-carousel";
import { Link } from "react-router-dom";

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
              <div className="top_space_row near_coworking">
                <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                  <Link>
                    <div className="property_card">
                      <div className="img_box">
                        <img
                          src={top_gurgaon}
                          alt="workImage"
                          className="img-fluid"
                        />
                      </div>
                      <div className="card_body">
                        <p className="card-title">Accesswork Sohna Road</p>
                        <div className="location_box">
                          <p>JMD Megapolis, Gurugram</p>
                        </div>
                        <p className="price_from">Starting from</p>
                        <div className="price_box">
                          <p className="price">
                            ₹ 9000 /*<span>Month</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="property_card">
                    <div className="img_box">
                      <img
                        src={top_gurgaon}
                        alt="workImage"
                        className="img-fluid"
                      />
                    </div>
                    <div className="card_body">
                      <p className="card-title">Accesswork Sohna Road</p>
                      <div className="location_box">
                        <p>JMD Megapolis, Gurugram</p>
                      </div>
                      <p className="price_from">Starting from</p>
                      <div className="price_box">
                        <p className="price">
                          ₹ 9000 /*<span>Month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="property_card">
                    <div className="img_box">
                      <img
                        src={top_gurgaon}
                        alt="workImage"
                        className="img-fluid"
                      />
                    </div>
                    <div className="card_body">
                      <p className="card-title">Accesswork Sohna Road</p>
                      <div className="location_box">
                        <p>JMD Megapolis, Gurugram</p>
                      </div>
                      <p className="price_from">Starting from</p>
                      <div className="price_box">
                        <p className="price">
                          ₹ 9000 /*<span>Month</span>
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
