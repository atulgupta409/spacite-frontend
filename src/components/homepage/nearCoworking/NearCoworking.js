import React, { useContext } from "react";
import top_gurgaon from "../../media/coworking_img/top-gurgaon.png";
import Carousel from "@itseasy21/react-elastic-carousel";
import "./NearCoworking.css";
import { CityContext } from "../../context/CityContext";
import { Link } from "react-router-dom";

function NearCoworking() {
  const { breakPoints, Myarrow } = useContext(CityContext);

  const location_icon =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624416819.png";

  return (
    <div className="mob_section">
      <div className="container p_60">
        <h2>
          Popular Coworking Near <span className="top_city_span">You</span>
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
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default NearCoworking;
