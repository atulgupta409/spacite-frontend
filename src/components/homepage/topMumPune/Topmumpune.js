import React from "react";
import Topmumbai from "./Topmumbai";
import Toppune from "./Toppune";
import main_banner from "../../media/top_cwrking_banner.png";

function Topmumpune() {
  return (
    <div
      className="main_banner2"
      style={{ backgroundImage: `url(${main_banner})` }}
    >
      <Topmumbai />
      <Toppune />
    </div>
  );
}

export default Topmumpune;
