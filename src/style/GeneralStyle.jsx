import styled, { css } from "styled-components";
// 사진 등록 컴포넌트
export const ImgUploadComp = styled.section`
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
    .title {
      width: 100%;
      h3 {
        text-align: center;
        font-weight: 400;
        padding: 20px;
        font-size: 1.5rem;

        span {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
      p {
        font-size: 1.3rem;
        font-weight: 600;
        text-align: left;
        padding-bottom: 10px;
      }
    }
    .exampleImgContainer {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      p {
        text-align: center;
        font-weight: 400;

        span {
          font-size: 35px;
          font-weight: 600;
        }
      }
      .imgBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        border: 1px solid darkgray;
        padding-top: 30px;
        img {
          width: 80%;
          position: relative;
          /* overflow: hidden; */
          border: 1px solid #ccc;
          border-radius: 10px;
        }
        p {
          padding: 20px;
        }
      }
    }
    .guideText {
      padding: 80px;
      width: 100%;
      background-color: var(--GREY);
      font-size: 1.3rem;
      font-weight: 400;

      span {
        font-size: 1.5rem;
        color: var(--DARKBLUE);
        font-weight: 600;
      }
      p {
        font-size: 1.3rem;
        text-align: center;
        font-weight: 400;
        padding: 10px;
      }
    }

    .uploadBox {
      border: 1px solid red;
      display: grid;
      /* grid-template-columns: repeat (auto-fill, minmax(220px, 1fr));
      grid-template-rows: 3; */
      gap: 20px;
      width: 100%;

      grid-template-areas:
        " textbox1 textbox2 none none "
        " img1 img2 img3 img4 "
        " input1 input2 input3 input4 ";

      .textBox1 {
        grid-area: textbox1;
        /* background-color: teal; */
        padding-top: 5%;
        p {
          text-align: left;
          font-weight: 600;
          font-size: 1.3rem;
          color: black;
        }
      }
      .textBox2 {
        grid-area: textbox2;
        padding-top: 5%;
        p {
          text-align: left;
          font-weight: 600;
          font-size: 1.3rem;
          color: black;
        }
      }
      .itemImg1 {
        outline: 1px solid orange;
        grid-area: img1;
        padding-bottom: 90%;
        width: 100%;
      }
      .itemImg2 {
        outline: 1px solid orange;
        grid-area: img2;
        padding-bottom: 90%;
        width: 100%;
      }
      .itemImg3 {
        outline: 1px solid orange;
        grid-area: img3;
        padding-bottom: 90%;
        width: 100%;
      }
      .itemImg4 {
        outline: 1px solid orange;
        grid-area: img4;
        padding-bottom: 90%;
        width: 100%;
      }
      .imgInput1 {
        outline: 1px solid blue;
        grid-area: input1;
        padding-bottom: 15%;
      }
      .imgInput2 {
        outline: 1px solid blue;
        grid-area: input2;
        padding-bottom: 15%;
      }
      .imgInput3 {
        outline: 1px solid blue;
        grid-area: input3;
        padding-bottom: 15%;
      }
      .imgInput4 {
        outline: 1px solid blue;
        grid-area: input4;
        padding-bottom: 15%;
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 10px;
        padding: 0;
        /* 이미지 업로드 공간의 크기를 정사각형으로 유지 */
        &:before {
          content: "";
          padding-bottom: 10%;
          display: block;
        }
      }
    }
    .buttonContainer {
      align-items: flex-end;

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
// 견적요청서 확인 컴포넌트
export const OrderCheckComp = styled.section`
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
    h3 {
      text-align: center;
      font-weight: 400;
      padding: 20px;
      font-size: 1.5rem;

      span {
        font-weight: 600;
        font-size: 1.6rem;
      }
    }
    .orderContainer {
      width: 70%;
      background-color: var(--IVORY);
      border-radius: 10px;
      padding: 30px;
      .itemBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        width: 100%;
        .repairItem {
          font-weight: 600;
        }
        p {
          font-size: 1.3rem;
          font-weight: 400;
          @media (max-width: 768px) {
            font-size: 1.1rem;
          }
        }
        .repairItemImg {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          width: 100%;

          border: 1px solid darkgray;

          p {
            font-weight: 600;
            font-size: 1.3rem;
            @media (max-width: 768px) {
              font-size: 1.1rem;
            }
          }
          img {
            width: 30%;
            overflow: hidden;
            border: 4px solid #ccc;
            border-radius: 10px;
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
        &:hover {
          cursor: pointer;
          background-color: var(--MIDBLUE);
        }
      }
    }
  }
`;
// 파트너 선택 컴포넌트
export const PartnerSelectComp = styled.section`
  display: flex;
`;
