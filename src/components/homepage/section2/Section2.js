import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <div
      style={{
        backgroundImage: `url(https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688620396063.png)`,
      }}
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
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760639766.png"
              alt="spaces"
            />
            <p>
              9500+ <span>Spaces</span>
            </p>
          </div>
          <div className="col-4 find_space">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760667515.png"
              alt="cities"
            />
            <p>
              7+
              <span>Cities</span>
            </p>
          </div>
          <div className="col-4 find_space">
            <img
              src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689760654196.png"
              alt="country"
            />
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
