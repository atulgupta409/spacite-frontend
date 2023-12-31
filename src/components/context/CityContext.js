import React, { createContext, useState, useEffect } from "react";
import { consts } from "@itseasy21/react-elastic-carousel";
import { getSeo } from "../service/Service";

// Create the CityContext
export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  let cities = [
    {
      id: 1,
      name: "Gurugram",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546502492.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690797442284.jpg",
    },
    {
      id: 2,
      name: "Mumbai",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546528936.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115449838.png",
    },
    {
      id: 3,
      name: "Bangalore",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546467957.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115481557.png",
    },
    {
      id: 4,
      name: "Pune",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546552914.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115398091.png",
    },
    {
      id: 5,
      name: "Hyderabad",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546515882.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690796061086.jpg",
    },
    {
      id: 6,
      name: "Noida",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690546538196.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1690797453434.jpg",
    },
  ];

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
  const [path, setPath] = useState("home");

  const handleFetchSeo = async () => {
    try {
      await getSeo(setSeo, path, defaultSeo);
    } catch (error) {
      console.error(error);
      setSeo(defaultSeo);
    }
  };

  useEffect(() => {
    handleFetchSeo();
  }, [path]);

  function Myarrow({ type, onClick, isEdge }) {
    const LeftArrow =
      "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688625125290.png";
    const RightArrow =
      "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688625224575.png";
    const pointer = type === consts.PREV ? LeftArrow : RightArrow;
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={
          type === consts.PREV
            ? "prev_carousel carousel_arrow"
            : "next_carousel carousel_arrow"
        }
      >
        <img src={pointer} alt="arrow" className="img-fluid" />
      </button>
    );
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1.4 },
    { width: 576, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 960, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1400, itemsToShow: 4 },
  ];

  const breakPointsClients = [
    { width: 1, itemsToShow: 5 },
    { width: 500, itemsToShow: 5 },
    { width: 768, itemsToShow: 5 },
    { width: 992, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
    { width: 1500, itemsToShow: 6 },
  ];

  const allCities = cities;
  const cityData = {
    cities,
    allCities,
    Myarrow,
    breakPoints,
    breakPointsClients,
    setPath,
    seo,
  };

  return (
    <CityContext.Provider value={cityData}>{children}</CityContext.Provider>
  );
};
