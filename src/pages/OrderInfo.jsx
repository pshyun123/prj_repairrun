import OrderImg from "../component/OrderImg";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PartnerApi from "../api/PartnerApi";

const OrderInfo = () => {
  const { orderNum } = useParams();
  const navigate = useNavigate();

  const [orderInfo, setOrderInfo] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await PartnerApi.orderStatus(orderNum);
      if (res.data !== null) setOrderInfo(res.data);
      console.log(res.data);
    };
    fetchOrder();
  }, []);

  return <>{orderInfo && <OrderImg orderInfo={orderInfo} />}</>;
};
export default OrderInfo;
