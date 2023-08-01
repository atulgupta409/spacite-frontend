import React, { useContext } from "react";
import { CityContext } from "../../context/CityContext";
import { Link } from "react-router-dom";

function TopCitiesMob() {
  const { allCities } = useContext(CityContext);

  return (
    <div>
      <div className="container">
        <h2 className="mb-4">
          Top Coworking <span className="top_city_span">Cities</span>
        </h2>
        <div className="micro_location_properties near_coworking">
          <div className="row mb-5">
            {allCities?.map((city, i) => {
              return (
                <div className="mb-4 col-6" key={i}>
                  <Link
                    to={`/coworking-space/${city?.name.toLowerCase()}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="property_card">
                      <div
                        style={{
                          overflow: "hidden",
                          padding: "0",
                          height: "147px",
                          width: "auto",
                        }}
                        className="img_box"
                      >
                        <img
                          src={city?.featureImg}
                          alt={city?.name}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card_body">
                        <div className="location_box">
                          <p className="text-center">{city?.name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCitiesMob;
