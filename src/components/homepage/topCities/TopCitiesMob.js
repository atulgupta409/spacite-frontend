import React, { useContext } from "react";
import top_gurgaon from "../../media/coworking_img/top-gurgaon.png";
import Carousel from "react-elastic-carousel";
import { CityContext } from "../../context/CityContext";

function TopCitiesMob() {
  const { breakPoints, Myarrow } = useContext(CityContext);

  return (
    <div>
      <div className="container">
        <h2>
          Top Coworking <span className="top_city_span">Cities</span>
        </h2>
        <div className="top_space_row">
          <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title-cities">Mumbai</p>
                <div className="price_box_city">
                  <p>
                    ₹9,000/<span style={{ color: "#d09cff" }}>Onwards</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title-cities">Mumbai</p>
                <div className="price_box_city">
                  <p>
                    ₹9,000/<span style={{ color: "#d09cff" }}>Onwards</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title-cities">Mumbai</p>
                <div className="price_box_city">
                  <p>
                    ₹9,000/<span style={{ color: "#d09cff" }}>Onwards</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title-cities">Mumbai</p>
                <div className="price_box_city">
                  <p>
                    ₹9,000/<span style={{ color: "#d09cff" }}>Onwards</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title-cities">Mumbai</p>
                <div className="price_box_city">
                  <p>
                    ₹9,000/<span style={{ color: "#d09cff" }}>Onwards</span>
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default TopCitiesMob;
