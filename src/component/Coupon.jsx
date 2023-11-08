import CouponComp from "../style/CouponStyle";

const CouponMini = ({ e }) => {
  return (
    <>
      <div className="Couponex">
        <div className="couponBorder">
          <h3>{e.couponName}</h3>
          <p>{e.couponAmount}원 할인</p>
          <p>{e.couponDays}일 남음</p>
          <p className="couponRightExp">{e.couponExp}</p>
        </div>
      </div>
    </>
  );
};

const Coupon = () => {
  const couponData = [
    {
      couponName: "웰컴쿠폰",
      couponAmount: "5000",
      couponDays: "30",
      couponExp: "2023.11.31",
    },
    {
      couponName: "배송비쿠폰",
      couponAmount: "3000",
      couponDays: "30",
      couponExp: "2023.11.31",
    },
  ];
  return (
    <>
      <CouponComp>
        <div className="container">
          <div className="myCoupon">
            <h2>나의 쿠폰</h2>
          </div>
          <div className="couponGift">
            <div className="couponBox">
              {couponData !== null ? (
                couponData.map((e) => <CouponMini key={e.couponName} e={e} />)
              ) : (
                <h3>사용 가능한 쿠폰이 없습니다.</h3>
              )}
            </div>
          </div>
        </div>
      </CouponComp>
    </>
  );
};

export default Coupon;
