import styled from "styled-components";

const OrderImgComp = styled.div`
  width: 100%;
  /* height: 50vw; */
  /* background-color: var(--IVORY); */
  .container {
    padding: 70px 0;
    .orderDetailBoder {
      display: flex;
      /* background-color: var(--MIDBLUE); */
      width: 100%;
      margin-bottom: 30px;
      padding: 40px;
      border-radius: 20px;
      .orderDetailBox1 {
        flex-grow: 1;
        h2 {
          color: black;
          margin-left: 5px;
          margin-bottom: 40px;
          font-weight: 600;
        }
        .orderImgBorder {
          width: 100%;
          padding-bottom: 100%;
          overflow: hidden;
          position: relative;
          .swiperWrapper {
            width: 100%;
            height: 100%;
            position: absolute;
          }
        }
      }
    }
    .orderDetailBox2 {
      padding-left: 20px;
      white-space: nowrap;
      flex-grow: 1;
      font-size: 1.4em;
      padding-top: 16%;
      .orderDetailComp {
        color: black;
        display: flex;
        margin-bottom: 40px;
        .orderDetailTitle {
          color: black;
          font-weight: 600;
        }
      }
      .orderRequestComp {
        color: black;
        margin-bottom: 40px;
        .orderRequestTitle {
          font-weight: 600;
          margin-bottom: 40px;
        }
        .requestText {
          padding: 10px;
          border-radius: 10px;
          background-color: var(--GREY);
        }
      }
      .orderMoney {
        font-size: 1.4em;
        display: flex;
        justify-content: space-between;
      }
      p {
        color: black;
      }
    }

    .orderDetailBtn {
      display: flex;
      .orderRepair {
        width: 50%;
        align-items: center;
        justify-content: center;
      }
    }

    .orderRepair {
      display: flex;
      justify-content: space-between;
      .repairProcess {
        margin-right: 10px;
      }
      .repairing {
        padding: 20px;
        border-radius: 10px;
        background-color: var(--GREY);
      }
      p {
        font-size: 1.4em;
      }
    }
    .chattingBtn {
      display: flex;
      width: 50%;
      /* background-color: gray; */
      justify-content: center;
      align-items: center;
    }
    button {
      margin: 10px;
      border: none;
      letter-spacing: 1.4px;
      font-size: 1.3em;
      padding: 15px 24px;
      border-radius: 5px;
      background-color: var(--LIGHTBLUE);
      cursor: pointer;
      transition: 0.3s ease-in;
      &:hover {
        color: white;
        background-color: var(--DARKBLUE);
      }
    }
  }
`;

export default OrderImgComp;
