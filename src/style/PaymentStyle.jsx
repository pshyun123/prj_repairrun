import styled, { css } from "styled-components";

// 결제 컴포넌트
export const PaymentComp = styled.section`
  width: 100%;
  padding: 60px 0;
  background-color: var(--LIGHTBLUE);

  .container {
    border: 1px solid darkgray;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5ch;
    width: 100%;
    padding: 30px;

    h3 {
      text-align: center;
      font-weight: 400;
      padding: 30px;
      font-size: 1.5rem;
    }
    .paymentContainer {
      /* border: 1px solid red; */
      width: 80%;
      /* display: flex;
      flex-direction: column; */
      .payBox {
        width: 100%;
        /* border: 1px solid orange; */
        border-radius: 10px;
        background-color: var(--IVORY);
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        .labelBox {
          width: 100%;
          background-color: var(--DARKBLUE);
          border-radius: 5px;
          padding: 10px;
          text-align: left;
          .title {
            font-size: 1.1rem;
            color: white;
            font-weight: 400;
          }
        }
        .cardSection {
          .cardBox {
            .cardNuminput {
              input {
                &::-webkit-inner-spin-button,
                &::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
              }
            }
          }
        }
        .paymentBox {
          display: flex;
          flex-direction: column;
          padding: 5%;

          .name {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            p {
              font-size: 1rem;
            }
          }
          .phone {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            p {
              font-size: 1rem;
            }
          }
          .addr {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            p {
              font-size: 1rem;
            }
          }
        }
      }
      .buttonContainer {
        align-items: flex-end;
        padding-top: 10px;
        button {
          width: 300px;
          height: 45px;
          border-radius: 30px;
          border-style: none;
          background-color: var(--DARKBLUE);
          color: white;
          font-weight: 600;
          font-size: 1.3rem;
          margin: 20px;
          &:hover {
            cursor: pointer;
            background-color: var(--MIDBLUE);
          }
        }
      }
    }
  }
`;
export const Checkbox = styled.div``;
