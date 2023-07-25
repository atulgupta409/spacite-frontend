import React, { useContext } from "react";
import top_gurgaon from "../../media/coworking_img/top-gurgaon.png";
import Carousel from "@itseasy21/react-elastic-carousel";
import { CityContext } from "../../context/CityContext";
import { Link } from "react-router-dom";

function TopCitiesMob() {
  const { breakPoints, Myarrow, allCities } = useContext(CityContext);
  // console.log(allCities);

  return (
    <div>
      <div className="container">
        <h2>
          Top Coworking <span className="top_city_span">Cities</span>
        </h2>
        <div className="micro_location_properties near_coworking">
          <div className="row mb-5">
            <div className="col-md-12">
              <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                {allCities?.map((city, i) => {
                  return (
                    <div className="carousel-items w-100" key={i}>
                      <Link
                        to={`/coworking-space/${city?.city?.name.toLowerCase()}`}
                      >
                        <div className="property_card">
                          <div className="img_box">
                            <img
                              src={city?.cityFeatureImg}
                              alt={city?.city?.name}
                              className="img-fluid"
                            />
                          </div>
                          <div className="card_body">
                            <div className="location_box">
                              <p>{city?.city?.name}</p>
                            </div>
                            <div className="price_box">
                              <p className="price">
                                ₹ 9000 /*<span>Month</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCitiesMob;
