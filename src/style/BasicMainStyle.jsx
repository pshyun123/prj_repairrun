import styled from "styled-components";

export const BannerStyle = styled.div`
  width: 100%;
  .mainBanner {
    text-align: center;
    padding-top: 120px;
    padding-bottom: 70px;
    background-image: url("https://img.freepik.com/premium-vector/autumn-atmosphere-horizontal-long-banner-type-autumn-sale-concept-web-banner-vector-illustration-for-invite-cover-promo_713752-370.jpg?w=996");
    background-size: cover;
    outline: 1px solid #999;
    margin-bottom: 30px;
    .bannerText {
      margin-bottom: 80px;
    }
    .matching {
      display: flex;
      justify-content: center;
      flex-direction: row;

      .fastButton,
      .generalButton {
        border: 1px solid grey;
        border-radius: 10px;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 50px;
        padding-right: 50px;
        background-color: var(--LIGHTBLUE);
        font-size: 1.2em;
        font-weight: 700;
        &:hover {
          background-color: var(--DARKBLUE);
          cursor: pointer;
        }
      }
      .fastButton {
        margin-right: 150px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .mainBanner {
      background-image: url("https://img.freepik.com/free-photo/medium-shot-woman-knitting-at-home_23-2149304912.jpg?w=996&t=st=1699349909~exp=1699350509~hmac=https://img.freepik.com/free-photo/medium-shot-woman-knitting-at-home_23-2149304912.jpg?w=996&t=st=1699349909~exp=1699350509~hmac=27a564500de9cc9d56667610490825c4dec75854336505d4d8f9caa13fd5c705");
      .matching {
        .fastButton,
        .generalButton {
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 30px;
          padding-right: 30px;
        }
        .fastButton {
          margin-right: 80px;
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
      outline: 1px solid black;
      position: relative;
      background-image: url("https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201909/16/f86881b8-d42b-4297-978e-66353aa37e29.jpg"),
        url("https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201909/16/51fff963-a6f6-42ab-91ba-1baf0674a862.jpg");
      background-position: center;
      background-size: cover;
      margin-bottom: 30px;
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

      .reason1 {
        grid-area: reason1;
        padding: 120px;
        background-image: url("https://www.lifegoeson.kr/wp-content/uploads/2022/12/company_business_01.jpg");
      }
      .reason2 {
        grid-area: reason2;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .reason3 {
        grid-area: reason3;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .reason4 {
        grid-area: reason4;
        padding: 120px;
        background-image: url("https://www.lifegoeson.kr/wp-content/uploads/2022/12/company_business_02.jpg");
      }
      .reason5 {
        grid-area: reason5;
        padding: 120px;
        background-image: url("https://www.lifegoeson.kr/wp-content/uploads/2023/09/company_business_03_230906.jpg");
      }
      .reason6 {
        grid-area: reason6;
        justify-content: center;
        align-items: center;
        display: flex;
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
      }
    }
  }
`;

export const SlideStyle = styled.div`
  .container {
  }
`;

export const ReviewStyle = styled.div`
  .container {
  }
`;
