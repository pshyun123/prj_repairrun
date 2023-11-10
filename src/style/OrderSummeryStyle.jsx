import styled from "styled-components";

// 주문 정보

export const OrderSummaryComp = styled.section`
  width: 100%;
  padding: 60px 0;
  .container {
    border: 1px solid darkgray;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    width: 100%;
    padding: 30px;
    h3 {
      text-align: center;
      font-weight: 400;
      font-size: 1.5rem;
      margin-bottom: 20px;

      span {
        font-weight: 600;
        font-size: 1.6rem;
      }
    }
    .orderContainer {
      width: 65%;
      background-color: var(--IVORY);
      border-radius: 10px;
      padding: 30px;
      .orderInfoBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        width: 100%;
        .orderInfo {
          font-weight: 600;
          font-size: 1.1rem;
          padding: 3px 0;
          color: var(--DARKBLUE);
        }
        p {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
