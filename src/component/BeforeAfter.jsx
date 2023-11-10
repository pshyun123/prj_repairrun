import styled from "styled-components";
import before from "../images/main_before_pc.png";
import after from "../images/main_after_pc.png";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const FixStyle = styled.div`
  .container {
    margin-bottom: 50px;
    .mainWrapper {
      width: calc(100vw -17px);
      height: calc(100vh -17px);
      display: grid;
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

const Fix = () => {
  return (
    <FixStyle>
      <div className="container">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={before} alt="before_repair" />}
          itemTwo={<ReactCompareSliderImage src={after} alt="after_repair" />}
        />
      </div>
    </FixStyle>
  );
};

export default Fix;

// yarn add react-compare-slider
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
