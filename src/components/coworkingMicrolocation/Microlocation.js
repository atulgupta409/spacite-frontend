import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { CityContext } from "../context/CityContext";
import "./Microlocation.css";
import robot from "../media/robi.png";
import location_icon from "../media/icon/location.png";
import HomeContact from "../homepage/home-contact/HomeContact";
import { getWorkSpaceByMicrolocation } from "../service/Service";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Microlocation() {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 2];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);
  let lastElem2 = pathArray[pathArray.length - 1];
  let microlocation = lastElem2.charAt(0).toUpperCase() + lastElem2.slice(1);
  let microName = microlocation.split("-").join(" ");

  const [workSpaces, setWorkSpaces] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  let item_per_page = 8;
  let totalPage = Math.ceil(totalCount / item_per_page);

  const { microlocations, handleFetchMicrolocations } = useContext(CityContext);
  const handleFetchWorkSpaces = async (current_page) => {
    await getWorkSpaceByMicrolocation(
      setWorkSpaces,
      microName,
      item_per_page,
      current_page,
      setTotalCount
    );
  };

  let current_page;
  const handlePageClick = async (data_page) => {
    current_page = data_page.selected + 1;
    handleFetchWorkSpaces(current_page);
  };

  useEffect(() => {
    handleFetchMicrolocations();
    handleFetchWorkSpaces(current_page);
  }, [cityName]);

  const extractedWorkspaces = workSpaces?.slice(0, 4);
  const extractedWorkspaces2 = workSpaces?.slice(4);

  // console.log(workSpaces?.coworkingSpaces);

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
          <img className="robot" src={robot} alt="robot" />
          <h1 className="page_main_title" style={{ marginLeft: "10px" }}>
            Coworking Space in{" "}
            <span style={{ color: "#d09cff" }}>{microName}</span>
          </h1>
        </div>
        <div className="microlocation_tab">
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
        </div>
      </div>
      <div className="container">
        <div className="row top_space_row">
          {extractedWorkspaces?.map((workspace, i) => (
            <div className="col-md-6 col-lg-3 property-card mb_5" key={i}>
              <Link
                to={`/coworking/${workspace?.slug}`}
                className="row space_link"
              >
                <div className="col-6 col-md-12 property_img">
                  <img
                    src={workspace?.images[0].image}
                    alt=""
                    className="propery_card_img"
                  />
                </div>
                <div className="col-6 col-md-12 card-body space_card card_body_mob">
                  <p className="card-title card_title">{workspace.name}</p>
                  <div className="location_box">
                    <img src={location_icon} alt="location-icon" />
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
                          return current.price < prev.price ? current : prev;
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
                    src={workspace?.images[0].image}
                    alt=""
                    className="propery_card_img"
                  />
                </div>
                <div className="col-6 col-md-12 card-body space_card card_body_mob">
                  <p className="card-title card_title">{workspace.name}</p>
                  <div className="location_box">
                    <img src={location_icon} alt="location-icon" />
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
                          return current.price < prev.price ? current : prev;
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
    </div>
  );
}

export default Microlocation;
