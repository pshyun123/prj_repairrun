import styled from "styled-components";

// 나의리뷰보기 상단 부분(나의리뷰보기,작성한리뷰,작성가능한리뷰,총4건)
export const ReviewTop = styled.section`
  width: 100%;
  height: 100%;
  .container {
    margin-top: 50px;
    margin-bottom: -70px;
    width: 100%;
    height: 100px;
    /* outline: 1px solid red; */
    .myreviewTitle {
      display: flex;
      justify-content: center;
      font-weight: 600;
      margin-top: 50px;
    }
    .writingReview {
      display: flex;
      position: absolute;
      bottom: 555px;
      left: 30;
      font-weight: 600;
      font-size: 15px;

      li {
        position: relative;
        cursor: pointer;
        color: var(--GREY);
        display: block;
        &.active {
          font-size: 18px;
          color: #000;
          margin-right: 15px;
        }
      }
    }
  }
  .total {
    font-weight: 600;
    text-align: right;
    margin-top: 60px;
    font-size: 20px;
  }
`;

// MemReview 컴포넌트에 대한 스타일
export const MemReviewBlock = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid var(--GREY);
  background-color: var(--DARKBLUE);

  .wrapper {
    width: 100%;
    padding: 20px;
    h3 {
      font-weight: 600;
      font-size: 1.2em;
      text-align: left;
      color: white;
      margin-bottom: 20px;
      outline: 1px solid red;
    }
    .wrap {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .imgBox {
        width: 100%;
        flex-grow: 1;
        .imgWrap {
          outline: 1px solid yellow;
          cursor: pointer;
          width: 80%;
          padding-bottom: 80%;
          overflow: hidden;
          position: relative;
          border-radius: 10px;
          &:hover {
            img {
              &:last-child {
                display: none;
              }
            }
          }
          img {
            width: 100%;
            height: 100%;
            position: absolute;
          }
        }
      }
    }
    .box {
      flex-grow: 1;
      width: 100%;
      outline: 1px solid yellow;
    }
    .box2 {
      flex-grow: 1;
      width: 100%;
      outline: 1px solid yellow;
    }
    .btnBox {
      position: absolute;
      .ch-btn {
        height: 30px;
        width: 50px;
        background-color: var(--LIGHTBLUE);
        border: none;
        font-weight: 600;
        color: white;
        cursor: pointer;
      }
    }
  }
`;

// MemReviewList 관련 정렬 하는 스타일
export const MemReviewListStyle = styled.section`
  width: 100%;
  padding: 20px 0;
  .container {
  }
`;
