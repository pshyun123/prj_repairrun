import ImgUpload from "../component/ImgUpload";
import OrderCheck from "../component/OrderCheck";
import PartnerSelect from "../component/PartnerSelect";
import Payment from "../component/Payment";
import OrderSummary from "../component/OrderSummary";

const GeneralStep = () => {
  return (
    <>
      <ImgUpload />
      <OrderCheck />
      {/* 로고슬라이드 컴포넌트자리 */}
      <PartnerSelect />
      <Payment />
      <OrderSummary />
    </>
  );
};
export default GeneralStep;
