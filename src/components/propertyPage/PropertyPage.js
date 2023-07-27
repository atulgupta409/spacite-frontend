import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./PropertyPage.css";
import Select from "react-select";
import Footer from "../footer/Footer";
import SpaceExpert from "../homepage/spaceExpert/SpaceExpert";
import { CityContext } from "../context/CityContext";
import top_gurgaon from "../media/coworking_img/top-gurgaon.png";
import Carousel from "@itseasy21/react-elastic-carousel";
import axios from "axios";
import Modal from "react-modal";
import { getWorkSpaceBySlug } from "../service/Service";
import { Helmet } from "react-helmet-async";
import baseUrl from "../../environment/api-config";
import { getNearSpaces } from "../service/Service";
import ContactFormModal from "../modal-form/ContactFormModal";
import RequestCallBtn from "../request-call-button/RequestCallBtn";
import Card from "../card/Card";
import ImageCarousel from "../carousel/ImageCarousel";

const PropertyPage = () => {
  const { breakPoints, Myarrow } = useContext(CityContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [workSpace, setWorkSpaces] = useState({});
  const [loadingSpace, setLoadingSpaces] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 1];
  let str = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);
  let cityName = str.split("-").join(" ");
  const handleFetchWorkspacesBySlug = async () => {
    await getWorkSpaceBySlug(setWorkSpaces, slug, setLoadingSpaces);
  };

  const currentUrl = new URL(location.pathname, window.location.origin);
  // console.log(currentUrl);

  const [nearSpace, setNearSpace] = useState([]);
  const getNearSpacesHandler = async () => {
    await getNearSpaces(setNearSpace, slug);
  };

  useEffect(() => {
    handleFetchWorkspacesBySlug();
    getNearSpacesHandler();
  }, [slug]);
  // console.log(nearSpace.slice(0, 10));

  const workImage =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690177876357.png";

  const optionsOfficeType = [
    { value: "dedicated desk", label: "Dedicated Desk" },
    { value: "private cabin", label: "Private Cabin" },
    { value: "office suite", label: "Office Suite" },
    // { value: "custom buildout", label: "Custom Buildout" },
  ];
  const optionSeats = [
    { value: "1-10", label: "1-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "51-100", label: "51-100" },
    { value: "100+", label: "100+" },
  ];
  const optionsMoveIn = [
    { value: "immediate", label: "Immediate" },
    { value: "within this month", label: "Within This Month" },
    { value: "1-2 month", label: "1-2 Month" },
    { value: "3-4 month", label: "3-4 Month" },
    { value: "after 4 month", label: "After 4 Month" },
  ];

  const [plans, setPlans] = useState([]);

  let coworkingPlans = [
    {
      id: 1,
      name: "Virtual Office",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760840756.png",
      description: "Book and experience the un-conventional work culture.",
    },
    {
      id: 2,
      name: "Hot Desk",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688626806995.png",
      description: "Dynamic workspace for versatile professionals.",
    },
    {
      id: 3,
      name: "Dedicated Desk",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760820901.png",
      description: "A fixed desk in a shared coworking space.",
    },
    {
      id: 4,
      name: "Private Cabin",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760830806.png",
      description: "Private office space dedicated to you and your team.",
    },
  ];

  const amenityIcons = [
    {
      id: 1,
      name: "Air Conditioning",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760860210.png",
    },
    {
      id: 2,
      name: "Coffee and Tea",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760869708.png",
    },
    {
      id: 3,
      name: "Reception",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760939797.png",
    },
    {
      id: 4,
      name: "Housekeeping",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760899276.png",
    },
    {
      id: 5,
      name: "Dedicated Desk",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760820901.png",
    },
    {
      id: 6,
      name: "Private Cabin",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760830806.png",
    },
    {
      id: 7,
      name: "High-Speed Wifi",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760889968.png",
    },
    {
      id: 8,
      name: "Meeting Rooms",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760910065.png",
    },
    {
      id: 9,
      name: "Comfy Workstation",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760878265.png",
    },
    {
      id: 10,
      name: "Parking",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760925417.png",
    },
  ];

  const [amenities, setAmenities] = useState([]);
  const { amenties } = workSpace;
  // console.log(workSpace);

  useEffect(() => {
    const mainAmenities = amenties?.map((amenity, i) => ({
      ...amenity,
      amenityImg: amenityIcons[i]?.icon,
    }));
    setAmenities(mainAmenities);
  }, [amenties]);
  const explore_icon =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624307161.png";
  const wifi_icon =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760889968.png";
  const parking_icon =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760925417.png";
  const printer_icon =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760932785.png";

  useEffect(() => {
    const mainPriceCategory = workSpace?.plans?.map((plan, i) => ({
      ...plan,
      planImg: coworkingPlans[i]?.img,
      description: coworkingPlans[i]?.description,
    }));
    setPlans(mainPriceCategory);
  }, [workSpace?.plans]);

  const [officeType, setOfficeType] = useState("");
  const [noSeats, setNoSeats] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const selectChangeHandlerOffice = (officeType, noSeats, moveIn) => {
    setOfficeType(officeType?.value);
  };
  const selectChangeHandlerSeats = (noSeats) => {
    setNoSeats(noSeats?.value);
  };
  const selectChangeHandlerMove = (moveIn) => {
    setMoveIn(moveIn?.value);
  };

  const phonePattern = /^\d{10}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validation = () => {
    if (user.name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (!emailPattern.test(user.email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }

    if (!phonePattern.test(user.phone)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      user.name.trim() !== "" &&
      emailPattern.test(user.email) &&
      phonePattern.test(user.phone)
    ) {
      setUser({ name: "", email: "", phone: "" });
      setMoveIn("");
      setNoSeats(null);
      setOfficeType("");
      validation();
      setLoading(true);
      try {
        const response = await axios.post(
          `${baseUrl}/sendmail`,
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
            office_type: officeType,
            no_of_seats: noSeats,
            move_in: moveIn,
            location: window.location.href,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        handleSheet();
        navigate("/thank-you");
      } catch (error) {
        console.error(error);
      }
    } else {
      validation();
    }
  };

  const handleSheet = async () => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/spacite/google_sheets/JlgXOIuxNJHqwITV?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              user.name,
              user.email,
              user.phone,
              officeType,
              noSeats,
              moveIn,
              location,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const [shake, setShake] = useState(false);

  const animate = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const { seo, images } = workSpace;

  return (
    <>
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
        {/* <meta property="og:image" content={workSpace?.images[0]?.image} />
        <meta property="og:image:alt" content={workSpace?.images[0]?.alt} />
        <meta property="twitter:image" content={workSpace?.images[0]?.image} />
        <meta
          property="twitter:image:alt"
          content={workSpace?.images[0]?.alt}
        /> */}
      </Helmet>
      <div className="container">
        <nav aria-label="breadcrumb" style={{ marginTop: "100px" }}>
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
              {workSpace?.name}
            </li>
          </ol>
        </nav>
        <hr style={{ color: "rgba(68, 68, 68, 0.1)" }} />
      </div>
      <div className="container">
        <div className="row title_section_property">
          <div className="col-md-6">
            <h1 className="title_heading_property">
              {workSpace?.name?.split(" ").length > 1 ? (
                <span>
                  {workSpace?.name
                    .split(" ")
                    .slice(0, workSpace.name.split(" ").length - 1)
                    .join(" ")}{" "}
                  <span className="title_color_property">
                    {workSpace?.name.split(" ").pop()}
                  </span>
                </span>
              ) : (
                workSpace?.name
              )}
            </h1>
            <p>
              <span>
                <img
                  src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624416819.png"
                  alt="location"
                  className="img-fluid"
                />
              </span>
              {workSpace?.location?.address}
            </p>
          </div>
          <div className="col-md-3 price_section_box">
            <p>Starting</p>
            <p className="price_section_property">
              ₹
              {workSpace?.plans
                ?.reduce((prev, current) => {
                  return current.price < prev.price ? current : prev;
                })
                .price?.toLocaleString()}
              /*<span>month</span>
            </p>
          </div>
        </div>
        <div className="row mb_30">
          <div className="col-lg-8">
            {/* <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner carousel_inner">
                {workSpace?.images?.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image?.image}
                      className="d-block w-100 img-fluid property_page_img"
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div> */}
            <ImageCarousel images={images} />
            <div className="row amenity_section_property">
              <div className="col-md-4">
                <img className="property_icon" src={wifi_icon} alt="wifi" />
                <div>
                  <p className="facility_name facility_name_property">
                    High Speed Wifi
                  </p>
                  <p>High-Speed Wifi for great connectivity</p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  className="property_icon"
                  src={printer_icon}
                  alt="printer"
                />
                <div>
                  <p className="facility_name facility_name_property">
                    Printer
                  </p>
                  <p>Printing and scanning facilities</p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  className="property_icon"
                  src={parking_icon}
                  alt="parking"
                />
                <div>
                  <p className="facility_name facility_name_property">
                    Parking
                  </p>
                  <p>Easy and convenient parking</p>
                </div>
              </div>
            </div>
            <hr className="devider_line" />
            <div className="row about_property_section">
              <h3 className="property_h3">About this property</h3>
              <div
                dangerouslySetInnerHTML={{ __html: workSpace?.description }}
                className="about_property_text"
              />
            </div>
            <hr className="devider_line" />
            {plans?.map((planElem, i) => {
              return (
                <div className="row category_section_property" key={i}>
                  <div className="col-8">
                    <h4>{planElem?.category?.name}</h4>
                    <p className="mob_hide">{planElem?.description}</p>
                    <p className="facility_name">Starting</p>
                    <p className="facility_name">
                      <span>₹{planElem?.price?.toLocaleString()}/*</span>
                      <span>
                        {planElem?.duration === "year" ? "Year" : "Seat"}
                      </span>
                    </p>
                  </div>
                  <div className="col-4 desk_icon_box">
                    <img src={planElem?.planImg} alt="desk" />
                    <div className="explore_box mob_hide">
                      <p onClick={animate}>Enquire</p>
                      <img src={explore_icon} alt="explore" />
                    </div>
                  </div>
                </div>
              );
            })}
            <hr className="devider_line" />
            <div className="row offers_section_property">
              <h3 className="property_h3">Amenities</h3>
              {amenities?.map((amenity, i) => {
                return (
                  <div className="col-md-4 col-6 main_amenity_box" key={i}>
                    <div className="main_amenity_icon">
                      <img src={amenity?.amenityImg} alt={amenity?.name} />
                    </div>
                    <div>
                      <p>{amenity?.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4 mob_hide">
            <div className="sticky_form">
              <div
                className={
                  shake
                    ? "shake contact_form_box_property contact_form"
                    : "contact_form_box_property contact_form"
                }
              >
                <h4>Enquire Now</h4>
                <form onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputtext"
                        aria-describedby="emailHelp"
                        placeholder="Name*"
                        value={user.name}
                        name="name"
                        onChange={inputChangeHandler}
                        onBlur={validation}
                      />
                      {nameError && (
                        <p className="error_validate">{nameError}</p>
                      )}
                    </div>
                    <div className="col-md-12 mb-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={inputChangeHandler}
                        onBlur={validation}
                        name="email"
                        value={user.email}
                      />
                      {emailError && (
                        <p className="error_validate">{emailError}</p>
                      )}
                    </div>
                    <div className="col-md-12 mb-4">
                      <input
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="phone"
                        value={user.phone}
                        aria-describedby="emailHelp"
                        onChange={inputChangeHandler}
                        onBlur={validation}
                      />
                      {phoneError && (
                        <p className="error_validate">{phoneError}</p>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="select_option_property">
                        <Select
                          value={optionsOfficeType.find(
                            (option) => option.value === officeType
                          )}
                          onChange={selectChangeHandlerOffice}
                          options={optionsOfficeType}
                          placeholder="Office Type"
                          inputProps={{
                            name: "Office type",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="select_option_property">
                        <Select
                          value={optionSeats.find(
                            (option) => option.value === noSeats
                          )}
                          onChange={selectChangeHandlerSeats}
                          options={optionSeats}
                          placeholder="No. of Seats"
                          inputProps={{
                            name: "No. of seats",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="select_option_property">
                        <Select
                          defaultValue={moveIn}
                          onChange={selectChangeHandlerMove}
                          options={optionsMoveIn}
                          placeholder="Move In"
                          inputProps={{
                            name: "Move in",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="submit"
                        className="globalBtn w-100 contact_btn"
                      >
                        {loading ? "sending..." : "Find your space"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact_form_footer">
                <h3 className="property_h3 text-align-center">
                  Got questions or want to talk to someone?
                </h3>
                <RequestCallBtn location={window.location.href} />
              </div>
            </div>
          </div>
          <hr className="devider_line mob_hide" />
        </div>
      </div>
      <div className="desk_hide">
        <SpaceExpert />
      </div>
      <div className="container mb-5">
        <h2 className="text_left mb-5">
          Similar coworking spaces in
          <span className="city_span">
            {" "}
            {workSpace?.location?.micro_location?.name}
          </span>
        </h2>
        <div className="micro_location_properties">
          <div className="row">
            <div className="col-md-12">
              {nearSpace?.length > 0 ? (
                <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
                  {nearSpace?.slice(0, 10)?.map((workspace, i) => {
                    return (
                      <div className="carousel-items" key={i}>
                        {/* <div className="property_card">
                          <Link
                            to={`/coworking/${space?.slug}`}
                            target="_blank"
                            style={{ padding: "0" }}
                          >
                            <div className="img_box">
                              <img
                                src={
                                  space.images.length > 0
                                    ? space.images[0].image
                                    : top_gurgaon
                                }
                                alt={
                                  space.images.length > 0
                                    ? space.images[0].alt
                                    : "workImage"
                                }
                                className="img-fluid"
                              />
                            </div>
                          </Link>
                          <div className="card_body">
                            <p className="card-title">
                              {space?.name?.length > 22
                                ? space?.name?.substring(0, 20) + "..."
                                : space?.name}
                            </p>
                            <div className="location_box">
                              <p>
                                {space?.location?.micro_location?.name +
                                  ", " +
                                  space?.location?.city?.name}
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
                                {space?.plans
                                  ?.reduce((prev, current) =>
                                    current.price < prev.price ? current : prev
                                  )
                                  .price?.toLocaleString()}{" "}
                                /*<span>month</span>
                              </p>
                            </div>
                          </div>
                          <div className="card_button_link">
                            <div onClick={openModal}>Enquire Now</div>
                            <div>
                              <Link
                                to={`/coworking/${space?.slug}`}
                                target="_blank"
                              >
                                Explore Now
                              </Link>
                            </div>
                          </div>
                        </div> */}
                        <Card
                          cardClass={"property_card"}
                          imgBoxClass={"img_box"}
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
                          microlocation={
                            workspace?.location?.micro_location?.name
                          }
                          cityName={workspace?.location?.city?.name}
                          plans={workspace?.plans
                            ?.reduce((prev, current) =>
                              current.price < prev.price ? current : prev
                            )
                            .price?.toLocaleString()}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              ) : (
                <div>No Similar Spaces.</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer_mob">
        <Footer />
      </div>
      <div className="desk_hide fixed_div">
        <div className="starting_price">
          <p>Starting</p>
          <p>
            ₹
            {workSpace?.plans
              ?.reduce((prev, current) => {
                return current.price < prev.price ? current : prev;
              })
              .price.toLocaleString()}
            /*<span>month</span>
          </p>
        </div>
        <button
          onClick={openModal}
          className="fix_btn globalBtn"
          style={{ width: "110px" }}
        >
          Enquire
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <ContactFormModal
            closeModal={closeModal}
            location={window.location.href}
          />
        </Modal>
      </div>
    </>
  );
};

export default PropertyPage;
