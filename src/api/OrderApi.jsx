// 주문 단계 관련 API
import axios from "axios";
const BACKEND = "http://localhost:8111";

const OrderApi = {
  // 상세 항목 가져오기
  getDetailItem: async (detail) => {
    const requestData = {
      detail: detail,
    };
    return await axios.post(BACKEND + "/order/detail", requestData);
  },

  // 파트너 리스트
  getPartnerList: async (detail) => {
    const requestData = {
      detail: detail,
    };
    return await axios.post(BACKEND + "/order/ptnlist", requestData);
  },

  // 결제 과정
  processPayment: async (name) => {
    const requestData = {
      name: name,
    };
    return await axios.post(BACKEND + "/order/payment", requestData);
  },
};
export default OrderApi;
