import axios from "axios";
export const getCity = async (setCities) => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/city/cities");
    setCities(data);
  } catch (err) {
    console.log(err);
  }
};

export const getMicrolocationByCity = async (cityName, setMicrolocations) => {
  try {
    await axios
      .get(`http://localhost:5000/api/microlocation/microlocations/${cityName}`)
      .then((result) => {
        setMicrolocations(result.data);
      });
  } catch (error) {
    console.log(error);
  }
};
