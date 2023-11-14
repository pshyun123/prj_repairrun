import PartnerInfo from "../component/PartnerInfo";
import RepairList from "../component/RepairList";
import OrderList from "../component/OrderList";
import ReviewList from "../component/ReviewList";
import { useParams } from "react-router-dom";
import Modal from "../util/Modal";

const PartnerMain = () => {
  const { id } = useParams();
  const ptnId = id;
  console.log("파트너메인 id" + id);
  const loginType = window.localStorage.getItem("loginStatus");
  return (
    <>
      <PartnerInfo selPtn={ptnId} loginType={loginType} />
      <RepairList selPtn={ptnId} loginType={loginType} />
      {loginType === "partner" && <OrderList loginType={1} />}
      <ReviewList selPtn={ptnId} nofilter={"nofilter"} />
    </>
  );
};
export default PartnerMain;
