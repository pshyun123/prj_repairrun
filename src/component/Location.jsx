import styled, { css } from "styled-components";

export const LocationComp = styled.section`
  display: flex;
  width: 100%;
  height: 0 auto;
  border: 1px solid darkgray;
  justify-items: center;
  align-content: space-evenly;

  .container {
    border: 1px solid darkgray;
    display: flex;

    .fastselect {
      width: 100%;

      h3 {
        text-align: center;
        margin: 10px;
      }
      .btnBox {
        display: flex;
        justify-items: center;
        justify-content: space-evenly;
        button {
          margin: 10px;
          flex: 1;
          width: 115px;
          padding: 20px;
          background-color: var(--DARKBLUE);
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 5px;
          border: 1px solid darkgray;
        }
      }

      img {
        width: 100%;
        margin: 10px;
      }
    }

    .searchArea {
      margin: 10px;
      padding: 0 3%;
      padding-top: 50px;
      width: 100%;
      background-color: var(--IVORY);

      .searchBox {
        width: 100%;
        display: flex;
        background-color: var(--DARKBLUE);
        color: white;
        border: 1px solid var(--DARKBLUE);
        border-radius: 4px;
        /* padding: 15px; */
        align-items: center;
        justify-content: space-between;

        input {
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 4px;
          flex-grow: 5;
        }
        svg {
          display: flex;
          justify-content: center;
          align-items: center;
          /* height: 100%; */
          flex-grow: 1;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .ptnList {
        height: 500px;
        overflow: scroll;
        width: 100%;
        padding: 10px;
        /* outline: 1px solid blue; */
        border-radius: 4px;
        background-color: var(--LIGHTBLUE);

        li {
          background-color: var(--DARKBLUE);
          outline: 1px solid darkgray;
          height: 20%;
          font-size: 1.6em;
          padding: 10px 20px;
          cursor: pointer;
        }
      }
    }
  }
`;
export default LocationComp;
