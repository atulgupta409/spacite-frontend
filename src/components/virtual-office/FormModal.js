import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import baseUrl from "../../environment/api-config";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function FormModal({ closeModal, location }) {
  const navigate = useNavigate();

  const optionsPlanType = [
    { value: "gst registration", label: "GST Registartion" },
    { value: "business registration", label: "Business Registration" },
    { value: "mailing address", label: "Mailing Address" },
    { value: "any/all", label: "Any/All" },
  ];
  const optionsWhenTo = [
    { value: "immediate", label: "Immediate" },
    { value: "within this month", label: "Within This Month" },
    { value: "1-2 month", label: "1-2 Month" },
    { value: "3-4 month", label: "3-4 Month" },
    { value: "after 4 month", label: "After 4 Month" },
  ];
  const [planType, setPlanType] = useState("");
  const [whenTo, setWhenTo] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cityError, setCityError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);

  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const selectChangeHandlerPlan = (planType) => {
    setPlanType(planType?.value);
  };
  const selectChangeHandlerWhenTo = (WhenTo) => {
    setWhenTo(WhenTo?.value);
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

  const validationCity = () => {
    if (user.city.trim() === "") {
      setCityError("City is required");
    } else {
      setCityError("");
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

  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      user.name.trim() !== "" &&
      user.city.trim() !== "" &&
      emailPattern.test(user.email) &&
      phonePattern.test(user.phone)
    ) {
      setUser({ name: "", email: "", phone: "", city: "" });
      setWhenTo("");
      setPlanType("");
      validationName();
      validationCity();
      validationEmail();
      validationPhone();
      setLoading(true);
      try {
        const response = await axios.post(
          `${baseUrl}/sendmail`,
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
            your_city: user.city,
            plan_type: planType,
            when_to: whenTo,
            location: location,
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
      validationName();
      validationEmail();
      validationPhone();
      validationCity();
    }
  };

  const handleSheet = async () => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/spacite/google_sheets/JlgXOIuxNJHqwITV?tabId=virtual-office",
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
              planType,
              whenTo,
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

  return (
    <div className="modal_form_main">
      <div className="cross_icon">
        <button>
          <RxCross2 className="close_icon" onClick={closeModal} />
        </button>
      </div>
      <div className="close_icon_box">
        <h3 className="req_box">Request Call Back</h3>
      </div>
      <form onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-12 mb-4">
            <input
              type="text"
              className="form-control modal_form_input"
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
              className="form-control modal_form_input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={inputChangeHandler}
              onBlur={validationEmail}
              name="email"
              value={user.email}
            />
            {emailError && <p className="error_validate">{emailError}</p>}
          </div>
          <div className="col-md-12 mb-4">
            <input
              type="text"
              placeholder="Phone*"
              className="form-control modal_form_input"
              id="exampleInputEmail1"
              name="phone"
              value={user.phone}
              aria-describedby="emailHelp"
              onChange={inputChangeHandler}
              onBlur={validationPhone}
            />
            {phoneError && <p className="error_validate">{phoneError}</p>}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <input
              type="text"
              placeholder="City*"
              className="form-control modal_form_input"
              id="exampleInputEmail1"
              name="city"
              value={user.city}
              aria-describedby="emailHelp"
              onChange={inputChangeHandler}
              onBlur={validationCity}
            />
            {cityError && <p className="error_validate">{cityError}</p>}
          </div>
          <div className="col-md-6 mb-4">
            <div className="select_option_property">
              <Select
                value={optionsPlanType.find(
                  (option) => option.value === planType
                )}
                onChange={selectChangeHandlerPlan}
                options={optionsPlanType}
                placeholder="Plan Type"
                inputProps={{
                  name: "Plan type",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="select_option_property">
              <Select
                defaultValue={whenTo}
                onChange={selectChangeHandlerWhenTo}
                options={optionsWhenTo}
                placeholder="When To"
                inputProps={{
                  name: "When to",
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
      <div className="form_spacite_logo">
        <img
          src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688623571085.png"
          alt="logo"
          className="img-fluid"
        />
      </div>
      <div className="popup_form_footer">
        <div className="popup_cowork">Coworking Space</div>
        <div className="dot"></div>
        <div className="popup_cowork">Virtual Office</div>
      </div>
    </div>
  );
}

export default FormModal;
