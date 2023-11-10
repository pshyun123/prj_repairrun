import React, { useState } from "react";
import { OrderSummaryComp } from "../style/OrderSummeryStyle";

const tempData = {
  ptnName: "SILK ROAD",
  ptnAddr: "서울특별시 강남구 강남대로 123",
  startDate: "2023.09.08",
  endDate: "2023.09.12",
  totalPrice: "18,000원",
  item: "가방 수선",
  brand: "구찌",
  request: "가죽 교체",
  extra: "가방 가죽 교체가 급하게 필요해요.",
};
export const OrderSummary = () => {
  return (
    <>
      <OrderSummaryComp>
        <div className="container">
          <h3>
            접수가 <span>완료</span>되었습니다.{" "}
          </h3>
          <h3>
            <span>접수 정보</span>를 확인하세요.{" "}
          </h3>
          <div className="orderContainer">
            <div className="orderInfoBox">
              <p className="orderInfo">파트너</p>
              <p>{tempData.ptnName}</p>
            </div>
            <div className="orderInfoBox">
              <p className="orderInfo">파트너 주소</p>
              <p>{tempData.ptnAddr}</p>
            </div>
            <div className="orderInfoBox">
              <p className="orderInfo">접수일자</p>
              <p>{tempData.startDate}</p>
            </div>
            <div className="orderInfoBox">
              <p className="orderInfo">수선완료일자</p>
              <p>{tempData.endDate}</p>
            </div>
            <div className="orderInfoBox">
              <p className="orderInfo">결제금액</p>
              <p>{tempData.totalPrice}</p>
            </div>
            <div className="orderInfoBox">
              <p className="orderInfo">품목</p>
              <p>{tempData.item}</p>
            </div>
            <div className="orderInfoBox">
              <p className="orderInfo">브랜드</p>
              <p>{tempData.brand}</p>
            </div>
            <div className="orderInfoBox">
              <p className="orderInfo">요청사항</p>
              <p>{tempData.request}</p>
            </div>
            <div className="orderInfoBox">
              <p className="orderInfo">추가요청사항</p>
              <p>{tempData.extra}</p>
            </div>
          </div>
        </div>
      </OrderSummaryComp>
    </>
  );
};
export default OrderSummary;
