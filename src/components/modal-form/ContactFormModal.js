import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import baseUrl from "../../environment/api-config";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function ContactFormModal({ closeModal }) {
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
    <div>
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
                value={optionSeats.find((option) => option.value === noSeats)}
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
    </div>
  );
}

export default ContactFormModal;
