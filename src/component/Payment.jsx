import React, { useState } from "react";
import { PaymentComp, Checkbox } from "../style/PaymentStyle";

export const Payment = () => {
  const tempData = {
    userName: "송중기",
    userPhone: "010-1234-5678",
    userAddr: "서울특별시 강남구 역삼동",
    couponType: "배송비 3000원 무료 쿠폰",
    couponType2: "20000원 이상 5000원 할인 쿠폰",
    couponDiscount: "3000",
    delivery: "0",
  };
  return (
    <>
      <PaymentComp>
        <div className="container">
          <h3>결제 후 접수가 완료됩니다.</h3>
          <div className="paymentContainer">
            <div className="payBox">
              <div className="labelBox">
                <p className="title">수거 / 배송 주소</p>
              </div>
              <div className="paymentBox">
                <div className="name">
                  <p className="nameLabel">주문자</p>
                  <p>{tempData.userName}</p>
                </div>
                <div className="phone">
                  <p>연락처</p>
                  <p>{tempData.userPhone}</p>
                </div>
                <div className="addr">
                  <p>주 소</p>
                  <p>{tempData.userAddr}</p>
                </div>
              </div>
            </div>

            {/* 카드정보 넣는곳 */}
            <div className="payBox">
              <div className="labelBox">
                <p className="title">결제 정보</p>
              </div>
              {/* input 하는 곳 */}
              <div className="cardSection">
                <div className="cardBox">
                  <p>카드 번호</p>
                  <div className="cardNuminput">
                    <input type="number" />-
                    <input type="number" />-
                    <input type="number" />-
                    <input type="number" />
                  </div>
                  <div className="expireDate">
                    <p>유효기간</p>
                    <input type="text" placeholder="MMYY" />
                  </div>
                  <div className="CVC">
                    <input type="text" placeholder="카드 뒷면 3자리" />
                  </div>
                  <div className="secret">
                    <input type="text" placeholder="카드 비밀번호 앞 두자리" />
                  </div>
                </div>
                <div className="agreement">
                  <p>약관 동의</p>
                  <Checkbox>전체약관동의</Checkbox>
                  <Checkbox>리페어런 개인(신용)정보 수집 및 이용 동의</Checkbox>
                  <Checkbox>
                    리페어런 → 카드사 개인(신용)정보 제공 동의
                  </Checkbox>
                  <Checkbox>
                    카드사 → 리페어런 개인(신용)정보 제공 동의
                  </Checkbox>
                </div>
              </div>
            </div>

            {/* 쿠폰 정보 불러오는 곳 */}
            <div className="payBox">
              <div className="labelBox">
                <p className="title">쿠폰</p>
              </div>
              <div className="myCoupon">
                <p>{tempData.couponType}</p>
                <p>{tempData.couponType2}</p>
              </div>
              <div className="couponBox"></div>
            </div>

            {/* 최종확인 */}
            <div className="payBox">
              <div className="labelBox">
                <p className="title">결제 상세</p>
              </div>
              <div className="totalArea">
                <div className="amount">
                  <div className="estimate">
                    <p>견적 금액</p>
                    <p>{tempData.repairPrice}</p>
                  </div>
                  <div className="coupon">
                    <p>쿠폰</p>
                    <p>{tempData.couponDiscount}</p>
                  </div>
                  <div className="deliveryFee">
                    <p>배송비</p>
                    <p>{tempData.delivery}</p>
                  </div>
                </div>
                <div className="totalPrice">{/* 합계 */}</div>
              </div>
            </div>
            <div className="buttonContainer">
              <button>결제하기</button>
            </div>
          </div>
        </div>
      </PaymentComp>
    </>
  );
};
export default Payment;
