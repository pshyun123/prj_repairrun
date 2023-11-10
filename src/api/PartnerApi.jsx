// 파트너 정보 관련 API
import axios from "axios";
const BACKEND = "http://localhost:8111";

const PartnerApi = {
  partnerLogin: async (id, pw) => {
    console.log(BACKEND + "/partners/login");
    const login = {
      id: id,
      pw: pw,
    };
    return await axios.post(BACKEND + "/partners/login", login);
  },

  //로고 슬라이드 연결
  loadLogos: async () => {
    try {
      const response = await axios.post(BACKEND + "/partners/logolist");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
export default PartnerApi;
