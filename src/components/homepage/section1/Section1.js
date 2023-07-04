import React, { useState, useContext, useEffect } from "react";
import "./Section1.css";
import Select from "react-select";
import main_banner from "../../media/main_banner.png";
import { CityContext } from "../../context/CityContext";
import { NavLink } from "react-router-dom";

function Section1() {
  const { allCities, handleFetchCities } = useContext(CityContext);

  useEffect(() => {
    handleFetchCities();
  }, []);

  const optionsLookingFor = [
    { value: "Coworking Space", label: "Coworking Space" },
    { value: "Virtual Office", label: "Virtual Office" },
  ];
  const optionsCity = [
    { value: "Pune", label: "Pune" },
    { value: "Noida", label: "Noida" },
    { value: "Gurgaon", label: "Gurgaon" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Bangalore", label: "Bangalore" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <section className="main_banner main_banner_section1">
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
                    {allCities?.map((elem, i) => {
                      return (
                        <div key={i}>
                          <NavLink
                            to={`/coworking-space/${elem.city.name.toLowerCase()}`}
                          >
                            <div className="city_item">
                              <img src={elem?.cityImg} alt={elem.city.name} />
                              <p>{elem?.city.name}</p>
                            </div>
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                  <div className="content-box2">
                    <div className="home_dropdown">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionsLookingFor}
                        placeholder="What are you looking for?"
                      />
                    </div>
                    <div className="home_dropdown">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={optionsCity}
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
