import React from "react";
import { LocationComp } from "../style/LocationStyle";
import mapimg from "../images/metropolitan-area.jpg";

const Location = ({ onNext }) => {
  return (
    <>
      <LocationComp>
        <div className="container">
          <div className="fastselect">
            <h3>빠른 수선 가능항목</h3>
            <div className="btnBox">
              <button>
                <p>기장 수선</p>
              </button>
              <button>
                <p>지퍼 수선</p>
              </button>
              <button>
                <p>가방 클리닝</p>
              </button>
              <button>
                <p>신발 클리닝</p>
              </button>
            </div>
            <h3>이용 가능한 지역</h3>
            <img src={mapimg} alt="서비스 가능한 지역" />
          </div>

          <div className="buttonContainer">
            <button onClick={onNext}>다음</button>
          </div>
        </div>
      </LocationComp>
    </>
  );
};

export default Location;
