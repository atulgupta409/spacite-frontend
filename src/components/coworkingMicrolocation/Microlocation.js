import React, { useContext, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { CityContext } from "../context/CityContext";

function Microlocation() {
  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 2];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);
  let lastElem2 = pathArray[pathArray.length - 1];
  let microlocation = lastElem2.charAt(0).toUpperCase() + lastElem2.slice(1);
  let microName = microlocation.split("-").join(" ");

  const { microlocations, handleFetchMicrolocations } = useContext(CityContext);

  useEffect(() => {
    handleFetchMicrolocations();
  }, [cityName]);

  return (
    <div style={{ marginTop: "100px" }}>
      <nav aria-label="breadcrumb" style={{ paddingLeft: "20px" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Coworking Space</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={`/coworking-space/${cityName.toLowerCase()}`}>
              {cityName}
            </Link>
          </li>
          <li
            style={{
              color: "#d09cff",
              fontWeight: "500",
            }}
            className="breadcrumb-item"
          >
            {microName}
          </li>
        </ol>
      </nav>
      <hr style={{ color: "rgba(68, 68, 68, 0.1)" }} />
      <div className="container">
        <div className="microlocation_tab">
          <ul>
            {microlocations?.map((elem, i) => {
              return (
                <div key={i} className="d-inline-block">
                  <NavLink
                    to={`/coworking-space/${cityName.toLowerCase()}/${elem.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  >
                    <li>{elem.name}</li>
                  </NavLink>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Microlocation;
