import styled, { css } from "styled-components";

export const ItemSelectComp = styled.section`
  .container {
    border: 1px solid darkgray;
    display: flex;
    flex-direction: column;
    padding: 200px 30px;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      text-align: center;
      font-weight: 400;

      span {
        font-size: 35px;
        font-weight: 600;
      }
    }

    .itemImg {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: 20px 0;
      justify-content: center;
      align-content: center;

      button {
        margin: 10px;
      }
      p {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
    @media only screen and (max-width: 768px) {
      .itemImg {
        display: flex;
        flex-wrap: wrap;
      }
    }
    .buttonContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 0 100px;

      button {
        width: 150px;
        height: 45px;
        border-radius: 30px;
        border-style: none;
        background-color: var(--DARKBLUE);
        color: white;
        font-weight: 600;
        font-size: 1.3rem;
        &:hover {
          cursor: pointer;
          background-color: var(--MIDBLUE);
        }
      }
    }
  }
`;

// 수선 세부사항 - 라디오 박스 스타일

export const RadioBox = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  label {
    padding: 25px;
    border: 1px solid #ccc;
    height: 2rem;
    cursor: pointer;
    border-radius: 2rem;
    background-color: var(--DARKBLUE);
    position: relative;
    font-size: 1.3rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: keep-all;
    text-align: center;

    /* 체크박스를 라벨 내에 숨깁니다. */
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
      top: 0;
      left: 0;
    }
  }
`;

// RequestComp : 요청사항 스타일
export const RequestComp = styled.section`
  .container {
    border: 1px solid darkgray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;

    .request {
      width: 80%;

      .requestType {
        width: 100%;
        border: 1px solid darkgray;
        h3 {
          text-align: center;
          font-weight: 400;

          span {
            font-size: 35px;
            font-weight: 600;
          }
        }
        .detailItem {
          h3 {
            font-size: 1.3rem;
            font-weight: 600;
            text-align: left;
          }
        }
      }
    }
    .extraExplain {
      height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border: 1px solid darkgray;
      h3 {
        font-size: 1.3rem;
        font-weight: 600;
      }
      .example {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 25%;
        width: 100%;
        border: 1px solid darkgray;
        background-color: var(--LIGHTBLUE);
        text-align: center;
        h4 {
          font-size: 1rem;
          color: var(--DARKBLUE);
          font-weight: 400;
          padding: 5px;
        }
        p {
          font-size: 1.3rem;
          font-weight: 400;
        }
      }
      input {
        height: 65%;
        width: 100%;
      }
    }
    .example {
      height: 100px;
      border: 1px solid darkgray;
      /* padding: 30px; */
      background-color: var(--LIGHTBLUE);
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
        &:hover {
          cursor: pointer;
          background-color: var(--MIDBLUE);
        }
      }
    }
  }
`;
