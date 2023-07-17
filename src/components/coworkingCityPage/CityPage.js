import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Citypage.css";
import Carousel from "@itseasy21/react-elastic-carousel";
import HomeContact from "../homepage/home-contact/HomeContact";
import { CityContext } from "../context/CityContext";
import { Helmet } from "react-helmet";
import ErrorBoundary from "./ErrorBoundry";

import {
  getWorkSpaceByCity,
  getMicrolocationByCity,
  getSeo,
} from "../service/Service";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SpaceSkeleton from "../spaceSkeleton/SpaceSkeleton";
import workImage from "../media/coworking_img/top-gurgaon.png";

function CityPage() {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 1];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);
  const currentUrl = new URL(location.pathname, window.location.origin);

  // console.log(lastElem.split(" ").join("-"));
  const [loadingMicrolocations, setLoadingMicrolocations] = useState(true);
  const [loadingSpaces, setLoadingSpaces] = useState(true);
  const [cityworkSpaces, setCityWorkspaces] = useState([]);

  const { breakPoints, Myarrow } = useContext(CityContext);
  const [microlocations, setMicrolocations] = useState([]);

  const handleFetchMicrolocations = async () => {
    try {
      await getMicrolocationByCity(
        cityName,
        setMicrolocations,
        setLoadingMicrolocations
      );
    } catch (error) {
      console.error(error);
      setLoadingMicrolocations(false);
      throw new Error(error);
    }
  };

  const handleFetchWorkspacesByCity = async () => {
    try {
      await getWorkSpaceByCity(setCityWorkspaces, cityName, setLoadingSpaces);
    } catch (error) {
      console.error(error);
      setLoadingSpaces(false);
    }
  };

  const [defaultSeo, setDefaultSeo] = useState({
    title: "Spacite - find best coworking spaces",
    description: "Spacite - find best coworking spaces",
    keywords: "Default Keywords",
    open_graph: {
      title: "Spacite - find best coworking spaces",
      description: "Spacite - find best coworking spaces",
    },
    twitter: {
      title: "Spacite - find best coworking spaces",
      description: "Spacite - find best coworking spaces",
    },
  });

  const [seo, setSeo] = useState(defaultSeo);

  const handleFetchSeo = async () => {
    try {
      const response = await getSeo(
        setSeo,
        "coworking-space-" + lastElem,
        defaultSeo
      );
    } catch (error) {
      console.error(error);
      setSeo(defaultSeo);
    }
  };

  useEffect(() => {
    handleFetchMicrolocations();
    handleFetchWorkspacesByCity();
    handleFetchSeo();
  }, [cityName]);
  let topMicrolocations = microlocations.slice(0, 6);
  // console.log(seo);

  return (
    <div className="city_page_main" style={{ marginTop: "100px" }}>
      <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <meta name="keywords" content={seo?.keywords} />
        <meta property="og:title" content={seo?.open_graph?.title} />
        <meta
          property="og:description"
          content={seo?.open_graph?.description}
        />
        <meta name="twitter:title" content={seo?.twitter?.title} />
        <meta name="twitter:description" content={seo?.twitter?.description} />
        <link rel="canonical" href={currentUrl.href} />
        <meta name="robots" content={seo?.robots} />
        {/* <meta property="og:image" content={workSpaces?.images[0]?.image} />
        <meta property="og:image:alt" content={workSpaces?.images[0]?.alt} />
        <meta property="twitter:image" content={workSpaces?.images[0]?.image} />
        <meta
          property="twitter:image:alt"
          content={workSpaces?.images[0]?.alt}
        /> */}
      </Helmet>

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
                    <Link
                      to={`/coworking-space/${cityName.toLowerCase()}/${microlocation.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    >
                      <h3>{microlocation.name}</h3>
                    </Link>
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
                      {cityworkSpaces
                        ?.filter(
                          (workspace) =>
                            workspace?.location?.micro_location?.name ===
                            microlocation?.name
                        )
                        .slice(0, 10)
                        .map((workspace, j) => (
                          <Link
                            to={`/coworking/${workspace?.slug}`}
                            className="space_link"
                            key={j}
                            target="_blank"
                          >
                            <div className="property_card">
                              <div className="img_box">
                                <img
                                  src={
                                    workspace.images.length > 0
                                      ? workspace.images[0].image
                                      : workImage
                                  }
                                  alt={
                                    workspace.images.length > 0
                                      ? workspace.images[0].alt
                                      : "workImage"
                                  }
                                  className="img-fluid"
                                />
                              </div>
                              <div className="card_body">
                                <p className="card-title">
                                  {workspace?.name?.length > 22
                                    ? workspace?.name?.substring(0, 22) + "..."
                                    : workspace?.name}
                                </p>
                                <div className="location_box">
                                  <p>{microlocation?.name + ", " + cityName}</p>
                                </div>
                                <p className="price_from">Starting from</p>
                                <div className="price_box">
                                  <p className="price">
                                    ₹{" "}
                                    {
                                      workspace?.plans?.reduce(
                                        (prev, current) =>
                                          current.price < prev.price
                                            ? current
                                            : prev
                                      ).price
                                    }{" "}
                                    /*<span>Month</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
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
                    <h3>{microlocation?.name}</h3>
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
                      {cityworkSpaces
                        ?.filter(
                          (workspace) =>
                            workspace?.location?.micro_location?.name ===
                            microlocation?.name
                        )
                        .slice(0, 10)
                        .map((workspace, j) => (
                          <Link
                            to={`/coworking/${workspace?.slug}`}
                            className="space_link"
                            key={j}
                          >
                            <div className="property_card">
                              <div className="img_box">
                                <img
                                  src={
                                    workspace.images.length > 0
                                      ? workspace.images[0].image
                                      : workImage
                                  }
                                  alt={
                                    workspace.images.length > 0
                                      ? workspace.images[0].alt
                                      : "workImage"
                                  }
                                  className="img-fluid"
                                />
                              </div>
                              <div className="card_body">
                                <p className="card-title">
                                  {workspace?.name?.length > 22
                                    ? workspace?.name?.substring(0, 22) + "..."
                                    : workspace?.name}
                                </p>
                                <div className="location_box">
                                  <p>{microlocation?.name + ", " + cityName}</p>
                                </div>
                                <p className="price_from">Starting from</p>
                                <div className="price_box">
                                  <p className="price">
                                    ₹{" "}
                                    {
                                      workspace?.plans?.reduce(
                                        (prev, current) =>
                                          current.price < prev.price
                                            ? current
                                            : prev
                                      ).price
                                    }{" "}
                                    /*<span>Month</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </Carousel>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </>
      )}

      <div className="other_location_box">
        <h3>
          Other <span style={{ color: "#d09cff" }}>Locations</span>
        </h3>
        <div className="container">
          <div className="row">
            {microlocations?.map((elem, i) => {
              return (
                <div className="col-6 col-md-4" key={i}>
                  <NavLink
                    to={`/coworking-space/${cityName.toLowerCase()}/${elem.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  >
                    {/* <span className="mob_hide">Coworking space in</span>{" "} */}
                    <span className="mob_hide">Coworking space in</span>{" "}
                    {elem.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {seo !== defaultSeo ? (
        <div className="footer_content_main">
          <div className="container">
            <h3 className="footer_title">{seo?.footer_title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: seo?.footer_description }}
              className="footer_content"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CityPage;
