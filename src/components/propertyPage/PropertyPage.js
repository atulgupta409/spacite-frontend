import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./PropertyPage.css";
import wifi_icon from "../media/wifi_icon.png";
import printer_icon from "../media/printer_icon.svg";
import parking_icon from "../media/parking_icon.svg";
import explore_icon from "../media/icon/explore_arrow.png";
import Select from "react-select";
import Footer from "../footer/Footer";
import SpaceExpert from "../homepage/spaceExpert/SpaceExpert";
import { CityContext } from "../context/CityContext";
import top_gurgaon from "../media/coworking_img/top-gurgaon.png";
import location_icon from "../media/icon/location.png";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";

const PropertyPage = ({ workSpace }) => {
  const { breakPoints, Myarrow } = useContext(CityContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);

  const optionsOfficeType = [
    { value: "dedicated desk", label: "Dedicated Desk" },
    { value: "private cabin", label: "Private Cabin" },
    { value: "office suite", label: "Office Suite" },
    { value: "custom buildout", label: "Custom Buildout" },
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
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688105578710.svg",
      description: "Book and experience the un-conventional work culture.",
    },
    {
      id: 2,
      name: "Hot Desk",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688105892652.svg",
      description: "Dynamic workspace for versatile professionals.",
    },
    {
      id: 3,
      name: "Dedicated Desk",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688105556307.svg",
      description: "A fixed desk in a shared coworking space.",
    },
    {
      id: 4,
      name: "Private Cabin",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688105567255.svg",
      description: "Private office space dedicated to you and your team.",
    },
  ];

  useEffect(() => {
    const mainPriceCategory = workSpace.plans.map((plan, i) => ({
      plan,
      planImg: coworkingPlans[i].img,
      description: coworkingPlans[i].description,
    }));
    setPlans([...mainPriceCategory]);
  }, [workSpace.plans]);

  console.log(plans);

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
  console.log(officeType);
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
          "http://localhost:5000/sendmail",
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
            office_type: officeType,
            no_of_seats: noSeats,
            move_in: moveIn,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        navigate("/thank-you");
      } catch (error) {
        console.error(error);
      }
    } else {
      validation();
    }
  };
  console.log(workSpace);

  return (
    <>
      <nav
        aria-label="breadcrumb"
        style={{ paddingLeft: "20px", marginTop: "100px" }}
      >
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
      <div className="container">
        <div className="row title_section_property">
          <div className="col-md-6">
            <h1 className="title_heading_property">
              {workSpace.name.split(" ").length > 1 ? (
                <span>
                  {workSpace.name
                    .split(" ")
                    .slice(0, workSpace.name.split(" ").length - 1)
                    .join(" ")}{" "}
                  <span className="title_color_property">
                    {workSpace.name.split(" ").pop()}
                  </span>
                </span>
              ) : (
                workSpace.name
              )}
            </h1>
            <p>{workSpace.location?.address}</p>
          </div>
          <div className="col-md-3 price_section_box">
            <p>Starting From</p>
            <p className="price_section_property">
              ₹
              {
                workSpace.plans.reduce((prev, current) => {
                  return current.price < prev.price ? current : prev;
                }).price
              }
              /*<span>Month</span>
            </p>
          </div>
        </div>
        <div className="row mb_30">
          <div className="col-lg-8">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {workSpace.images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image.image}
                      className="d-block w-100"
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
            </div>
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
              <p>{workSpace.description}</p>
            </div>
            <hr className="devider_line" />
            {plans?.map((planElem, i) => {
              return (
                <div className="row category_section_property" key={i}>
                  <div className="col-6">
                    <h4>{planElem?.plan.category.name}</h4>
                    <p className="mob_hide">{planElem.description}</p>
                    <p className="facility_name">Starting From</p>
                    <p className="facility_name">
                      <span>₹{planElem.plan.price}/*</span>
                      {planElem.plan.duration === "Year" ? "Year" : "Seat"}
                    </p>
                  </div>
                  <div className="col-6 desk_icon_box">
                    <img src={planElem.planImg} alt="desk" />
                    <div className="explore_box">
                      <p>Enquire</p>
                      <img src={explore_icon} alt="explore" />
                    </div>
                  </div>
                </div>
              );
            })}
            <hr className="devider_line" />
            <div className="row offers_section_property">
              <h3 className="property_h3">What this Space Offers</h3>
              {workSpace?.amenties?.map((amenity, i) => {
                return (
                  <div className="col-md-4 col-6 main_amenity_box" key={i}>
                    <div className="main_amenity_icon">
                      <img src={wifi_icon} alt="wifi" />
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
              <div className="contact_form_box_property contact_form">
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
                <a href="tel: +919999108078">
                  <button className="globalBtn contact_btn">
                    +91 9999 10 8078
                  </button>
                </a>
              </div>
            </div>
          </div>
          <hr className="devider_line mob_hide" />
        </div>
      </div>
      <div className="desk_hide">
        <SpaceExpert />
      </div>
      <div className="container">
        <h2 className="text_left">
          Similar
          <span className="city_span"> Spaces</span>
        </h2>
        <div className="top_space_row">
          <Carousel breakPoints={breakPoints} renderArrow={Myarrow}>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <img src={location_icon} alt="location-icon" />
                  <p>JMD Megapolis, Gurgaon</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹9,000/*<span>month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <img src={location_icon} alt="location-icon" />
                  <p>JMD Megapolis, Gurgaon</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹9,000/*<span>month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <img src={location_icon} alt="location-icon" />
                  <p>JMD Megapolis, Gurgaon</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹9,000/*<span>month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <img src={location_icon} alt="location-icon" />
                  <p>JMD Megapolis, Gurgaon</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹9,000/*<span>month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <div className="property_img">
                <img src={top_gurgaon} alt="" className="propery_card_img" />
              </div>
              <div className="card-body space_card">
                <p className="card-title">Accesswork Sohna Road</p>
                <div className="location_box">
                  <img src={location_icon} alt="location-icon" />
                  <p>JMD Megapolis, Gurgaon</p>
                </div>
                <div className="price_box">
                  <p className="price">
                    ₹9,000/*<span>month</span>
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="footer_mob">
        <Footer />
      </div>
      <div className="desk_hide fixed_div">
        <div className="starting_price">
          <p>Starting from</p>
          <p>
            ₹
            {
              workSpace.plans.reduce((prev, current) => {
                return current.price < prev.price ? current : prev;
              }).price
            }
            /*<span>Month</span>
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
        >
          <div className="close_icon_box">
            <button>
              <RxCross2 className="close_icon" onClick={closeModal} />
            </button>
          </div>

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
                {nameError && <p className="error_validate">{nameError}</p>}
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
                {emailError && <p className="error_validate">{emailError}</p>}
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
                {phoneError && <p className="error_validate">{phoneError}</p>}
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
              <div className="col-6">
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
              <div className="col-6">
                <button
                  type="submit"
                  className="globalBtn w-100 contact_btn"
                  data-bs-dismiss={
                    user.name.trim() !== "" &&
                    emailPattern.test(user.email) &&
                    phonePattern.test(user.phone) &&
                    loading &&
                    "modal"
                  }
                >
                  {loading ? "sending..." : "Find your space"}
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default PropertyPage;
