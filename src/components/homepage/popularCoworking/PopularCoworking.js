import React, { useContext, useEffect, useState } from "react";
import { CityContext } from "../../context/CityContext";
import HomeContact from "../home-contact/HomeContact";
import Carousel from "@itseasy21/react-elastic-carousel";
import { getPopularWorkspaceByCity } from "../../service/Service";
import Card from "../../card/Card";

function PopularCoworking() {
  const { cities, breakPoints, Myarrow } = useContext(CityContext);
  const workImage =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690177876357.png";

  const [popularSpaces, setPopularSpaces] = useState([]);

  const handleFetchPopularSpaces = async (cityNames) => {
    await getPopularWorkspaceByCity(cityNames, setPopularSpaces);
  };

  useEffect(() => {
    if (cities.length > 0) {
      handleFetchPopularSpaces(cities);
    }
  }, [cities]);

  return (
    <div>
      <div className="container">
        {cities?.map((elem, i) => {
          return (
            <div style={{ marginTop: "30px", marginBottom: "30px" }} key={i}>
              <h2>
                Popular Coworking in{" "}
                <span className="top_city_span">{elem.name}</span>
              </h2>
              <div className="micro_location_properties near_coworking">
                <div className="row">
                  <div className="col-md-12">
                    <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                      {popularSpaces?.map((workspace) =>
                        workspace
                          ?.filter((space) => {
                            return space?.location?.city?.name === elem.name;
                          })
                          .map((mySpace, k) => {
                            return (
                              <div className="carousel-items" key={k}>
                                <Card
                                  cardClass={"property_card"}
                                  imgBoxClass={"img_box"}
                                  slug={`/coworking/${mySpace?.slug}`}
                                  spaceImage={
                                    mySpace.images.length > 0
                                      ? mySpace.images[0].image
                                      : workImage
                                  }
                                  spaceAlt={
                                    mySpace.images.length > 0
                                      ? mySpace.images[0].alt
                                      : "workImage"
                                  }
                                  spaceName={
                                    mySpace?.name?.length > 22
                                      ? mySpace?.name?.substring(0, 20) + "..."
                                      : mySpace?.name
                                  }
                                  microlocation={
                                    mySpace?.location?.micro_location?.name
                                  }
                                  cityName={mySpace?.location?.city?.name}
                                  plans={mySpace?.plans
                                    ?.reduce((prev, current) =>
                                      current.price < prev.price
                                        ? current
                                        : prev
                                    )
                                    .price?.toLocaleString()}
                                />
                              </div>
                            );
                          })
                      )}
                    </Carousel>
                  </div>
                </div>
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
