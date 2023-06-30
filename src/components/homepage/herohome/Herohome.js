import React from "react";
import Section1 from "../section1/Section1";
import Section2 from "../section2/Section2";
import TopCities from "../topCities/TopCities";
import Facility from "../facility/Facility";
import HomeContact from "../home-contact/HomeContact";
import PremiumBrands from "../premium-brands/PremiumBrands";
import Partner from "../partner/Partner";
import Faq from "../faq/Faq";
import NearCoworking from "../nearCoworking/NearCoworking";
import TopCitiesMob from "../topCities/TopCitiesMob";
import SpaceExpert from "../spaceExpert/SpaceExpert";
import PopularCoworking from "../popularCoworking/PopularCoworking";

function Herohome() {
  return (
    <div>
      <Section1 />
      <NearCoworking />
      <Section2 />
      <div className="desk_hide">
        <Facility />
      </div>
      <div className="desk_hide">
        <TopCitiesMob />
        <SpaceExpert />
        <PopularCoworking />
      </div>
      <div className="mob_hide">
        <TopCities />
      </div>
      <div className="mob_hide">
        <Facility />
        <HomeContact />
      </div>
      <PremiumBrands />
      <Partner />
      <Faq />
    </div>
  );
}

export default Herohome;
