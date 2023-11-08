import styled from "styled-components";

const OrderListComp = styled.div`
  width: 100%;
  /* background-color: var(--IVORY); */

  .container {
    padding: 50px 0;
    .orderHeader {
      .orderBox {
        .couponBox {
          .orderContainer {
            display: flex;
            /* flex-direction: column; */
            /* background-color: yellow; */

            .orderBoder {
              display: flex;
              background-color: var(--MIDBLUE);
              width: 100%;
              margin: 30px 0;
              padding-bottom: 50px;
              border-radius: 20px;
              .ordersecBorder1 {
                /* background-color: gray; */
                flex-grow: 1;
              }
              h2 {
                color: white;
                margin-left: 5px;
                padding: 30px 0 30px 0;
                font-weight: 600;
              }
              .orderImgBorder {
                width: 80%;
                padding-bottom: 80%;
                position: relative;
                overflow: hidden;
                border: 1px solid #ccc;
                border-radius: 20px;
                margin-left: 30px;
                img {
                  width: 100%;
                  position: absolute;
                }
              }
            }
            .ordersecBorder2 {
              white-space: nowrap;
              flex-grow: 9;
              font-size: 1.9em;
              padding-top: 16%;
              .orderComp {
                color: white;
                display: flex;
                margin-bottom: 40px;
                .orderTitle {
                  color: white;
                  font-weight: 600;
                }
              }
              p {
                color: white;
              }
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
        }
      }
    }
  }
`;

export default OrderListComp;
