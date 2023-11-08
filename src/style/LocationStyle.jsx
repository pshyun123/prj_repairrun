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
    padding: 80px 0;

    .fastselect {
      width: 100%;

      h3 {
        text-align: center;
        margin: 10px;
        font-weight: 600;
      }
      .btnBox {
        display: flex;
        justify-items: center;
        justify-content: space-evenly;
        padding: 10px;
        button {
          position: relative;
          margin: 7px;
          flex: 1;
          width: 20%;
          padding-bottom: 20%;
          background-color: var(--DARKBLUE);
          color: white;
          font-size: 1.4rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 5px;
          border: 1px solid darkgray;
          word-break: keep-all;
          &:hover {
            background-color: var(--MIDBLUE);
          }
          p {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
        }
      }

      img {
        width: 100%;
        margin: 10px;
      }
    }

    .searchArea {
      padding: 0 3%;
      padding-top: 50px;
      background-color: var(--IVORY);
      width: 100%;

      .searchBox {
        width: 100%;
        margin-bottom: 20px;
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
          height: 60px;
          border: 1px solid #ccc;
          border-radius: 4px;
          flex-grow: 5;
          font-size: 1.2rem;
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
        height: 600px;
        overflow: scroll;
        /* width: 100%; */
        padding: 20px;
        /* outline: 1px solid blue; */
        border-radius: 4px;
        background-color: var(--GREY);

        li {
          background-color: var(--LIGHTBLUE);
          outline: 1px solid darkgray;
          height: 20%;
          font-size: 1.6em;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }
  @media only screen and (max-width: 1185px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const BrandInputComp = styled.section`
  background-color: var(--IVORY);
  .container {
    /* border: 1px solid darkgray; */
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    .brandInput {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      /* align-items: flex-end; */
      width: 45%;

      input {
        padding: 22px;
        width: 100%;
        background-color: var(--LIGHTBLUE);
        border-style: none;
        margin: 15px 0;
        border-radius: 5px;
      }
    }
    @media only screen and (max-width: 768px) {
      .brandInput {
        width: 100%;
      }
    }

    h3 {
      text-align: center;
      font-weight: 400;

      span {
        font-size: 35px;
        font-weight: 600;
      }
    }
  }
  .buttonContainer {
    text-align: right;

    button {
      width: 150px;
      height: 45px;
      border-radius: 30px;
      border-style: none;
      background-color: var(--DARKBLUE);
      color: white;
      font-weight: 600;
      font-size: 1.3rem;
    }
  }
`;
export default LocationComp;
