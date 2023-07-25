import React, { useContext, useEffect, useState } from "react";
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
import workImage from "../media/coworking_img/top-gurgaon.png";
import { getSeo } from "../service/Service";
import { Helmet } from "react-helmet-async";
import ContactFormModal from "../modal-form/ContactFormModal";
import Modal from "react-modal";

function Microlocation() {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 2];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);
  let lastElem2 = pathArray[pathArray.length - 1];
  let microlocation = lastElem2.charAt(0).toUpperCase() + lastElem2.slice(1);
  let microName = microlocation.split("-").join(" ");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const currentUrl = new URL(location.pathname, window.location.origin);

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
    await getSeo(setSeo, lastElem2, defaultSeo);
  };

  useEffect(() => {
    handleFetchWorkSpaces(current_page);
    handleFetchSeo();
  }, [microNameApi]);

  const extractedWorkspaces = workSpaces?.slice(0, 12);
  const extractedWorkspaces2 = workSpaces?.slice(12);
  // console.log(workSpaces);
  // console.log(seo);

  return (
    <div style={{ marginTop: "100px" }}>
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
          <ol className="breadcrumb">
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
        <hr style={{ color: "rgba(68, 68, 68, 0.1)" }} />
      </div>
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
                    <div className="row property_card property_card_mob">
                      <div className="col-6 col-sm-12 img_box img_box_micro">
                        <img
                          src={
                            workspace?.images?.length > 0
                              ? workspace?.images[0]?.image
                              : workImage
                          }
                          alt={
                            workspace?.images?.length > 0
                              ? workspace?.images[0]?.alt
                              : "workImage"
                          }
                          className="img-fluid"
                        />
                      </div>
                      <div className="card_body col-6 col-sm-12">
                        <p className="card-title">
                          {workspace?.name?.length > 22
                            ? workspace?.name?.substring(0, 20) + "..."
                            : workspace?.name}
                        </p>
                        <div className="location_box">
                          <p>
                            {workspace?.location?.address?.length > 20
                              ? workspace?.location?.address?.slice(0, 20) +
                                "..."
                              : workspace?.location?.address}
                          </p>
                        </div>
                        <div className="card_amenities">
                          <div>
                            <img
                              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760889968.png"
                              alt="wifi"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <img
                              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760820901.png"
                              alt="dedicated desk"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <img
                              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760910065.png"
                              alt="meeting rooms"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <img
                              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760932785.png"
                              alt="printer"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <img
                              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760917850.png"
                              alt="pantry"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <img
                              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760925417.png"
                              alt="parking"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <p className="price_from">Starting</p>
                        <div className="price_box">
                          <p className="price">
                            ₹{" "}
                            {workspace?.plans
                              .reduce((prev, current) => {
                                return current.price < prev.price
                                  ? current
                                  : prev;
                              })
                              .price?.toLocaleString()}{" "}
                            /*<span>month</span>
                          </p>
                        </div>
                      </div>
                      <div className="card_button_link">
                        <div onClick={openModal}>Enquire Now</div>
                        <div>
                          <Link
                            to={`/coworking/${workspace?.slug}`}
                            target="_blank"
                          >
                            Explore Now
                          </Link>
                        </div>
                      </div>
                    </div>
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
                  <div className="row property_card property_card_mob">
                    <div className="col-6 col-sm-12 img_box img_box_micro">
                      <img
                        src={
                          workspace?.images?.length > 0
                            ? workspace?.images[0]?.image
                            : workImage
                        }
                        alt={
                          workspace?.images?.length > 0
                            ? workspace?.images[0]?.alt
                            : "workImage"
                        }
                        className="img-fluid"
                      />
                    </div>
                    <div className="card_body col-6 col-sm-12">
                      <p className="card-title">
                        {workspace?.name?.length > 22
                          ? workspace?.name?.substring(0, 20) + "..."
                          : workspace?.name}
                      </p>
                      <div className="location_box">
                        <p>
                          {workspace?.location?.address?.length > 20
                            ? workspace?.location?.address?.slice(0, 20) + "..."
                            : workspace?.location?.address}
                        </p>
                      </div>
                      <div className="card_amenities">
                        <div>
                          <img
                            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760889968.png"
                            alt="wifi"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <img
                            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760820901.png"
                            alt="dedicated desk"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <img
                            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760910065.png"
                            alt="meeting rooms"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <img
                            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760932785.png"
                            alt="printer"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <img
                            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760917850.png"
                            alt="pantry"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <img
                            src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760925417.png"
                            alt="parking"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <p className="price_from">Starting</p>
                      <div className="price_box">
                        <p className="price">
                          ₹{" "}
                          {workspace?.plans
                            .reduce((prev, current) => {
                              return current.price < prev.price
                                ? current
                                : prev;
                            })
                            .price?.toLocaleString()}{" "}
                          /*<span>month</span>
                        </p>
                      </div>
                    </div>
                    <div className="card_button_link">
                      <div onClick={openModal}>Enquire Now</div>
                      <div>
                        <Link
                          to={`/coworking/${workspace?.slug}`}
                          target="_blank"
                        >
                          Explore Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
      >
        <ContactFormModal closeModal={closeModal} />
      </Modal>

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

export default Microlocation;
