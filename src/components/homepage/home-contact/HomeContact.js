import React, { useState } from "react";
import contactImg from "../../media/home_contact_img.png";
import "./HomeContact.css";
import Select from "react-select";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function HomeContact() {
  const navigate = useNavigate();
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

  // const [selectedOption, setSelectedOption] = useState(null);
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
  // console.log(officeType);
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

  return (
    <div className="main_banner2 home_contact_main">
      <div className="container">
        <div className="row">
          <div className="col-4 desk_hide">
            <img src={contactImg} alt="contact" className="img-fluid" />
          </div>
          <div className="col-8 desk_hide">
            <div className="d_flex_mob">
              <h2>
                Let RoBi find your perfect office at{" "}
                <span className="top_city_span">Spacite</span>
              </h2>
            </div>
          </div>
        </div>
        <h2 className="mob_hide">
          Let RoBi find your perfect office at{" "}
          <span className="top_city_span">Spacite</span>
        </h2>
        <div className="row contact_section">
          <div className="col-md-6 home_contact_img">
            <img src={contactImg} alt="contact" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="contact_form_box">
              <h4>Please Share Your Details With RoBi</h4>
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
                      placeholder="Email*"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="email"
                      value={user.email}
                      aria-describedby="emailHelp"
                      onChange={inputChangeHandler}
                      onBlur={validation}
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
                      onBlur={validation}
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
