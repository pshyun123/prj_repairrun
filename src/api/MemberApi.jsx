// 회원 정보 관련 API
import axios from "axios";
const BACKEND = "http://localhost:8111";

const MemberApi = {
  memberLogin: async (id, pw) => {
    console.log(BACKEND + "/members/login");
    const login = {
      id: id,
      pw: pw,
    };
    return await axios.post(BACKEND + "/members/login", login);
  },
};
export default MemberApi;
