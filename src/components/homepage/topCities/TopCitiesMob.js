import React, { useContext, useEffect, useState } from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import { CityContext } from "../../context/CityContext";
import { Link } from "react-router-dom";
import { getWorkSpaceForCityPage } from "../../service/Service";

function TopCitiesMob() {
  const { breakPoints, Myarrow, allCities } = useContext(CityContext);
  const [workspaces, setWorkspaces] = useState([]);

  const handleFetchWorkspaces = async (cityNames) => {
    getWorkSpaceForCityPage(setWorkspaces, cityNames);
  };

  useEffect(() => {
    handleFetchWorkspaces(allCities);
  }, [allCities]);

  function findLowestPricesWithCity(workspaces) {
    const result = [];

    workspaces?.forEach((arrayOfObjects) => {
      let lowestPrice = Infinity;
      let cityNameWithLowestPrice = "";

      arrayOfObjects.forEach((object) => {
        const plansArray = object.plans;
        plansArray.forEach((plan) => {
          if (plan.price < lowestPrice) {
            lowestPrice = plan.price;
            cityNameWithLowestPrice = object.location.city.name;
          }
        });
      });

      result.push({ city: cityNameWithLowestPrice, lowestPrice });
    });

    return result;
  }

  const lowestPricesWithCity = findLowestPricesWithCity(workspaces);
  // console.log(lowestPricesWithCity);

  return (
    <div>
      <div className="container">
        <h2 className="mb-4">
          Top Coworking <span className="top_city_span">Cities</span>
        </h2>
        <div className="micro_location_properties near_coworking">
          <div className="row mb-5">
            {allCities?.map((city) => {
              return lowestPricesWithCity
                ?.filter((workspace) => workspace?.city === city?.name)
                ?.map((myspace, j) => (
                  <div className="mb-4 col-6" key={j}>
                    <Link to={`/coworking-space/${city?.name.toLowerCase()}`}>
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
                            <p>{city?.name}</p>
                          </div>
                          {/* <div className="price_box">
                            <p className="price">
                              ₹ {myspace?.lowestPrice} /*<span>Month</span>
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                ));
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCitiesMob;
