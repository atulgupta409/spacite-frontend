import axios from "axios";
import baseUrl from "../../environment/api-config";

// export const getCity = async (setCities) => {
//   const selectedCities = [
//     "Gurugram",
//     "Mumbai",
//     "Bangalore",
//     "Pune",
//     "Hyderabad",
//     "Noida",
//   ];

//   try {
//     const { data } = await axios.get(`${baseUrl}/api/cities`);
//     const filteredCities = data?.filter((cityObj) =>
//       selectedCities.includes(cityObj.name)
//     );
//     setCities(filteredCities);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getMicrolocationByCity = async (
  cityName,
  setMicrolocations,
  setLoadingMicrolocations
) => {
  try {
    setLoadingMicrolocations(true);
    const { data } = await axios.get(
      `${baseUrl}/api/micro-location/priority/${cityName}`
    );
    setMicrolocations(data);
    setLoadingMicrolocations(false);
  } catch (error) {
    console.log(error);
    setLoadingMicrolocations(false);
  }
};

export const getWorkSpaceData = async (setWorkspaces, setPageLoading) => {
  try {
    setPageLoading(true);
    const { data } = await axios.get(`${baseUrl}/api/workSpace`);
    setWorkspaces(data);
    setPageLoading(false);
  } catch (err) {
    console.log(err);
    setPageLoading(false);
  }
};

export const getWorkSpaceByMicrolocation = async (
  setWorkspaces,
  microlocationName,
  item_per_page,
  current_page,
  setTotalCount,
  setLoadingSpaces,
  cityName
) => {
  try {
    setLoadingSpaces(true);
    const { data } = await axios.get(
      `${baseUrl}/api/workspace-details/${cityName}/${microlocationName}?page=${current_page}&limit=${item_per_page}`
    );
    const { totalCount, coworkingSpaces } = data;
    setWorkspaces(coworkingSpaces);
    setTotalCount(totalCount);
    setLoadingSpaces(false);
  } catch (err) {
    console.log(err);
  }
};

export const getWorkSpaceBySlug = async (setWorkspaces, slug) => {
  try {
    // setLoadingSpaces(true);
    const { data } = await axios.get(
      `${baseUrl}/api/coworking-details-slug/${slug}`
    );
    setWorkspaces(data[0]);
    // setLoadingSpaces(false);
  } catch (err) {
    console.log(err);
  }
};

export const getSeo = async (setSeo, path, defaultSeo) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/seo/seos-data/${path}`);
    setSeo(data);
  } catch (error) {
    console.log(error.message);
    setSeo(defaultSeo);
  }
};

export const getNearSpaces = async (setNearSpace, slug) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/workspaces/slug/${slug}`);
    setNearSpace(data.nearbyWorkspaces.slice(0, 10));
  } catch (error) {
    console.log(error);
  }
};

export const getBrands = async (setBrands) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/brands/all-brands`);
    setBrands(data);
  } catch (error) {
    console.log(error);
  }
};

export const getClients = async (setClients) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/client/our-client`);
    setClients(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPopularWorkspaceByCity = async (cities, setPopularSpaces) => {
  try {
    let res = [];
    cities.forEach(async (city) => {
      const { data } = await axios.get(
        `${baseUrl}/api/popular-workspace/${city.name}`
      );

      res.push(data);
      if (cities.length === res.length && cities.length > 0) {
        setPopularSpaces(res);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getWorkSpaceByCity = async (
  setCityWorkspaces,
  cityName,
  setLoadingSpaces,
  topMicrolocations
) => {
  try {
    let res = [];
    setLoadingSpaces(true);
    topMicrolocations?.forEach(async (location) => {
      const { data } = await axios.get(
        `${baseUrl}/api/priority-city-workspace/${cityName}/${location.name}`
      );
      res.push(data);
      if (
        topMicrolocations.length === res.length &&
        topMicrolocations.length > 0
      ) {
        setCityWorkspaces(res);
      }
    });

    setLoadingSpaces(false);
  } catch (err) {
    console.log(err);
  }
};

export const getNearCoworking = async (
  setWorkspaces,
  latitude,
  longitude,
  setLoadingSpaces
) => {
  try {
    setLoadingSpaces(true);
    const { data } = await axios.get(
      `${baseUrl}/api/coworking_spaces/nearby?latitude=${latitude}&longitude=${longitude}`
    );
    setWorkspaces(data);
    setLoadingSpaces(false);
  } catch (error) {
    console.log(error);
  }
};

export const getWorkSpaceForCityPage = async (setWorkspaces, cityNames) => {
  try {
    let res = [];
    cityNames?.forEach(async (cityName) => {
      const { data } = await axios.get(
        `${baseUrl}/api/coworking/${cityName?.name}`
      );
      res.push(data);
      if (cityNames.length === res.length && cityNames.length > 0) {
        setWorkspaces(res);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
