import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./PropertyPage.css";
import Select from "react-select";
import Footer from "../footer/Footer";
import SpaceExpert from "../homepage/spaceExpert/SpaceExpert";
import { CityContext } from "../context/CityContext";
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
import { decode } from "html-entities";
import LeafletMap from "./LeafletMap";
import { handleLeadSquared } from "../service/ContactFormFunctions";

const PropertyPage = () => {
  const { breakPoints, Myarrow } = useContext(CityContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [workSpace, setWorkSpaces] = useState({});
  // const [loadingSpaces, setLoadingSpaces] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const location = useLocation();
  const handleFetchWorkspacesBySlug = async () => {
    await getWorkSpaceBySlug(setWorkSpaces, slug);
  };

  const currentUrl = new URL(location.pathname, window.location.origin);
  // console.log(currentUrl);
  const dateTimeString = new Date().toLocaleString();
  const [date, time] = dateTimeString.split(", ");
  const [nearSpace, setNearSpace] = useState([]);
  const getNearSpacesHandler = async () => {
    await getNearSpaces(setNearSpace, slug);
  };

  useEffect(() => {
    handleFetchWorkspacesBySlug();
    getNearSpacesHandler();
  }, [slug]);

  const workImage =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690177876357.png";

  const optionsOfficeType = [
    { value: "dedicated desk", label: "Dedicated Desk" },
    { value: "private cabin", label: "Private Cabin" },
    { value: "office suite", label: "Office Suite" },
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
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690547136625.png",
      description: "Book and experience the un-conventional work culture.",
    },
    {
      id: 2,
      name: "Hot Desk",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690778227285.png",
      description: "Dynamic workspace for versatile professionals.",
    },
    {
      id: 3,
      name: "Dedicated Desk",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690547110239.png",
      description: "A fixed desk in a shared coworking space.",
    },
    {
      id: 4,
      name: "Private Cabin",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690547123378.png",
      description: "Private office space dedicated to you and your team.",
    },
  ];

  const amenityIcons = [
    {
      id: 1,
      name: "Air Conditioning",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690547147626.png",
    },
    {
      id: 2,
      name: "Coffee and Tea",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690547158884.png",
    },
    {
      id: 3,
      name: "Reception",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690547182985.png",
    },
    {
      id: 4,
      name: "Housekeeping",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690547169805.png",
    },
    {
      id: 5,
      name: "Dedicated Desk",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690547110239.png",
    },
    {
      id: 6,
      name: "Private Cabin",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690547123378.png",
    },
    {
      id: 7,
      name: "High-Speed Wifi",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546657692.png",
    },
    {
      id: 8,
      name: "Meeting Rooms",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546700575.png",
    },
    {
      id: 10,
      name: "Parking",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546750951.png",
    },
    {
      id: 9,
      name: "Comfy Workstation",
      icon: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546687448.png",
    },
  ];

  const [amenities, setAmenities] = useState([]);
  const { amenties } = workSpace;

  useEffect(() => {
    const mainAmenities = amenties?.map((amenity, i) => ({
      ...amenity,
      amenityImg: amenityIcons[i]?.icon,
    }));
    setAmenities(mainAmenities);
  }, [amenties]);
  const explore_icon =
    "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688624307161.png";

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

  const selectChangeHandlerOffice = (officeType) => {
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
  const validationName = () => {
    if (user.name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };
  const validationEmail = () => {
    if (!emailPattern.test(user.email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validationPhone = () => {
    if (!phonePattern.test(user.phone)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const locationPage = window.location.href;
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
      validationName();
      validationEmail();
      validationPhone();
      setLoading(true);
      try {
        await axios.post(
          `${baseUrl}/sendmail`,
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
            office_type: officeType,
            no_of_seats: noSeats,
            move_in: moveIn,
            location: locationPage,
            city: workSpace?.location?.city?.name,
            microlocation: workSpace?.location?.micro_location?.name,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        handleSheet2();
        handleLeadSquared(
          user.name,
          user.email,
          user.phone,
          officeType,
          moveIn,
          noSeats,
          locationPage,
          workSpace?.location?.city?.name
        );
        navigate("/thank-you");
      } catch (error) {
        console.error(error.message);
      }
    } else {
      validationName();
      validationEmail();
      validationPhone();
    }
  };

  console.log(workSpace);

  const handleSheet2 = async () => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/spacite/google_sheets/JlgXOIuxNJHqwITV?tabId=coworking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              date,
              time,
              workSpace?.location?.city?.name,
              workSpace?.location?.micro_location?.name,
              officeType,
              noSeats,
              moveIn,
              user.name,
              user.email,
              user.phone,
              locationPage,
            ],
          ]),
        }
      );
      await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [shake, setShake] = useState(false);

  const animate = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  let lowestPrice = Infinity;

  if (plans && plans.length > 0) {
    for (const plan of plans) {
      if (plan?.price !== undefined && plan.price < lowestPrice) {
        lowestPrice = plan.price;
      }
    }
  }

  const formattedPrice =
    lowestPrice !== Infinity ? lowestPrice.toLocaleString() : "";

  const { seo, images } = workSpace;
  const city = workSpace?.location?.city?.name;
  const decodedDescription = decode(workSpace?.description);
  const [longitude, latitude] = [
    workSpace?.location?.longitude,
    workSpace?.location?.latitude,
  ];
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
        <script type="application/ld+json">{seo?.script}</script>
      </Helmet>
      <div className="container">
        <nav
          aria-label="breadcrumb"
          className="mob_hide"
          style={{ marginTop: "100px" }}
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/coworking-space/${city?.toLowerCase()}`}>{city}</Link>
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
        <hr style={{ color: "rgba(68, 68, 68, 0.3)" }} className="mob_hide" />
      </div>
      <div className="container container_padding">
        <div className="row title_section_property">
          <div className="col-md-9">
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
            <p style={{ color: "#959191" }}>
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
              ₹{formattedPrice}
              /*<span>month</span>
            </p>
          </div>
        </div>
        <div className="row mb_30">
          <div className="col-lg-8">
            <ImageCarousel images={images} />
            <h3 className="property_h3 price_plan_heading">
              {workSpace?.name} Pricing
            </h3>
            {plans?.map((planElem, i) => {
              return coworkingPlans
                ?.filter((elem) => {
                  return elem.name === planElem?.category?.name;
                })
                ?.map((plan, j) => {
                  return (
                    <div className="row category_section_property" key={j}>
                      <div className="col-6 col-sm-8">
                        <div className="desk_icon_box">
                          <img src={plan?.img} alt="desk" />
                        </div>
                        <h4>{plan?.name}</h4>
                        <p className="mob_hide">{plan?.description}</p>
                      </div>
                      <div className="col-6 col-sm-4 desk_icon_box2 mb-0 align-items-end">
                        <div className="d-flex flex-column align-items-end">
                          <p className="facility_name">Starting</p>
                          <p className="facility_name">
                            <span>
                              ₹ {planElem?.price?.toLocaleString()}/-{" "}
                            </span>
                            <span>
                              {planElem?.duration === "year" ? "Year" : "Seat"}
                            </span>
                          </p>
                        </div>

                        <div
                          className="explore_box mob_hide"
                          onClick={animate}
                          style={{ cursor: "pointer" }}
                        >
                          <p>Enquire</p>
                          <img src={explore_icon} alt="explore" />
                        </div>
                      </div>
                    </div>
                  );
                });
            })}
            {/* <hr className="devider_line" /> */}
            {/* <div className="row offers_section_property">
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
            </div> */}

            <hr className="devider_line" />
            <div className="mobile_hide">
              <div className="row amenity_section_property">
                <h3 className="property_h3">Amenities</h3>
                <div className="col-md-4">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934976235.png"
                    alt="wifi"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      High Speed Wifi
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934924079.png"
                    alt="printer"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Coffee & Bar
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934956297.png"
                    alt="parking"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Networking events
                    </p>
                  </div>
                </div>
              </div>
              <div className="row amenity_section_property">
                <div className="col-md-4">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934936416.png"
                    alt="wifi"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Common areas
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934966144.png"
                    alt="printer"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Printing facilities
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934946067.png"
                    alt="parking"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Kitchen facility
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="desk_hide text_mob_center">
              <div className="row amenity_section_property">
                <h3 className="property_h3 amenities_heading">Amenities</h3>
                <div className="col-7">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934976235.png"
                    alt="wifi"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      High Speed Wifi
                    </p>
                  </div>
                </div>
                <div className="col-5">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934924079.png"
                    alt="printer"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Coffee & Bar
                    </p>
                  </div>
                </div>
              </div>
              <div className="row amenity_section_property">
                <div className="col-7">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934956297.png"
                    alt="parking"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Networking events
                    </p>
                  </div>
                </div>
                <div className="col-5">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934936416.png"
                    alt="wifi"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Common areas
                    </p>
                  </div>
                </div>
              </div>
              <div className="row amenity_section_property">
                <div className="col-7">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934966144.png"
                    alt="printer"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Printing facilities
                    </p>
                  </div>
                </div>
                <div className="col-5">
                  <img
                    className="property_icon"
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1696934946067.png"
                    alt="parking"
                  />
                  <div>
                    <p className="facility_name facility_name_property">
                      Kitchen facility
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="devider_line" />
            <div className="row map">
              <h3 className="mt30 mb-0 property_h3">
                {workSpace?.name + " " + workSpace?.location?.city?.name} Google
                location
              </h3>
              <p>{workSpace?.location?.address}</p>
              <div className="map_box">
                <LeafletMap
                  latitude={latitude}
                  longitude={longitude}
                  name={workSpace?.name}
                />
              </div>
            </div>
            <hr className="devider_line" />
            <div className="row about_property_section">
              <h3 className="property_h3">Coworking Space</h3>
              {decodedDescription.trim() === "<p>empty</p>" ? (
                <div className="about_property_text">
                  {workSpace?.name} is the best coworking space in{" "}
                  {workSpace?.location?.micro_location?.name}
                </div>
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: workSpace?.description }}
                  className="about_property_text"
                />
              )}
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
                        onBlur={validationName}
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
                        onBlur={validationEmail}
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
                        onBlur={validationPhone}
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
                <h4 className="property_h4 text-align-center">
                  Got questions or want to talk to someone?
                </h4>
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
      <div className="container mb-5 container_padding">
        <h2 className="text_left mb-5 d_block">
          Similar Coworking Spaces in
          <span className="city_span d_block">
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
                          address={
                            (
                              workspace?.location?.micro_location?.name +
                              workspace?.location?.city?.name
                            )?.length > 26
                              ? (
                                  workspace?.location?.micro_location?.name +
                                  ", " +
                                  workspace?.location?.city?.name
                                ).substring(0, 26) + "..."
                              : workspace?.location?.micro_location?.name +
                                ", " +
                                workspace?.location?.city?.name
                          }
                          plans={workspace?.plans
                            ?.reduce(
                              (prev, current) =>
                                current.price < prev.price ? current : prev,
                              { price: Infinity }
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
      {/* <div className="desk_hide fixed_div">
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
          className={shake ? "shake fix_btn globalBtn" : "fix_btn globalBtn"}
          style={{ width: "144px" }}
        >
          Enquire Now
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
            cityName={workSpace?.location?.city?.name}
            microlocation={workSpace?.location?.micro_location?.name}
          />
        </Modal>
      </div> */}
      <nav className="navbar fixed-bottom navbar-light bg-white desk_hide">
        <div className="container-fluid">
          <div className="starting_price">
            <p>Starting</p>
            <p>
              ₹ {formattedPrice}
              /- <span>month</span>
            </p>
          </div>
          <button
            onClick={openModal}
            className={shake ? "shake fix_btn globalBtn" : "fix_btn globalBtn"}
            style={{ width: "144px" }}
          >
            Enquire Now
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
              cityName={workSpace?.location?.city?.name}
              microlocation={workSpace?.location?.micro_location?.name}
            />
          </Modal>
        </div>
      </nav>
    </>
  );
};

export default PropertyPage;
