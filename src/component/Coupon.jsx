import styled from "styled-components";

const CouponContainer = styled.div`
  width: 100%;
  background-color: var(--LIGHTBLUE);

  .container {
    padding-top: 30px;
    padding-bottom: 80px;
    p,
    div {
      color: white;
    }
  }
`;

const Coupon = () => {
  return (
    <>
      <CouponContainer>
        <div className="container">
          <p>쿠폰 영역입니다.</p>
        </div>
      </CouponContainer>
    </>
  );
};

export default Coupon;
