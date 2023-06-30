import React from "react";
import section2_banner from "../../media/home_bg/section2_patterns.png";
import "./Section2.css";
import spaces from "../../media/home_bg/space.png";
import cities from "../../media/home_bg/cities.png";
import country from "../../media/home_bg/country.png";

function Section2() {
  return (
    <div
      style={{ backgroundImage: `url(${section2_banner})` }}
      className="main_banner2 mob_hide"
    >
      <div className="container">
        <h3 className="sub_heading">
          <span>Find</span> Your Office Space With Spacite
        </h3>
        <div className="section_heading">
          <h2>
            Spacite office space platform, allows users to search and book
            Coworking spaces and Virtual offices.
          </h2>
        </div>
        <div className="row mb-5">
          <div className="col-4 find_space">
            <img src={spaces} alt="spaces" />
            <p>
              9500+ <span>Spaces</span>
            </p>
          </div>
          <div className="col-4 find_space">
            <img src={cities} alt="cities" />
            <p>
              7+
              <span>Cities</span>
            </p>
          </div>
          <div className="col-4 find_space">
            <img src={country} alt="country" />
            <p>
              No. 1 <span>in country</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
