import CouponComp from "../style/CouponStyle";

const CouponMini = () => {
  const couponData = {
    couponName: "웰컴쿠폰",
    couponAmount: "5000",
    couponDays: "30",
    couponExp: "2023.11.31",
  };
  return (
    <>
      <div className="welcomeCoupon">
        <h3>{couponData.couponName}</h3>
        <p>{couponData.couponAmount}원 할인</p>
        <p>{couponData.couponDays}일 남음</p>
        <p>{couponData.couponExp}</p>
      </div>
    </>
  );
};

const Coupon = () => {
  return (
    <>
      <CouponComp>
        <div className="container">
          <div className="myCoupon">
            <h2>나의 쿠폰</h2>
          </div>
          <div className="couponGift">
            <div className="couponBox">
              <CouponMini />
              <CouponMini />
            </div>
          </div>
          <div className="noCoupon">
            <h3>사용 가능한 쿠폰이 없습니다.</h3>
          </div>
        </div>
      </CouponComp>
    </>
  );
};

export default Coupon;
