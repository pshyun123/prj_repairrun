import styled from "styled-components";
import bannerpc from "../images/mainpage_banner_pc.jpg";
import bannermo from "../images/mainpage_banner_mo.jpg";
import before from "../images/main_before_pc.png";
import after from "../images/main_after_pc.png";
import meeting from "../images/meeting.jpg";
import delivery from "../images/delivery.jpg";
import connection from "../images/connection.jpg";

export const BannerStyle = styled.section`
  width: 100%;
  text-align: center;
  background-image: url(${bannerpc});
  background-size: cover;
  background-position: center;
  outline: 1px solid #999;
  margin-bottom: 30px;
  .mainBanner {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 80px 0;
    .container {
      .bannerText {
        margin-bottom: 80px;
        h2 {
          color: white;
        }
      }
      .matching {
        display: flex;
        justify-content: center;
        flex-direction: row;

        .fastButton,
        .generalButton {
          border: 1px solid grey;
          border-radius: 10px;
          padding: 15px 20px;
          background-color: rgba(0, 0, 0, 0.5);
          font-size: 1.2em;
          color: white;
          &:hover {
            background-color: var(--LIGHTBLUE);
            color: #333;
            cursor: pointer;
          }
        }
        .fastButton {
          margin-right: 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    background-image: url(${bannermo});
    .mainBanner {
      background-color: rgba(0, 0, 0, 0.4);
      .container {
        .bannerText {
          font-size: 0.8em;
        }
      }
    }
  }
`;

/////////////////////////////////////////////////

export const FixStyle = styled.div`
  .container {
    .beaf {
      padding: 400px;
      position: relative;
      background-image: url(${before}), url(${after});
      background-position: center;
      background-size: cover;
      margin-bottom: 60px;
      .before {
        position: absolute;
        top: 0;
        left: 0;
      }
      .after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      .beaf {
        padding: 200px;
      }
    }
  }
`;

/////////////////////////////////////////////////

export const ReasonStyle = styled.div`
  .container {
    .whyText {
      padding-bottom: 20px;
      .wtxt {
        font-size: 1.8em;
      }
    }
    .reasonSet {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 3;
      grid-template-areas:
        "reason1 reason2"
        "reason3 reason4"
        "reason5 reason6";
      gap: 20px;
      margin-bottom: 30px;
      line-height: 1.5em;

      .reason1 {
        grid-area: reason1;
        padding: 140px;
        background-image: url(${meeting});
        background-position: center;
        background-size: cover;
      }
      .reason2 {
        grid-area: reason2;
        padding: 0 10px;
        margin: auto;

        .repairR {
          font-size: 1.3em;
          line-height: 3em;
        }
      }
      .reason3 {
        grid-area: reason3;
        padding: 0 10px;
        margin: auto;
        .repairR {
          font-size: 1.3em;
          line-height: 3em;
        }
      }
      .reason4 {
        grid-area: reason4;
        padding: 140px;
        background-image: url(${delivery});
        background-position: center;
        background-size: cover;
      }
      .reason5 {
        grid-area: reason5;
        padding: 140px;
        background-image: url(${connection});
        background-position: center;
        background-size: cover;
      }
      .reason6 {
        grid-area: reason6;
        padding: 0 10px;
        margin: auto;
        .repairR {
          font-size: 1.3em;
          line-height: 3em;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      .reasonSet {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: 6;
        grid-template-areas:
          "reason1"
          "reason2"
          "reason4"
          "reason3"
          "reason5"
          "reason6";
        row-gap: 0px;
        .reason2 {
          margin-bottom: 20px;
        }
        .reason3 {
          margin-bottom: 20px;
        }
        .reason6 {
          margin-bottom: 20px;
        }
      }
    }
  }
`;

export const ReviewStyle = styled.div`
  .container {
  }
`;
