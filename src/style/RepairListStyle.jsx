import { styled } from "styled-components";

const RepairListComp = styled.section`
  width: 100%;
  .container {
    h2 {
      font-weight: 600;
      margin-bottom: 50px;
    }
    .repairWrapper {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .repairBox {
        width: 48%;
        padding: 40px 20px;
        background-color: var(--LIGHTBLUE);
        border-radius: 16px;
        margin-bottom: 30px;
        box-shadow: 1px 1px 5px 2px var(--DARKBLUE);
        h3 {
          text-align: center;
          margin-bottom: 30px;
          font-weight: 600;
        }
        table {
          width: 100%;
          thead {
            width: 100%;
            font-weight: bold;
            tr {
              th {
                padding-bottom: 16px;
                font-size: 1.2em;
              }
            }
          }
          tbody {
            tr {
              width: 100%;
              td {
                padding: 14px 0;
                text-align: center;
                font-weight: bold;
                font-size: 1.2em;
                &.name {
                  width: 40%;
                }
                &.days {
                  width: 26%;
                  input {
                    width: 50%;
                    text-align: right;
                  }
                }
                &.price {
                  input {
                    width: 100%;
                    text-align: center;
                    padding-left: 12px;
                  }
                }
                input {
                  background-color: var(--LIGHTBLUE);
                  border: none;
                  color: #333;
                  font-weight: bold;
                  font-size: 1em;
                }
              }
            }
          }
        }
        .btnBox {
          display: flex;
          justify-content: center;
          margin-top: 16px;
          button {
            padding: 8px 12px;
            border: none;
            border-radius: 5px;
            background-color: var(--MIDBLUE);
            color: white;
            cursor: pointer;
            transition: 0.3s ease-in;
            &:hover {
              background-color: var(--DARKBLUE);
            }
          }
        }
      }
    }
  }
`;
export default RepairListComp;
