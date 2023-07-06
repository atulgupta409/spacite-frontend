import axios from "axios";
import baseUrl from "../../environment/api-config";

export const getCity = async (setCities) => {
  const selectedCities = [
    "Noida",
    "Gurugram",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Bangalore",
    "Ahmedabad",
  ];

  try {
    const { data } = await axios.get(`${baseUrl}/api/cities`);
    const filteredCities = data?.filter((cityObj) =>
      selectedCities.includes(cityObj.name)
    );
    setCities(filteredCities);
  } catch (err) {
    console.log(err);
  }
};

export const getMicrolocationByCity = async (
  cityName,
  setMicrolocations,
  setLoadingMicrolocations
) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/micro-location/micro-locations/${cityName}`
    );
    setMicrolocations(data);
    setLoadingMicrolocations(false);
  } catch (error) {
    console.log(error);
    setLoadingMicrolocations(false);
  }
};

export const getWorkSpaceData = async (setWorkspaces) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/workSpace`);
    setWorkspaces(data);
  } catch (err) {
    console.log(err);
  }
};

export const getWorkSpaceByMicrolocation = async (
  setWorkspaces,
  microlocationName,
  item_per_page,
  current_page,
  setTotalCount,
  setLoadingSpaces
) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/workspace-details/${microlocationName}?page=${current_page}&limit=${item_per_page}`
    );
    const { totalCount, coworkingSpaces } = data;
    setWorkspaces(coworkingSpaces);
    setTotalCount(totalCount);
    setLoadingSpaces(false);
    // console.log(totalCount);
  } catch (err) {
    console.log(err);
    setLoadingSpaces(false);
  }
};

export const getWorkSpaceByCity = async (
  setCityWorkspaces,
  cityName,
  setLoadingSpaces
) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/coworking/${cityName}`);
    setCityWorkspaces(data);
    setLoadingSpaces(false);
  } catch (err) {
    console.log(err);
    setLoadingSpaces(false);
  }
};
