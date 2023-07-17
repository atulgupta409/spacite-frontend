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
        <div className="top_space_row near_coworking">
          <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
            {allCities?.map((city, i) => {
              return (
                <Link key={i} to={`/coworking-space/${city?.city?.name}`}>
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
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default TopCitiesMob;
