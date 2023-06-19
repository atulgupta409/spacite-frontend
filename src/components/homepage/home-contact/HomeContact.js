import React, { useState } from "react";
import main_banner from "../../media/home_contact_banner.svg";
import contactImg from "../../media/home_contact_img.png";
import "./HomeContact.css";
import Select from "react-select";

function HomeContact() {
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

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div
      className="main_banner2"
      style={{ backgroundImage: `url(${main_banner})` }}
    >
      <div className="container">
        <h2>
          Find your space with <span className="top_gurgaon_span">Spacite</span>
        </h2>
        <div className="row contact_section">
          <div className="col-md-6">
            <img src={contactImg} alt="contact" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="contact_form_box">
              <h4>Please Share Your Details With Robi</h4>
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
                    <div style={{ width: "100%" }}>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionsOfficeType}
                        placeholder="Office Type"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div style={{ width: "100%" }}>
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
                    <div style={{ width: "100%" }}>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionsMoveIn}
                        placeholder="Move In"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button type="submit" className="globalBtn w-100">
                      Find your space
                    </button>
                  </div>
                </div>
              </form>
              <div className="robi_mail_box">
                <a href="mailto: robi@spacite.com">
                  <span>Email : </span>robi@spacite.com
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
