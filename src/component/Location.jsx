import React, { useState } from "react";
import { LocationComp } from "../style/LocationStyle";
import mapimg from "../images/metropolitan-area.jpg";

const Location = ({ onNext }) => {
  // 선택된 항목을 저장할 상태 추가
  const [selectedItem, setSelectedItem] = useState(null);

  // 버튼 클릭 시 선택된 항목 업데이트
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // 다음 버튼 클릭 시 이동 및 선택된 항목 정보 전달
  const handleNextClick = () => {
    if (selectedItem) {
      onNext(selectedItem);
    }
  };

  return (
    <>
      <LocationComp>
        <div className="container">
          <div className="fastselect">
            <h3>빠른 수선 가능항목</h3>
            <div className="btnBox">
              <button onClick={() => handleItemClick("기장 수선")}>
                <p>기장 수선</p>
              </button>
              <button onClick={() => handleItemClick("지퍼 수선")}>
                <p>지퍼 수선</p>
              </button>
              <button onClick={() => handleItemClick("가방 클리닝")}>
                <p>가방 클리닝</p>
              </button>
              <button onClick={() => handleItemClick("신발 클리닝")}>
                <p>신발 클리닝</p>
              </button>
            </div>
            <h3>이용 가능한 지역</h3>
            <img src={mapimg} alt="서비스 가능한 지역" />
          </div>

          <div className="buttonContainer">
            <button disabled={!selectedItem} onClick={handleNextClick}>
              다음
            </button>
          </div>
        </div>
      </LocationComp>
    </>
  );
};

export default Location;
