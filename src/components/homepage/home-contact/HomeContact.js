import React, { useState } from "react";
import "./HomeContact.css";
import Select from "react-select";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../../environment/api-config";
import {handleLeadSquared} from "../../service/ContactFormFunctions"

function HomeContact({ city, microlocation }) {
  const navigate = useNavigate();
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

  const [officeType, setOfficeType] = useState("");
  const [noSeats, setNoSeats] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const dateTimeString = new Date().toLocaleString();
 const [date, time] = dateTimeString.split(', ');

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

  const location = window.location.href;
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
            location,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        handleSheet();
        handleLeadSquared(user.name, user.email, user.phone, officeType, moveIn, noSeats, location, city);
        navigate("/thank-you");
      } catch (error) {
        console.error(error);
      }
    } else {
      validationName();
      validationEmail();
      validationPhone();
    }
  };

  const handleSheet = async () => {
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
              city,
              microlocation,
              officeType,
              noSeats,
              moveIn,
              user.name,
              user.email,
              user.phone,
              location,
            ],
          ]),
        }
      );
      await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  
  
  return (
    <div className="main_banner2 home_contact_main">
      <div className="container">
        <h2 className="mob_hide">
          Let RoBi find your perfect office at{" "}
          <span className="top_city_span">Spacite</span>
        </h2>
        <div className="row contact_section">
          <div className="col-md-6 home_contact_img">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688621027741.png"
              alt="contact"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className="contact_form_box">
              <h4 className="mob_hide">Please Share Your Details With RoBi</h4>
              <div className="row mb-3">
                <div className="col-3 desk_hide d-flex align-items-center p-0">
                  <img
                    src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688621027741.png"
                    alt="contact"
                    className="img-fluid desk_hide"
                  />
                </div>
                <div className="col-9 desk_hide p-0">
                  <div className="d_flex_mob">
                    <h2>
                      Let RoBi find your perfect office at{" "}
                      <span className="top_city_span">Spacite</span>
                    </h2>
                  </div>
                </div>
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
                      onBlur={validationName}
                    />
                    {nameError && <p className="error_validate">{nameError}</p>}
                  </div>
                  <div className="col-md-12 mb-4">
                    <input
                      type="email"
                      placeholder="Email*"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="email"
                      value={user.email}
                      aria-describedby="emailHelp"
                      onChange={inputChangeHandler}
                      onBlur={validationEmail}
                    />
                    {emailError && (
                      <p className="error_validate">{emailError}</p>
                    )}
                  </div>
                  <div className="col-md-12 mb-4">
                    <input
                      type="text"
                      placeholder="Phone*"
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
                  <div className="col-12 col-sm-6 mb-4">
                    <div style={{ width: "100%" }}>
                      <Select
                        // defaultValue={officeType}
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
                  <div className="col-12 col-sm-6 mb-4">
                    <div style={{ width: "100%" }}>
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
                    <div style={{ width: "100%" }}>
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
                    <button type="submit" className="globalBtn w-100">
                      {loading ? "sending..." : "Find your space"}
                    </button>
                  </div>
                </div>
              </form>
              <div className="robi_mail_box">
                <a href="mailto:thespacite@gmail.com">
                  <span>Email : </span>thespacite@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
