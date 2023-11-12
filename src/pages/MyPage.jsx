import Coupon from "../component/Coupon";
import OrderList from "../component/OrderList";
import ReviewList from "../component/ReviewList";
import UserInfo from "../component/UserInfo";

const MyPage = () => {
  return (
    <>
      <UserInfo />
      <Coupon />
      <OrderList loginType={0} />
      <ReviewList />
    </>
  );
};
export default MyPage;
