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

  // 이미 사용중인 아이디 체크
  isExistingId: async (id) => {
    return await axios.get(BACKEND + `members/check/?id=${id}`);
  },
  // 이미 사용중인 전화번호 체크
  isExistingPhone: async (phone) => {
    return await axios.get(BACKEND + `members/check/?phone=${phone}`);
  },
  // 이미 사용중인 이메일 체크
  isExistingEmail: async (email) => {
    return await axios.get(BACKEND + `members/check/?email=${email}`);
  },
};
export default MemberApi;
