import React, { useState, useEffect } from "react";
import { PaymentComp } from "../style/PaymentStyle";
import Checkbox from "../util/Checkbox";
import { useNavigate } from "react-router-dom";

export const Payment = ({ onNext }) => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/mypage");
  };
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const onCheckedChange = (checkboxNumber) => {
    switch (checkboxNumber) {
      case 1:
        setChecked1(!checked1);
        break;
      case 2:
        setChecked2(!checked2);
        break;
      case 3:
        setChecked3(!checked3);
        break;
      default:
        // 전체약관동의 체크박스를 선택하면 나머지 세 개의 체크박스도 선택/해제되도록 설정
        setCheckedAll(!checkedAll);
        setChecked1(!checkedAll);
        setChecked2(!checkedAll);
        setChecked3(!checkedAll);
        break;
    }
  };
  useEffect(() => {
    if (checked1 && checked2 && checked3) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked1, checked2, checked3]);

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
                  <div className="label">주문자</div>
                  <p>{tempData.userName}</p>
                </div>
                <div className="phone">
                  <div className="label">연락처</div>
                  <p>{tempData.userPhone}</p>
                </div>
                <div className="addr">
                  <div className="label">주 소</div>
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
                  <div className="cardNumBox">
                    <p>카드 번호</p>
                    <div className="cardNuminput">
                      <input type="number" />
                      <p>-</p>
                      <input type="number" />
                      <p>-</p>
                      <input type="number" />
                      <p>-</p>
                      <input type="number" />
                    </div>
                  </div>
                  <div className="expireDate">
                    <p>유효기간</p>
                    <input type="text" placeholder="MMYY" />
                  </div>
                  <div className="CVC">
                    <p>CVC</p>
                    <input type="text" placeholder="카드 뒷면 3자리" />
                  </div>
                  <div className="secret">
                    <p>비밀번호</p>
                    <input type="text" placeholder="카드 비밀번호 앞 두자리" />
                  </div>
                </div>
                {/* 카드 약관동의 */}
                <div className="agreementBox">
                  <div className="agreement">
                    <p>약관 동의</p>
                    <Checkbox
                      className="agreeAll"
                      children="전체약관동의"
                      checked={checkedAll}
                      onCheckedChange={() => onCheckedChange()}
                    />
                    <Checkbox
                      children="리페어런 개인(신용)정보 수집 및 이용 동의"
                      checked={checked1}
                      onCheckedChange={() => onCheckedChange(1)}
                    />
                    <Checkbox
                      children="리페어런 → 카드사 개인(신용)정보 제공 동의"
                      checked={checked2}
                      onCheckedChange={() => onCheckedChange(2)}
                    />
                    <Checkbox
                      children="카드사 → 리페어런 개인(신용)정보 제공 동의"
                      checked={checked3}
                      onCheckedChange={() => onCheckedChange(3)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 쿠폰 정보 불러오는 곳 */}
            <div className="payBox">
              <div className="labelBox">
                <p className="title">쿠폰</p>
              </div>
              <div className="myCoupon">
                <select>
                  <option value="">선택안함</option>
                  <option value={tempData.couponType}>
                    {tempData.couponType}
                  </option>
                  <option value={tempData.couponType2}>
                    {tempData.couponType2}
                  </option>
                </select>
              </div>
              <div className="couponBox"></div>
            </div>
            {/* <p></p>
                <p>{tempData.couponType2}</p> */}

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
                <div className="totalPrice"></div>
              </div>
            </div>
            <div className="buttonContainer">
              <button onClick={handleNextClick}>결제하기</button>
            </div>
          </div>
        </div>
      </PaymentComp>
    </>
  );
};
export default Payment;
