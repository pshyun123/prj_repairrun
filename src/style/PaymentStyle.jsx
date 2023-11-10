import styled, { css } from "styled-components";

// 결제 컴포넌트
export const PaymentComp = styled.section`
  width: 100%;
  padding: 60px 0;
  background-color: var(--LIGHTBLUE);

  .container {
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
        .paymentBox {
          display: flex;
          flex-direction: column;
          padding: 5%;

          .name {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            p {
              font-size: 1.1rem;
              font-weight: 400;
            }
            .label {
              font-weight: 600;
              font-size: 1.1rem;
            }
          }
          .phone {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            p {
              font-size: 1.1rem;
              font-weight: 400;
            }
            .label {
              font-weight: 600;
              font-size: 1.1rem;
            }
          }
          .addr {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            p {
              font-size: 1.1rem;
              font-weight: 400;
            }
            .label {
              font-weight: 600;
              font-size: 1.1rem;
            }
          }
        }
        .cardSection {
          display: flex;
          justify-content: space-between;
          padding: 5% 3%;
          .cardBox {
            /* border: 1px solid red; */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: left;
            width: 55%;
            /* padding: 3%; */
            p {
              padding: 10px 0;
            }
            .cardNumBox {
              width: 100%;
              display: flex;
              flex-direction: column;

              .cardNuminput {
                margin: 3px;
                display: flex;
                p {
                  /* padding: 0; */
                  text-align: center;
                  color: var(--GREY);
                }

                /* width: 50%; */

                input {
                  width: 100%;
                  padding: 6px;
                  border: 1px solid var(--GREY);
                  &::-webkit-inner-spin-button,
                  &::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                  }
                }
              }
            }
          }
          .expireDate {
            width: 100%;
            input {
              width: 100%;
              padding: 6px;
              border: 1px solid var(--GREY);
            }
          }
          .CVC {
            width: 100%;
            input {
              width: 100%;
              padding: 6px;
              border: 1px solid var(--GREY);
            }
          }
          .secret {
            width: 100%;
            input {
              width: 100%;
              padding: 6px;
              border: 1px solid var(--GREY);
            }
          }
        }
        .agreementBox {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          border: 1px purple;
          margin-left: 10px;
          text-align: left;
          /* padding: 3%; */

          .agreement {
            height: 50%;
            padding: 20px;
            /* border: 1px solid blue; */
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: white;

            .agreeAll {
              label {
                font-weight: 400;
              }
            }
            p {
              font-size: 1rem;
              padding: 10px 0;
            }
          }
        }
        .myCoupon {
          /* padding: 3%; */
          p {
            padding: 10px;
            border: 1px solid var(--GREY);
            border-radius: 5px;
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
`;
export const CheckboxStyle = styled.div`
  font-size: 0.9rem;
`;
