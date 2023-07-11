import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { CityContext } from "../context/CityContext";
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
import workImage from "../media/coworking_img/top-gurgaon.png";
import { getSeo } from "../service/Service";

function Microlocation() {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 2];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);
  let lastElem2 = pathArray[pathArray.length - 1];
  let microlocation = lastElem2.charAt(0).toUpperCase() + lastElem2.slice(1);
  let microName = microlocation.split("-").join(" ");

  const [loadingMicrolocations, setLoadingMicrolocations] = useState(true);
  const [loadingSpaces, setLoadingSpaces] = useState(true);

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
      setLoadingSpaces
    );
  };

  useEffect(() => {
    handleFetchMicrolocations();
  }, [cityName]);

  const [seo, setSeo] = useState([]);
  const handleFetchSeo = async () => {
    await getSeo(setSeo, lastElem2);
  };

  useEffect(() => {
    handleFetchWorkSpaces(current_page);
    handleFetchSeo();
  }, [microNameApi]);

  const extractedWorkspaces = workSpaces?.slice(0, 12);
  const extractedWorkspaces2 = workSpaces?.slice(12);

  return (
    <div style={{ marginTop: "100px" }}>
      <nav aria-label="breadcrumb" style={{ paddingLeft: "20px" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="breadcrumb-item">
            <Link to="/">Coworking Space</Link>
          </li> */}
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
      <hr style={{ color: "rgba(68, 68, 68, 0.1)" }} />
      <div className="container">
        <div className="d-flex align-items-center city_heading">
          <img
            className="robot"
            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688621027741.png"
            alt="robot"
          />
          <h1 className="page_main_title" style={{ marginLeft: "10px" }}>
            Coworking Space in{" "}
            <span style={{ color: "#d09cff" }}>{microName}</span>
          </h1>
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
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row top_space_row">
              {extractedWorkspaces?.map((workspace, i) => (
                <div className="col-md-6 col-lg-3 property-card mb_5" key={i}>
                  <Link
                    to={`/coworking/${workspace?.slug}`}
                    className="row space_link"
                    target="_blank"
                  >
                    <div className="col-6 col-md-12 property_img">
                      <img
                        // src={workspace?.images[0]?.image}
                        src={workImage}
                        alt=""
                        className="propery_card_img"
                      />
                    </div>
                    <div className="col-6 col-md-12 card-body space_card card_body_mob">
                      <p className="card-title card_title">{workspace.name}</p>
                      <div className="location_box">
                        <img
                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624416819.png"
                          alt="location-icon"
                        />
                        <p>
                          {workspace?.location.address.length > 20
                            ? workspace?.location.address.slice(0, 20) + "..."
                            : workspace?.location.address}
                        </p>
                      </div>
                      <p className="price_from">Starting from</p>
                      <div className="price_box">
                        <p className="price">
                          ₹
                          {
                            workspace?.plans.reduce((prev, current) => {
                              return current.price < prev.price
                                ? current
                                : prev;
                            }).price
                          }
                          /*<span>month</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <HomeContact />
          <div className="container">
            <div className="row top_space_row">
              {extractedWorkspaces2?.map((workspace, i) => (
                <div className="col-md-6 col-lg-3 property-card mb_5" key={i}>
                  <Link
                    to={`/coworking/${workspace?.slug}`}
                    className="row space_link"
                  >
                    <div className="col-6 col-md-12 property_img">
                      <img
                        // src={workspace?.images[0]?.image}
                        src={workImage}
                        alt=""
                        className="propery_card_img"
                      />
                    </div>
                    <div className="col-6 col-md-12 card-body space_card card_body_mob">
                      <p className="card-title card_title">{workspace.name}</p>
                      <div className="location_box">
                        <img
                          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624416819.png"
                          alt="location-icon"
                        />
                        <p>
                          {workspace?.location.address.length > 20
                            ? workspace?.location.address.slice(0, 20) + "..."
                            : workspace?.location.address}
                        </p>
                      </div>
                      <p className="price_from">Starting from</p>
                      <div className="price_box">
                        <p className="price">
                          ₹
                          {
                            workspace?.plans.reduce((prev, current) => {
                              return current.price < prev.price
                                ? current
                                : prev;
                            }).price
                          }
                          /*<span>month</span>
                        </p>
                      </div>
                    </div>
                  </Link>
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
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item page_item"}
        pageLinkClassName={"page-link page_link"}
        previousClassName={"page-item page_item"}
        previousLinkClassName={"page-link page_link"}
        nextClassName={"page-item page_item"}
        nextLinkClassName={"page-link page_link"}
        // forcePage={current_page}
        activeClassName={"active"}
      ></ReactPaginate>
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
                    {elem.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer_content_main">
        <div className="container">
          <h3 className="footer_title">{seo?.footer_title}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: seo?.footer_description }}
            className="footer_content"
          />
        </div>
      </div>
    </div>
  );
}

export default Microlocation;
