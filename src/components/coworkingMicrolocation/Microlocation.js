import React, { useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import "./Microlocation.css";
import HomeContact from "../homepage/home-contact/HomeContact";
import {
  getWorkSpaceByMicrolocation,
  getMicrolocationByCity,
} from "../service/Service";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SpaceSkeleton from "../spaceSkeleton/SpaceSkeleton";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { CityContext } from "../context/CityContext";
import FooterTop from "../footer/FooterTop";
import Card from "../card/Card";

function Microlocation() {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 2];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);
  let lastElem2 = pathArray[pathArray.length - 1];
  let microlocation = lastElem2.charAt(0).toUpperCase() + lastElem2.slice(1);
  let microName = microlocation.split("-").join(" ");

  const currentUrl = new URL(location.pathname, window.location.origin);

  const [loadingMicrolocations, setLoadingMicrolocations] = useState(true);
  const [loadingSpaces, setLoadingSpaces] = useState(true);

  const { setPath, seo } = useContext(CityContext);
  const pathName = `coworking-space-${lastElem}-${lastElem2}`;
  useEffect(() => {
    setPath(pathName);
  }, [pathName]);

  const words = lastElem2.split("-");
  const capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const microNameApi = capitalizedWords.join(" ");

  const [workSpaces, setWorkSpaces] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  let item_per_page = 24;
  let totalPage = Math.ceil(totalCount / item_per_page);

  let current_page = 1;
  const handlePageClick = async (data_page) => {
    current_page += data_page.selected;
    handleFetchWorkSpaces(current_page);
  };

  const [microlocations, setMicrolocations] = useState([]);
  const handleFetchMicrolocations = async () => {
    await getMicrolocationByCity(
      cityName,
      setMicrolocations,
      setLoadingMicrolocations
    );
  };
  const handleFetchWorkSpaces = async (current_page) => {
    await getWorkSpaceByMicrolocation(
      setWorkSpaces,
      microNameApi,
      item_per_page,
      current_page,
      setTotalCount,
      setLoadingSpaces,
      lastElem
    );
  };

  useEffect(() => {
    handleFetchMicrolocations();
  }, [cityName]);

  useEffect(() => {
    handleFetchWorkSpaces(current_page);
  }, [microNameApi]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const extractedWorkspaces = workSpaces?.slice(0, 12);
  const extractedWorkspaces2 = workSpaces?.slice(12);
  const workImage =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690177876357.png";
  const pageTitleArr = seo?.page_title?.split(" ");
  const pageTitleFirst = pageTitleArr
    ?.slice(0, pageTitleArr.length - 1)
    .join(" ");
  const pageTitleSecond = pageTitleArr
    ?.slice(pageTitleArr.length - 1)
    .join(" ");

  return (
    <div className="city_page_main_box">
      <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <meta name="keywords" content={seo?.keywords} />
        {/* <script type="application/ld+json">
          {JSON.stringify(seo?.script)}
        </script> */}
        <meta property="og:title" content={seo?.open_graph?.title} />
        <meta
          property="og:description"
          content={seo?.open_graph?.description}
        />
        <meta name="twitter:title" content={seo?.twitter?.title} />
        <meta name="twitter:description" content={seo?.twitter?.description} />
        <link rel="canonical" href={currentUrl.href} />
        <meta name="robots" content={seo?.robots} />
      </Helmet>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mob_hide">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={`/coworking-space/${cityName.toLowerCase()}`}>
                {cityName}
              </Link>
            </li>
            <li
              style={{
                color: "#d09cff",
                fontWeight: "500",
              }}
              className="breadcrumb-item"
            >
              {microName}
            </li>
          </ol>
        </nav>
        <hr style={{ color: "rgba(68, 68, 68, 0.1)" }} className="mob_hide" />
      </div>
      <div className="container">
        <div className="d-flex align-items-center city_heading">
          <img
            className="robot"
            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688621027741.png"
            alt="robot"
          />
          {seo?.page_title ? (
            <h1
              className="page_main_title"
              style={{ marginLeft: "10px", textAlign: "left" }}
            >
              {pageTitleFirst}
              <span style={{ color: "#d09cff" }}> {pageTitleSecond}</span>
            </h1>
          ) : (
            <h1
              className="page_main_title"
              style={{ marginLeft: "10px", textAlign: "left" }}
            >
              Coworking Space in{" "}
              <span style={{ color: "#d09cff" }}>{microName}</span>
            </h1>
          )}
        </div>
        <div className="microlocation_tab">
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
            <ul>
              {microlocations?.map((elem, i) => {
                return (
                  <div key={i} className="d-inline-block">
                    <NavLink
                      to={`/coworking-space/${cityName.toLowerCase()}/${elem.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    >
                      <li>{elem.name}</li>
                    </NavLink>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      {loadingSpaces ? (
        <div className="container d-flex justify-content-between flex-wrap">
          <SpaceSkeleton />
          <SpaceSkeleton />
          <SpaceSkeleton />
          <SpaceSkeleton />
          <SpaceSkeleton />
          <SpaceSkeleton />
          <SpaceSkeleton />
          <SpaceSkeleton />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row top_space_row">
              {extractedWorkspaces?.length > 0 ? (
                extractedWorkspaces?.map((workspace, i) => (
                  <div
                    className="col-12 col-sm-6 col-lg-3 micro_card_box"
                    key={i}
                  >
                    <Card
                      cardClass={"row property_card property_card_mob"}
                      imgBoxClass={"col-6 col-sm-12 img_box img_box_micro"}
                      slug={`/coworking/${workspace?.slug}`}
                      spaceImage={
                        workspace.images.length > 0
                          ? workspace.images[0].image
                          : workImage
                      }
                      spaceAlt={
                        workspace.images.length > 0
                          ? workspace.images[0].alt
                          : "workImage"
                      }
                      spaceName={
                        window.innerWidth > 576 && workspace?.name?.length > 22
                          ? workspace?.name?.substring(0, 20) + "..."
                          : workspace?.name
                      }
                      address={
                        (
                          workspace?.location?.micro_location?.name +
                          " " +
                          cityName
                        )?.length > 26 && window.innerWidth > 576
                          ? (
                              workspace?.location?.micro_location?.name +
                              " " +
                              cityName
                            )?.substring(0, 26) + "..."
                          : workspace?.location?.micro_location?.name +
                            " " +
                            cityName
                      }
                      plans={workspace?.plans
                        ?.reduce((prev, current) =>
                          current.price < prev.price ? current : prev
                        )
                        .price?.toLocaleString()}
                    />
                  </div>
                ))
              ) : (
                <div
                  className="col-12 text-center"
                  style={{ fontSize: "20px", color: "#444", fontWeight: "600" }}
                >
                  No Spaces Available In {microName}
                </div>
              )}
            </div>
          </div>
          <HomeContact />
          <div className="container">
            <div className="row top_space_row">
              {extractedWorkspaces2?.map((workspace, i) => (
                <div
                  className="col-12 col-sm-6 col-lg-3 micro_card_box"
                  key={i}
                >
                  <Card
                    cardClass={"row property_card property_card_mob"}
                    imgBoxClass={"col-6 col-sm-12 img_box img_box_micro"}
                    slug={`/coworking/${workspace?.slug}`}
                    spaceImage={
                      workspace.images.length > 0
                        ? workspace.images[0].image
                        : workImage
                    }
                    spaceAlt={
                      workspace.images.length > 0
                        ? workspace.images[0].alt
                        : "workImage"
                    }
                    spaceName={
                      workspace?.name?.length > 22
                        ? workspace?.name?.substring(0, 20) + "..."
                        : workspace?.name
                    }
                    address={
                      (
                        workspace?.location?.micro_location?.name +
                        " " +
                        cityName
                      )?.length > 26 && window.innerWidth > 576
                        ? (
                            workspace?.location?.micro_location?.name +
                            " " +
                            cityName
                          )?.substring(0, 26) + "..."
                        : workspace?.location?.micro_location?.name +
                          " " +
                          cityName
                    }
                    plans={workspace?.plans
                      ?.reduce((prev, current) =>
                        current.price < prev.price ? current : prev
                      )
                      .price?.toLocaleString()}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <ReactPaginate
        previousLabel={<MdKeyboardArrowLeft className="pagination_icon" />}
        nextLabel={<MdKeyboardArrowRight className="pagination_icon" />}
        breakLabel={"..."}
        pageCount={totalPage}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center pagination_box"}
        pageClassName={"page-item page_item"}
        pageLinkClassName={"page-link page_link"}
        previousClassName={"page-item page_item"}
        previousLinkClassName={"page-link page_link"}
        nextClassName={"page-item page_item"}
        nextLinkClassName={"page-link page_link"}
        activeClassName={"active"}
      ></ReactPaginate>
      <div className="other_location_box">
        <h3>
          Other coworking locations in{" "}
          <span style={{ color: "#d09cff" }}>{cityName}</span>
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
                    <span className="mob_hide">Coworking space in</span>{" "}
                    {elem.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterTop pathName={pathName} />
    </div>
  );
}

export default Microlocation;
