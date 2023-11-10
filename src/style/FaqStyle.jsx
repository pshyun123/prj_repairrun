import styled from "styled-components";

const NoticeComp = styled.div`
  .container {
    padding: 60px 0;
    .noticeHeader {
      margin-bottom: 100px;
      font-weight: 600;
    }
    .noticeMap {
      li {
        position: relative;
        border-bottom: 1px solid var(--GREY);
        font-weight: 600;
        font-size: 1.3rem;
        padding-bottom: 10px;
        .box {
          display: flex;
          margin-top: 20px;
          justify-content: space-between;
          .noticeDateBox {
            color: #ccc;

            font-size: 1.1rem;
            padding-right: 25px;
          }
        }

        .test {
          transition: 0.4s ease-in;
          overflow: hidden;
          height: 0;
          padding: 0;
          &.active {
            overflow: visible;
            height: auto;
            padding: 40px 0;
          }
          p {
            margin: 0 auto;
            width: 1000px;
            flex-wrap: wrap;
            border-radius: 10px;
            background-color: var(--GREY);
            padding: 15px;
          }
        }
      }

      svg {
        color: var(--GREY);
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
    }
  }
`;

export default NoticeComp;
