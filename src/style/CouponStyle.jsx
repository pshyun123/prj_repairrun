import { styled } from "styled-components";

const CouponComp = styled.div`
    width: 100%;
  /* background-color: var(--MIDBLUE); */

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: auto;
    flex-wrap: wrap;
    padding: 10px 0;

    .myCoupon {
      /* background-color: red; */
      width: 100%;
      height: 80px;
      padding-top: 20px;
      border-bottom: 1px solid;
    }
    .couponGift {
      width: 100%;
      /* background-color: red; */
      padding-top: 30px;
      display: flex;
      justify-content: space-evenly;

      .couponBox {
        background-color: LIGHTBLUE;
      }

      .welcomeCoupon {
        background-color: white;
        text-align: center;
      }

      .deliveryCoupon {
        background-color: LIGHTBLUE;

        text-align: center;
      }
    }
    .noCoupon {
      position: relative;
      bottom: 50px;
      width: 100%;
      text-align: center;
      h3 {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
export default CouponComp;