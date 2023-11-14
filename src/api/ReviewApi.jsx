import axios from "axios";
const BACKEND = "http://localhost:8111";

const ReviewApi = {
  review: async () => {
    console.log(BACKEND + "/reviewstock/data");

    return await axios.post(BACKEND + "/reviewstock/data");
  },
};
export default ReviewApi;
