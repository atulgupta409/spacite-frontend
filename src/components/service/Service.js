import axios from "axios";
import baseUrl from "../../environment/api-config";

export const getCity = async (setCities) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/cities`);
    setCities(data);
  } catch (err) {
    console.log(err);
  }
};

export const getMicrolocationByCity = async (cityName, setMicrolocations) => {
  try {
    await axios
      .get(`${baseUrl}/api/microlocations/${cityName}`)
      .then((result) => {
        setMicrolocations(result.data);
      });
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
  microlocationName
) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/coworking-details/${microlocationName}`
    );
    setWorkspaces(data);
  } catch (err) {
    console.log(err);
  }
};
