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

export const getMicrolocationByCity = async (cityName, setMicrolocations) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/micro-location/micro-locations/${cityName}`
    );

    setMicrolocations(data);
  } catch (error) {
    console.log(error);
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
  setTotalCount
) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/coworking-details/${microlocationName}?page=${current_page}&limit=${item_per_page}`
    );
    const { totalCount, coworkingSpaces } = data;
    setWorkspaces(coworkingSpaces);
    setTotalCount(totalCount);
    // console.log(totalCount);
  } catch (err) {
    console.log(err);
  }
};

export const getWorkSpaceByCity = async (setCityWorkspaces, cityName) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/coworking/${cityName}`);
    setCityWorkspaces(data);
  } catch (err) {
    console.log(err);
  }
};
