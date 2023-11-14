// 주문 단계 관련 API
import axios from "axios";
const BACKEND = "http://localhost:8111";

const OrderApi = {
  // 상세 항목 가져오기
  getDetailItem: async (item) => {
    const selectItem = {
      repairItem: item, //리액트와 연동
    };
    return await axios.post(BACKEND + "/order/detail", selectItem);
  },

  // 파트너 리스트 선택
  getPartnerList: async (detail) => {
    const selectPtn = {
      detail: detail,
    };
    return await axios.post(BACKEND + "/order/ptnlist", selectPtn);
  },

  // 결제 과정
  processPayment: async (id) => {
    const payment = {
      userId: id,
    };
    return await axios.post(BACKEND + "/order/payment", payment);
  },
};
export default OrderApi;
