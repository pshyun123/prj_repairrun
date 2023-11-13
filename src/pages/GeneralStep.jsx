import React, { useState } from "react";
import ImgUpload from "../component/ImgUpload";
import OrderCheck from "../component/OrderCheck";
import PartnerSelect from "../component/PartnerSelect";
import Payment from "../component/Payment";

const GeneralStep = () => {
  return (
    <>
      <ImgUpload />
      <OrderCheck />
      {/* 로고슬라이드 컴포넌트자리 */}
      <PartnerSelect />
      <Payment />
    </>
  );
};
export default GeneralStep;
