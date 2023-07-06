import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Citypage.css";
import Carousel from "react-elastic-carousel";
import HomeContact from "../homepage/home-contact/HomeContact";
import { CityContext } from "../context/CityContext";
import { getWorkSpaceByCity, getMicrolocationByCity } from "../service/Service";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SpaceSkeleton from "../spaceSkeleton/SpaceSkeleton";
import workImage from "../media/coworking_img/top-gurgaon.png";

function CityPage() {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 1];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);

  // console.log(lastElem.split(" ").join("-"));
  const [loadingMicrolocations, setLoadingMicrolocations] = useState(true);
  const [loadingSpaces, setLoadingSpaces] = useState(true);
  const [cityworkSpaces, setCityWorkspaces] = useState([]);

  const { breakPoints, Myarrow } = useContext(CityContext);
  const [microlocations, setMicrolocations] = useState([]);

  const handleFetchMicrolocations = async () => {
    await getMicrolocationByCity(
      cityName,
      setMicrolocations,
      setLoadingMicrolocations
    );
  };

  const handleFetchWorkspacesByCity = async () => {
    await getWorkSpaceByCity(setCityWorkspaces, cityName, setLoadingSpaces);
  };
  useEffect(() => {
    handleFetchMicrolocations();
    handleFetchWorkspacesByCity();
  }, [cityName]);
  let topMicrolocations = microlocations.slice(0, 6);
  // console.log(cityworkSpaces);

  return (
    <div className="city_page_main" style={{ marginTop: "100px" }}>
      <nav aria-label="breadcrumb" style={{ paddingLeft: "20px" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link>Coworking Space</Link>
          </li>
          <li
            style={{
              color: "#d09cff",
              fontWeight: "500",
            }}
            className="breadcrumb-item active"
            aria-current="page"
          >
            {cityName}
          </li>
        </ol>
      </nav>
      <hr style={{ color: "rgba(68, 68, 68, 0.1)" }} />
      <div className="container">
        <div className="d-flex align-items-center city_heading">
          <img
            className="robot"
            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688621027741.png"
            alt="robot"
          />
          <h1 className="page_main_title" style={{ marginLeft: "10px" }}>
            Coworking Space in <span className="top_city_span">{cityName}</span>
          </h1>
        </div>

        {loadingMicrolocations ? (
          <div>
            <Skeleton
              count={2}
              height={25}
              className="wave-effect"
              style={{ margin: "10px" }}
            />
          </div>
        ) : (
          <div className="microlocation_tab">
            <ul>
              {microlocations?.map((elem, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      to={`/coworking-space/${cityName.toLowerCase()}/${elem.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    >
                      <span>{elem.name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {loadingSpaces ? (
        <div className="container d-flex justify-content-between flex-wrap">
          <SpaceSkeleton />
          <SpaceSkeleton />
          <SpaceSkeleton />
          <SpaceSkeleton />
        </div>
      ) : (
        <>
          <div className="container">
            {topMicrolocations?.slice(0, 3).map((microlocation, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="city_page_title_box">
                    <h2>{microlocation.name}</h2>
                    <div className="city_explore">
                      <Link
                        to={`/coworking-space/${cityName.toLowerCase()}/${microlocation.name
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`}
                      >
                        View All{" "}
                        <img
                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624307161.png"
                          style={{ marginBottom: "4px" }}
                          alt="explore"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="top_space_row">
                    <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                      {cityworkSpaces?.map((workspace, j) => {
                        if (
                          workspace?.location?.micro_location?.name ===
                          microlocation?.name
                        ) {
                          return (
                            <Link
                              to={`/coworking/${workspace?.slug}`}
                              className="space_link"
                              key={j}
                            >
                              <div className="property-card" key={j}>
                                <div className="property_img">
                                  <img
                                    // src={workspace?.images[0]?.image}
                                    src={workImage}
                                    alt=""
                                    className="propery_card_img"
                                  />
                                </div>
                                <div className="card-body space_card">
                                  <p className="card-title">
                                    {workspace?.name}
                                  </p>
                                  <div className="location_box">
                                    <img
                                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624416819.png"
                                      alt="location-icon"
                                    />
                                    <p>
                                      {microlocation?.name + " " + cityName}
                                    </p>
                                  </div>
                                  <p className="price_from">Starting from</p>
                                  <div className="price_box">
                                    <p className="price">
                                      ₹
                                      {
                                        workspace?.plans?.reduce(
                                          (prev, current) => {
                                            return current.price < prev.price
                                              ? current
                                              : prev;
                                          }
                                        ).price
                                      }
                                      /*<span>Month</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        }
                        return null;
                      })}
                    </Carousel>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="contact_wrapper">
            <HomeContact />
          </div>
          <div className="container">
            {topMicrolocations?.slice(3, 6).map((microlocation, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="city_page_title_box">
                    <h2>{microlocation?.name}</h2>
                    <div className="city_explore">
                      <Link
                        to={`/coworking-space/${cityName.toLowerCase()}/${microlocation.name
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`}
                      >
                        View All{" "}
                        <img
                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624307161.png"
                          style={{ marginBottom: "4px" }}
                          alt="explore"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="top_space_row">
                    <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                      {cityworkSpaces?.map((workspace, j) => {
                        if (
                          workspace?.location?.micro_location?.name ===
                          microlocation?.name
                        ) {
                          return (
                            <Link
                              to={`/coworking/${workspace?.slug}`}
                              className="space_link"
                              key={j}
                            >
                              <div className="property-card" key={j}>
                                <div className="property_img">
                                  <img
                                    // src={workspace?.images[0]?.image}
                                    src={workImage}
                                    alt=""
                                    className="propery_card_img"
                                  />
                                </div>
                                <div className="card-body space_card">
                                  <p className="card-title">
                                    {workspace?.name}
                                  </p>
                                  <div className="location_box">
                                    <img
                                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624416819.png"
                                      alt="location-icon"
                                    />
                                    <p>
                                      {microlocation?.name + " " + cityName}
                                    </p>
                                  </div>
                                  <p className="price_from">Starting from</p>
                                  <div className="price_box">
                                    <p className="price">
                                      ₹
                                      {
                                        workspace?.plans.reduce(
                                          (prev, current) => {
                                            return current.price < prev.price
                                              ? current
                                              : prev;
                                          }
                                        ).price
                                      }
                                      /*<span>Month</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        }
                        return null;
                      })}
                    </Carousel>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </>
      )}

      <div className="other_location_box">
        <h2>
          Other <span style={{ color: "#d09cff" }}>Locations</span>
        </h2>
        <div className="container">
          <div className="row">
            {microlocations?.map((elem, i) => {
              return (
                <div className="col-6 col-md-3" key={i}>
                  <NavLink
                    to={`/coworking-space/${cityName.toLowerCase()}/${elem.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  >
                    <span className="mob_hide">Coworking space in</span>{" "}
                    {elem.name.length > 15
                      ? elem.name.substring(0, 11) + "..."
                      : elem.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityPage;
