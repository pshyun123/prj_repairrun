import PartnerInfo from "../component/PartnerInfo";
import RepairList from "../component/RepairList";
import OrderList from "../component/OrderList";
import ReviewList from "../component/ReviewList";
import Modal from "../util/Modal";

const PartnerMain = () => {
  return (
    <>
      <PartnerInfo />
      <RepairList />
      <OrderList />
      <ReviewList />
    </>
  );
};
export default PartnerMain;
