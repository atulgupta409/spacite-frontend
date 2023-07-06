import React from "react";
import { NavLink } from "react-router-dom";

function PageNotExist() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img
        src="https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688628578317.png"
        alt="page-not-found"
        width="300px"
      />
      <NavLink to="/">
        <button className="globalBtn">Back to home</button>
      </NavLink>
    </div>
  );
}

export default PageNotExist;
