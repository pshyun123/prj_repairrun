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

  itemlist: async (id) => {
    const ptnId = {
      id: id,
    };
    return await axios.post(BACKEND + "/partners/itemlist", ptnId);
  },

  //임시 이동 예정
  orderStatusList: async (type, id) => {
    const userData = {
      type: type,
      id: id,
    };
    return await axios.post(BACKEND + "/orderss/orderlist", userData);
  },

  //중복체크
  uniqueCheck: async (type, inputVal) => {
    const checkData = {
      type: type,
      inputVal: inputVal,
    };
    return await axios.post(BACKEND + "/partners/uniquecheck", checkData);
  },

  //파트너가입
  newPartner: async (
    id,
    pw,
    name,
    ptnEmail,
    ptnPhone,
    ptnAddr,
    ptnDesc,
    ptnLogo
  ) => {
    const newPtnData = {
      id: id,
      pw: pw,
      name: name,
      ptnEmail: ptnEmail,
      ptnPhone: ptnPhone,
      ptnAddr: ptnAddr,
      ptnDesc: ptnDesc,
      ptnLogo: ptnLogo,
    };
    return await axios.post(BACKEND + "/partners/new", newPtnData);
  },

  updateDetail: async (ptnId, repairDetail, days, price) => {
    const updateInfo = {
      ptnId: ptnId,
      repairDetail: repairDetail,
      days: days,
      price: price,
    };
    return await axios.post(BACKEND + "/partners/updatedetail", updateInfo);
  },
};

export default PartnerApi;
