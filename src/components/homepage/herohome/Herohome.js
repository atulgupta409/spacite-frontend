import React from "react";
import Section1 from "../section1/Section1";
import Section2 from "../section2/Section2";
import TopCities from "../topCities/TopCities";
import Topgurgaon from "../topSpaceGurgaon/Topgurgaon";
import Topbangalore from "../topSpaceBangalore/Topbangalore";
import Facility from "../facility/Facility";
import Topmumpune from "../topMumPune/Topmumpune";
import HomeContact from "../home-contact/HomeContact";
import PremiumBrands from "../premium-brands/PremiumBrands";
import Partner from "../partner/Partner";
import Faq from "../faq/Faq";

function Herohome() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <TopCities />
      <Topgurgaon />
      <Topbangalore />
      <Facility />
      <Topmumpune />
      <HomeContact />
      <PremiumBrands />
      <Partner />
      <Faq />
    </div>
  );
}

export default Herohome;
