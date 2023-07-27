import React, { useContext, useState, useEffect } from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import "./NearCoworking.css";
import { CityContext } from "../../context/CityContext";
import { getNearCoworking } from "../../service/Service";
import Card from "../../card/Card";

function NearCoworking() {
  const { breakPoints, Myarrow } = useContext(CityContext);
  const workImage =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690177876357.png";

  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [workspaces, setWorkspaces] = useState([]);
  const [loadingSpaces, setLoadingSpaces] = useState(false);
  const handleFetchNearWorkSpaces = async () => {
    await getNearCoworking(
      setWorkspaces,
      latitude,
      longitude,
      setLoadingSpaces
    );
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  useEffect(() => {
    if (longitude && latitude) {
      handleFetchNearWorkSpaces();
    }
  }, [longitude, latitude]);

  return (
    <div className="mob_section">
      {workspaces?.length !== 0 ? (
        <div className="container" style={{ paddingTop: "60px" }}>
          <h2>
            Popular Coworking Near <span className="top_city_span">You</span>
          </h2>
          <div className="micro_location_properties near_coworking">
            <div className="row mb-5">
              <div className="col-md-12">
                <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                  {workspaces?.slice(0, 10)?.map((mySpace, i) => {
                    return (
                      <div className="carousel-items" key={i}>
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
                          microlocation={mySpace?.location?.micro_location}
                          cityName={mySpace?.location?.city}
                          plans={mySpace?.plans
                            ?.reduce((prev, current) =>
                              current.price < prev.price ? current : prev
                            )
                            .price?.toLocaleString()}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NearCoworking;
