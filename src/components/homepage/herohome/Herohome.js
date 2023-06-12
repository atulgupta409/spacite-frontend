import React from "react";
import Section1 from "../section1/Section1";
import Section2 from "../section2/Section2";
import TopCities from "../topCities/TopCities";
import Topgurgaon from "../topSpaceGurgaon/Topgurgaon";
import Topbangalore from "../topSpaceBangalore/Topbangalore";
import Facility from "../facility/Facility";
import Topmumbai from "../topSpaceMumbai/Topmumbai";
import Toppune from "../topSpacePune/Toppune";
import Findspace from "../findSpace/Findspace";

function Herohome() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <TopCities />
      <Topgurgaon />
      <Topbangalore />
      <Facility />
      <Topmumbai />
      <Toppune />
      <Findspace />
    </div>
  );
}

export default Herohome;
