import React from "react";
import pageNotFound from "../media/page-not-found.png";
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
      <img src={pageNotFound} alt="page-not-found" width="300px" />
      <NavLink to="/">
        <button className="globalBtn">Back to home</button>
      </NavLink>
    </div>
  );
}

export default PageNotExist;
