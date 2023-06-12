import React, { useState } from "react";
import "./Section1.css";
import pune from "../../media/city-icon/Pune.png";
import noida from "../../media/city-icon/noida.png";
import gurugram from "../../media/city-icon/Gurugram.png";
import mumbai from "../../media/city-icon/Mumbai.png";
import bangalore from "../../media/city-icon/bangalore 1.png";
import ahemdabad from "../../media/city-icon/Ahemdabad.png";
import hyderabad from "../../media/city-icon/Hyderabad.png";
import Select from "react-select";
import main_banner from "../../media/main_banner.png";

function Section1() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <section
        className="main_banner"
        style={{
          backgroundImage: `url(${main_banner})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_search">
                <h1>
                  <span className="heading_span">
                    <span className="find">Find</span>{" "}
                    <span className="cowrk">Coworking</span>
                    <span style={{ color: "#d09cff" }} className="spaces">
                      {" "}
                      Spaces
                    </span>{" "}
                    In India
                  </span>
                </h1>

                <div className="inner-content-box">
                  <div className="city-box">
                    <div className="city_item">
                      <img src={pune} alt="pune" />
                      <p>Pune</p>
                    </div>
                    <div className="city_item">
                      <img src={noida} alt="noida" />
                      <p>Noida</p>
                    </div>
                    <div className="city_item">
                      <img src={gurugram} alt="grugram" />
                      <p>Gurugram</p>
                    </div>
                    <div className="city_item">
                      <img src={mumbai} alt="mumbai" />
                      <p>Mumbai</p>
                    </div>
                    <div className="city_item">
                      <img src={bangalore} alt="bangalore" />
                      <p>Bangalore</p>
                    </div>
                    <div className="city_item">
                      <img src={ahemdabad} alt="ahemdabad" />
                      <p>Ahemdabad</p>
                    </div>
                    <div className="city_item">
                      <img src={hyderabad} alt="hyderabad" />
                      <p>Hyderabad</p>
                    </div>
                  </div>
                  <div className="content-box2">
                    <div className="home_dropdown">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="What are you looking for?"
                      />
                    </div>
                    <div className="home_dropdown">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Select city"
                      />
                    </div>

                    <button className="globalBtn">Search your space</button>
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

export default Section1;
