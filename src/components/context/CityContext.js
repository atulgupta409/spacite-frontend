import React, { createContext, useState, useEffect } from "react";
import { getCity, getMicrolocationByCity } from "../service/Service";
import gurugram from "../media/city-icon/Gurugram.png";
import noida from "../media/city-icon/noida.png";
import pune from "../media/city-icon/Pune.png";
import hyderabad from "../media/city-icon/Hyderabad.png";
import ahemdabad from "../media/city-icon/Ahemdabad.png";
import mumbai from "../media/city-icon/Mumbai.png";
import bangalore from "../media/city-icon/bangalore 1.png";
import { useLocation } from "react-router-dom";

// Create the CityContext
export const CityContext = createContext();

export const CityProvider = ({ children }) => {
  let coworkingCities = [
    { id: 1, name: "Gurugram", img: gurugram },
    { id: 2, name: "Noida", img: noida },
    { id: 3, name: "Mumbai", img: mumbai },
    { id: 4, name: "Bangalore", img: bangalore },
    { id: 5, name: "Pune", img: pune },
    { id: 6, name: "Hyderabad", img: hyderabad },
    { id: 7, name: "Ahmedabad", img: ahemdabad },
  ];

  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [microlocations, setMicrolocations] = useState([]);

  const handleFetchCities = async () => {
    await getCity(setCities);
  };

  const location = useLocation();
  let pathArray = location.pathname.split("/");
  let lastElem = pathArray[pathArray.length - 1];
  let cityName = lastElem.charAt(0).toUpperCase() + lastElem.slice(1);

  const handleFetchMicrolocations = async () => {
    await getMicrolocationByCity(cityName, setMicrolocations);
  };

  // Provide the cities data and handleFetchCities function to consuming components
  useEffect(() => {
    const mainCities = cities.map((city, i) => ({
      city,
      cityImg: coworkingCities[i].img,
    }));
    setAllCities([...mainCities]);
  }, [cities]);

  const cityData = {
    cities,
    allCities,
    microlocations,
    handleFetchCities,
    handleFetchMicrolocations,
  };

  return (
    <CityContext.Provider value={cityData}>{children}</CityContext.Provider>
  );
};
