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
        <h2>
          Top Coworking <span className="top_city_span">Cities</span>
        </h2>
        <div className="micro_location_properties near_coworking">
          <div className="row mb-5">
            <div className="col-md-12">
              <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                {allCities?.map((city) => {
                  return lowestPricesWithCity
                    ?.filter(
                      (workspace) => workspace?.city === city?.city?.name
                    )
                    ?.map((myspace, j) => (
                      <div className="carousel-items w-100" key={j}>
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
                                  ₹ {myspace?.lowestPrice} /*<span>Month</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ));
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
