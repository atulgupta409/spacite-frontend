import React, { useState } from "react";
import "./Contact.css";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../environment/api-config";

function Contact() {
  const navigate = useNavigate();
  const optionsOfficeType = [
    { value: "Coworking Space", label: "Coworking Space" },
    { value: "Virtual Office", label: "Virtual Office" },
    { value: "Private Office", label: "Private Office" },
    { value: "Collaboration", label: "Collaboration" },
    { value: "Any/Others", label: "Any/Others" },
  ];

  const [officeType, setOfficeType] = useState("");
  const [noSeats, setNoSeats] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
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

  const location = window.location.href;
  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      user.name.trim() !== "" &&
      emailPattern.test(user.email) &&
      phonePattern.test(user.phone)
    ) {
      setUser({ name: "", email: "", phone: "", query: "" });
      setNoSeats(null);
      setOfficeType("");
      validation();
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
            query: user.query,
            location,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        navigate("/thank-you");
        handleSheet();
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
        "https://v1.nocodeapi.com/spacite/google_sheets/JlgXOIuxNJHqwITV?tabId=coworking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              new Date().toLocaleString(),
              officeType,
              noSeats,
              user.query,
              location,
              user.name,
              user.email,
              user.phone,
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
    <>
          <div className="contact_us_page">
            <div className="contact_image">
              <img className="contact_img_height" src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1697174841865.jpg"/>
            </div>
          <div className="contactUs_form">
            <h1 className="connect_heading">Connect with Spacite</h1>
            <p>Best Office Spaces across Top Indian Cities</p>
                  <form onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-12 mb-2 input_box">
                        <input
                          type="text"
                          name="name"
                          className="form-control input_form"
                          placeholder="Name*"
                          value={user.name}
                          onChange={inputChangeHandler}
                          onBlur={validation}
                          required
                        />
                      </div>
                      <div className="col-12 mb-2 input_box">
                        <input
                          type="text"
                          name="email"
                          className="form-control input_form"
                          placeholder="Email*"
                          value={user.email}
                          onChange={inputChangeHandler}
                          onBlur={validation}
                          required
                        />
                      </div>
                      <div className="col-12 mb-2 input_box">
                        <input
                          type="text"
                          name="phone"
                          className="form-control input_form"
                          placeholder="Phone*"
                          value={user.phone}
                          onChange={inputChangeHandler}
                          onBlur={validation}
                          required
                        />
                      </div>
                      <div className="col-6 mb-2 input_box">
                        <Select
                        className="iam_interested"
                          value={optionsOfficeType.find(
                            (option) => option.value === officeType
                          )}
                          onChange={selectChangeHandlerOffice}
                          options={optionsOfficeType}
                          placeholder="I am Interested in*"
                          inputProps={{
                            name: "Office type",
                          }}
                        />
                      </div>
                      <div className="col-6 mb-2">
                      <button type="submit" className="contactUsBtn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  <div>
                    <span className="span_tag"><img className="icon_img" src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1697179731859.png"/><a href="+91 9355289999" className="anchor_tag"> +91- 9355289999</a></span>
                  <span className="span_tag"><img className="icon_img" src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1697179721935.png"/><a href="thespacite@gmail.com" className="anchor_tag"> thespacite@gmail.com</a></span>
                  </div>
                </div>
          </div>
    </> 
  );
}

export default Contact;
