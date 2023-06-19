import React, { useState } from "react";
import main_banner from "../../media/home_contact_banner.png";
import contactImg from "../../media/home_contact_img.png";
import "./HomeContact.css";
import Select from "react-select";

function HomeContact() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
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
                        options={options}
                        placeholder="Office Type"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div style={{ width: "100%" }}>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
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
                        options={options}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
