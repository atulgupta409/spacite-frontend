import React, { useState, useEffect } from "react";
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
import { Helmet } from "react-helmet-async";
import { getSeo } from "../../service/Service";
import { useLocation } from "react-router-dom";

function Herohome() {
  const location = useLocation();
  const currentUrl = new URL(location.pathname, window.location.origin);

  const [defaultSeo, setDefaultSeo] = useState({
    title: "Spacite - find best coworking spaces",
    description: "Spacite - find best coworking spaces",
    keywords: "Default Keywords",
    open_graph: {
      title: "Spacite - find best coworking spaces",
      description: "Spacite - find best coworking spaces",
    },
    twitter: {
      title: "Spacite - find best coworking spaces",
      description: "Spacite - find best coworking spaces",
    },
  });

  const [seo, setSeo] = useState(defaultSeo);

  const handleFetchSeo = async () => {
    try {
      const response = await getSeo(setSeo, "home", defaultSeo);
    } catch (error) {
      console.error(error);
      setSeo(defaultSeo);
    }
  };
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLatitude(position.coords.latitude);
  //         setLongitude(position.coords.longitude);
  //       },
  //       (error) => {
  //         console.error("Error getting geolocation:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }, []);
  useEffect(() => {
    handleFetchSeo();
  }, []);

  return (
    <div>
      <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <meta name="keywords" content={seo?.keywords} />
        <meta property="og:title" content={seo?.open_graph?.title} />
        <meta
          property="og:description"
          content={seo?.open_graph?.description}
        />
        <meta name="twitter:title" content={seo?.twitter?.title} />
        <meta name="twitter:description" content={seo?.twitter?.description} />
        <link rel="canonical" href={currentUrl.href} />
        <meta name="robots" content={seo?.robots} />
        {/* <meta property="og:image" content={workSpaces?.images[0]?.image} />
        <meta property="og:image:alt" content={workSpaces?.images[0]?.alt} />
        <meta property="twitter:image" content={workSpaces?.images[0]?.image} />
        <meta
          property="twitter:image:alt"
          content={workSpaces?.images[0]?.alt}
        /> */}
      </Helmet>
      <Section1 />
      {/* <NearCoworking /> */}
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
