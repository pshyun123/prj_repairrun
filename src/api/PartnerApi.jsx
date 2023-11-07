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
};
export default PartnerApi;
