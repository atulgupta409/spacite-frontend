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

  // const [selectedOption, setSelectedOption] = useState(null);
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
              user.query,
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
    <>
      <section
        id="contact_banner_area"
        style={{
          backgroundImage: `url("https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688627675212.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner_text text-center white_text">
                <h3>Get In Touch</h3>
                <p>
                  Drop us a line or visit us for a cup of tea!
                  <br />
                  We glad to see our friends!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact_info_sec">
        <div className="container">
          <div className="row info_row">
            <div className="col-md-7 col-12">
              <div className="form_col">
                <h3>Send your request</h3>
                <div className="contact_page_form">
                  <form onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-12 mb-2">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name*"
                          value={user.name}
                          onChange={inputChangeHandler}
                          onBlur={validation}
                          required
                        />
                      </div>
                      <div className="col-12 mb-2">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="E-Mail Id*"
                          value={user.email}
                          onChange={inputChangeHandler}
                          onBlur={validation}
                          required
                        />
                      </div>
                      <div className="col-12 mb-2">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone No.*"
                          value={user.phone}
                          onChange={inputChangeHandler}
                          onBlur={validation}
                          required
                        />
                      </div>
                      <div className="col-6 mb-2">
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
                      <div className="col-6 mb-2">
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
                      <div className="col-12 mb-2">
                        <textarea
                          className="form-control"
                          name="query"
                          placeholder="Your Query*"
                          value={user.query}
                          onChange={inputChangeHandler}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12 form_btn text-center">
                        <button type="submit" className="globalBtn contactBtn">
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="contact_img">
                    <img
                      src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688627764667.png"
                      alt="contact"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="contact_info">
                    <h3>Contact Information</h3>
                    <hr />
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6 mb-4">
                      <div className="contact_icon_box">
                        <div className="call_icon">
                          <IoMdCall />
                        </div>
                        <div>
                          <h5>Phone</h5>
                          <p>
                            <a href="tel:+919999108078">+91 9999 10 8078</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 mb-4">
                      <div className="contact_icon_box">
                        <div className="call_icon">
                          <AiOutlineMail />
                        </div>
                        <div className="email_box_contact">
                          <h5>Email</h5>
                          <p>
                            <a href="mailto:thespacite@gmail.com">
                              thespacite@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
