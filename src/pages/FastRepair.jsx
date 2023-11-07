import React, { useState, useEffect } from "react";
import { LocationComp, BrandInputComp } from "../component/Location";
import mapimg from "../images/metropolitan-area.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FastRepair = () => {
  return (
    <>
      <LocationComp>
        <div className="container">
          <div className="fastselect">
            <h3>빠른 수선 가능항목</h3>
            <div className="btnBox">
              <button>기장 수선</button>
              <button>지퍼 수선</button>
              <button>가방 클리닝</button>
              <button>신발 클리닝</button>
            </div>

            <img src={mapimg} alt="서비스 가능한 지역" />
          </div>
          <div className="searchArea">
            <div className="searchBox">
              <input type="text" placeholder="지역구를 입력하세요" />
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <ul className="ptnList">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      </LocationComp>
      <BrandInputComp>
        <div className="container">
          <div className="brandInput">
            <h3>
              <span>브랜드</span>를 입력해주세요.
            </h3>
            <input type="text"></input>
            <div className="buttonContainer">
              <button>다음</button>
            </div>
          </div>
        </div>
      </BrandInputComp>
    </>
  );
};

export default FastRepair;
