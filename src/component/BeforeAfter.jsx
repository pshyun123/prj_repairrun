import styled from "styled-components";
import before from "../images/main_before_pc.png";
import after from "../images/main_after_pc.png";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const FixStyle = styled.div`
  .container {
    margin-bottom: 80px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
    .beforeStyle {
      justify-content: start;
    }
    .afterStyle {
      justify-content: end;
    }
    .afterStyle,
    .beforeStyle {
      display: flex;
      align-items: top;
      width: 100%;
      height: 100%;

      .label {
        font-size: 1.25em;
        position: absolute;
        padding: 20px;
        color: white;
        border-radius: 30px;
        /* backdrop-filter: blur(0.25rem) saturate(180%) contrast(80%)
        brightness(120%);
      -webkit-backdrop-filter: blur(0.25rem) saturate(180%) contrast(80%)
        brightness(120%);*/
        transition: opacity 0.25s ease-in-out;
        margin: 25px;
        background-color: var(--DARKBLUE);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      .afterStyle,
      .beforeStyle {
        .label {
          padding: 5px;
          margin: 3px;
        }
      }
    }
  }
`;

const Fix = () => {
  return (
    <FixStyle>
      <div className="container">
        <ReactCompareSlider
          itemOne={
            <div className="beforeStyle">
              <div className="label">수선 전</div>
              <ReactCompareSliderImage src={before} alt="beforeImage" />
            </div>
          }
          itemTwo={
            <div className="afterStyle">
              <div className="label">수선 후</div>
              <ReactCompareSliderImage src={after} alt="afterImage" />
            </div>
          }
        />
      </div>
    </FixStyle>
  );
};

export default Fix;
// yarn add react-compare-slider
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
