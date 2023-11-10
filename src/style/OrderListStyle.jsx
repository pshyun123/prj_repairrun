import styled from "styled-components";

const OrderListComp = styled.div`
  width: 100%;
  .container {
    padding: 50px 0;
    .orderHeader {
      h2 {
        margin-bottom: 30px;
      }
      .orderBox {
        .couponBox {
          .orderContainer {
            .orderBoder {
              display: flex;
              background-color: var(--MIDBLUE);
              width: 100%;
              margin-bottom: 30px;
              padding: 40px;
              border-radius: 20px;
              .ordersecBorder1 {
                flex-grow: 1;
                h2 {
                  color: white;
                  margin-left: 5px;
                  margin-bottom: 40px;
                  font-weight: 600;
                }
                .orderImgBorder {
                  width: 80%;
                  padding-bottom: 80%;
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
            .ordersecBorder2 {
              white-space: nowrap;
              flex-grow: 1;
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
