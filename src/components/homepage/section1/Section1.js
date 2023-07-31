import React, { useState, useContext, useEffect } from "react";
import "./Section1.css";
import Select from "react-select";
import { CityContext } from "../../context/CityContext";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Section1() {
  const { allCities } = useContext(CityContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(handleFetchCities());
  // }, []);

  const optionsLookingFor = [
    { value: "Coworking Space", label: "Coworking Space" },
    // { value: "Virtual Office", label: "Virtual Office" },
  ];
  const optionsCity = [
    { value: "Pune", label: "Pune" },
    { value: "Noida", label: "Noida" },
    { value: "Gurugram", label: "Gurugram" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Bangalore", label: "Bangalore" },
  ];

  const [selectedType, setSelectedType] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const notify = () => toast.error("Please select all the required field");
  const searchHandler = () => {
    try {
      const type = selectedType.value.split(" ").join("-").toLowerCase();
      const city = selectedCity.value.split(" ").join("-").toLowerCase();
      navigate(`/${type}/${city}`);
    } catch (error) {
      notify();
    }
  };

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
                            to={`/coworking-space/${elem?.name.toLowerCase()}`}
                          >
                            <div className="city_item">
                              <img src={elem?.img} alt={elem?.name} />
                              <p>{elem?.name}</p>
                            </div>
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                  <ToastContainer position="top-center" />
                  <div className="content-box2">
                    <div className="home_dropdown">
                      <Select
                        defaultValue={selectedType}
                        onChange={setSelectedType}
                        options={optionsLookingFor}
                        placeholder="What are you looking for?"
                      />
                    </div>
                    <div className="home_dropdown">
                      <Select
                        defaultValue={selectedCity}
                        onChange={setSelectedCity}
                        options={optionsCity}
                        placeholder="Select city"
                      />
                    </div>
                    <button className="globalBtn" onClick={searchHandler}>
                      Search your space
                    </button>
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
