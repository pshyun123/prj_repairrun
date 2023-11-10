import axios from "axios";
const BACKEND = "http://localhost:8111";

const loadLogos = async () => {
  try {
    const response = await axios.post(BACKEND);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default loadLogos;
