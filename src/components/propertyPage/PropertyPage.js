import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./PropertyPage.css";
import image from "../media/propertyPage.png";
import wifi from "../media/wifi_icon.png";
import Select from "react-select";

const PropertyPage = () => {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 1];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);
  const [selectedOption, setSelectedOption] = useState(null);

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
        <div className="row title_section">
          <div className="col-md-6">
            <h2 className="title_heading">
              10 Gulmohar by <span className="title_color">Ideashacks</span>
            </h2>
            <p>JMD Megapolis, Gurugram</p>
          </div>
          <div className="col-md-3">
            <p>Starting From</p>
            <p className="price_section">
              ₹6200/<span>Month</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={image} className="d-block w-100" alt="..." />
                </div>
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
            <div className="row amenity_section">
              <div className="col-md-4">
                <img src={wifi} alt="wifi" />
                <p className="facility_name">High Speed Wifi</p>
                <p>
                  High-Speed Wifi, HDTVs everything you need to do your best
                  work.
                </p>
              </div>
              <div className="col-md-4">
                <img src={wifi} alt="wifi" />
                <p className="facility_name">High Speed Wifi</p>
                <p>
                  High-Speed Wifi, HDTVs everything you need to do your best
                  work.
                </p>
              </div>
              <div className="col-md-4">
                <img src={wifi} alt="wifi" />
                <p className="facility_name">High Speed Wifi</p>
                <p>
                  High-Speed Wifi, HDTVs everything you need to do your best
                  work.
                </p>
              </div>
            </div>
            <div className="row about_property_section">
              <h3>About this property</h3>
              <p>
                Are you searching for a fully furnished working space in
                Gurgaon? Look at one of the best collaborating spaces-10
                Gulmohar by ideahacks, situated in Balola, Gurgaon.
              </p>
              <p>
                It offers flexible day pass, hot desks and dedicated desks and a
                common area for different business purposes. It offers advanced
                key conveniences like business grade wifi, video conferencing,
                cleaned floors, TV set, garden, AC, projectors, printing and fax
                facilities etc.
              </p>
              <p>
                This place suits every business model type such as it's a
                company, specialists, finance managers, SMEs, startups and many
                more. Furthermore, it also consists of smart meeting rooms where
                you can examine significant interviews and business discussions.
              </p>
              <p>
                Book seats for yourself as well as your group in this wonderful
                co-working space and speed up your business process. It has
                simple admittance to the public vehicle for day-to-day
                commuters. Do check!
              </p>
            </div>
            <div className="row category_section">
              <div className="col-md-6">
                <h3>Dedicated Desk</h3>
                <p>A fixed desk in a shared coworking space.</p>
                <p className="facility_name">Starting From</p>
                <p className="facility_name">
                  <span>₹468/</span>Seat
                </p>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row category_section">
              <div className="col-md-6">
                <h3>Private Cabin</h3>
                <p>A fixed desk in a shared coworking space.</p>
                <p className="facility_name">Starting From</p>
                <p className="facility_name">
                  <span>₹468/</span>Seat
                </p>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row category_section">
              <div className="col-md-6">
                <h3>Virtual Office</h3>
                <p>A fixed desk in a shared coworking space.</p>
                <p className="facility_name">Starting From</p>
                <p className="facility_name">
                  <span>₹468/</span>Seat
                </p>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row offers_section">
              <h3>What this Space Offers</h3>
              <div className="row">
                <div className="col-md-4">Wifi</div>
                <div className="col-md-4">Comfy Workstation</div>
                <div className="col-md-4">Meeting Rooms</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact_form_box contact_form">
              <h4>Enquire Now</h4>
              <form>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputtext"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="select_option">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionsOfficeType}
                        placeholder="Office Type"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="select_option">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionSeats}
                        placeholder="No. of Seats"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="select_option">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionsMoveIn}
                        placeholder="Move In"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="submit"
                      className="globalBtn w-100 contact_btn"
                    >
                      Find your space
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default PropertyPage;
