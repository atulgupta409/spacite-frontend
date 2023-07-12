import React, { useContext } from "react";
import top_gurgaon from "../../media/coworking_img/top-gurgaon.png";
import Carousel from "@itseasy21/react-elastic-carousel";
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
            <div className="property_card">
              <div className="img_box">
                <img src={top_gurgaon} alt="workImage" className="img-fluid" />
              </div>
              <div className="card_body">
                <div className="location_box">
                  <p>Mumbai</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹ 9000 /*<span>Month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property_card">
              <div className="img_box">
                <img src={top_gurgaon} alt="workImage" className="img-fluid" />
              </div>
              <div className="card_body">
                <div className="location_box">
                  <p>Gurugram</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹ 9000 /*<span>Month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property_card">
              <div className="img_box">
                <img src={top_gurgaon} alt="workImage" className="img-fluid" />
              </div>
              <div className="card_body">
                <div className="location_box">
                  <p>Pune</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹ 9000 /*<span>Month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property_card">
              <div className="img_box">
                <img src={top_gurgaon} alt="workImage" className="img-fluid" />
              </div>
              <div className="card_body">
                <div className="location_box">
                  <p>Noida</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹ 9000 /*<span>Month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property_card">
              <div className="img_box">
                <img src={top_gurgaon} alt="workImage" className="img-fluid" />
              </div>
              <div className="card_body">
                <div className="location_box">
                  <p>Bangalore</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹ 9000 /*<span>Month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property_card">
              <div className="img_box">
                <img src={top_gurgaon} alt="workImage" className="img-fluid" />
              </div>
              <div className="card_body">
                <div className="location_box">
                  <p>Hyderabad</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹ 9000 /*<span>Month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property_card">
              <div className="img_box">
                <img src={top_gurgaon} alt="workImage" className="img-fluid" />
              </div>
              <div className="card_body">
                <div className="location_box">
                  <p>Ahmedabad</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹ 9000 /*<span>Month</span>
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
