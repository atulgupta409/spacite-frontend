import axios from "axios";
export const getCity = async (setAllCity) => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/city/cities");
    setAllCity(data);
  } catch (error) {
    console.log(error);
  }
};
