import React, { createContext, useState, useEffect } from "react";
import { getCity } from "../service/Service";
import Carousel, { consts } from "@itseasy21/react-elastic-carousel";

// Create the CityContext
export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  let coworkingCities = [
    {
      id: 1,
      name: "Gurugram",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689759658351.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115439780.png",
    },
    {
      id: 2,
      name: "Noida",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689759698530.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115417240.png",
    },
    {
      id: 3,
      name: "Mumbai",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689759687835.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115449838.png",
    },
    {
      id: 4,
      name: "Bangalore",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689759647343.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115481557.png",
    },
    {
      id: 5,
      name: "Pune",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689759707585.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115398091.png",
    },
    {
      id: 6,
      name: "Hyderabad",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689759675068.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115459637.png",
    },
    {
      id: 7,
      name: "Ahmedabad",
      img: "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1689759637422.png",
      featureImg:
        "https://spacite-bucket.s3.ap-south-1.amazonaws.com/image-1688115469731.png",
    },
  ];

  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);

  const handleFetchCities = async () => {
    await getCity(setCities);
  };

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
    { width: 1, itemsToShow: 3.4 },
    { width: 500, itemsToShow: 3.4 },
    { width: 768, itemsToShow: 4 },
    { width: 992, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
    { width: 1500, itemsToShow: 6 },
  ];

  // Provide the cities data and handleFetchCities function to consuming components
  useEffect(() => {
    const mainCities = cities?.map((city, i) => ({
      city,
      cityImg: coworkingCities[i]?.img,
      cityFeatureImg: coworkingCities[i]?.featureImg,
    }));
    setAllCities([...mainCities]);
  }, [cities]);

  const cityData = {
    cities,
    allCities,
    handleFetchCities,
    Myarrow,
    breakPoints,
    breakPointsClients,
  };

  return (
    <CityContext.Provider value={cityData}>{children}</CityContext.Provider>
  );
};
