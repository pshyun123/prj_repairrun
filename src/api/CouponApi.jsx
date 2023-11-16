import axios from "axios";
const BACKEND = "http://192.168.10.6:8111";

const CouponApi = {
  coupon: async (userId) => {
    const couponUserList = {
      userId: userId,
    };
    return await axios.post(BACKEND + "/coupon/data", couponUserList);
  },
};

export default CouponApi;
