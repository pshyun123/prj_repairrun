import React, { useState } from "react";
import { ImgUploadComp } from "../style/ImgUploadStyle";
import full from "../images/full.png";
import inside from "../images/inside.png";
import side from "../images/side.png";
import spot from "../images/spot.png";

export const ImgUpload = ({ onNext }) => {
  const [fullImg, setFullImg] = useState(full);
  const [insideImg, setInsideImg] = useState(inside);
  const [sideImg, setSideImg] = useState(side);
  const [spotImg, setSpotImg] = useState(spot);
  const [selectedImgCount, setSelectedImgCount] = useState(0);

  const handleFileChange = (e, setImg) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    setSelectedImgCount(selectedImgCount + 1);
  };

  const handleNextClick = () => {
    // itemImg1은 필수로 업로드 되어야 하며,
    // itemImg2, itemImg3, itemImg4 중 최소 1장은 필수로 업로드 되어야 함
    if (selectedImgCount >= 1 && fullImg && insideImg && sideImg && spotImg) {
      onNext();
    }
  };

  return (
    <>
      <ImgUploadComp>
        <div className="container">
          {/* 예시 사진 */}
          <div className="title">
            <h3>
              <span>사진</span>을 등록해주세요.
            </h3>
            <p>등록 예시</p>
          </div>

          <div className="exampleImgContainer">
            <div className="imgBox">
              <img src={full} alt="full" />
              <p>전체</p>
            </div>
            <div className="imgBox">
              <img src={inside} alt="inside" />
              <p>안쪽</p>
            </div>
            <div className="imgBox">
              <img src={side} alt="side" />
              <p>옆면</p>
            </div>
            <div className="imgBox">
              <img src={spot} alt="spot" />
              <p>수선 부위</p>
            </div>
          </div>

          <div className="guideText">
            <span>전체적인 앞 / 뒤 사진</span>과
            <span> 수선이 필요한 상세 부위</span>를<p>자세하게 촬영해주세요.</p>
          </div>

          {/* 그리드 적용-이미지 업로드 */}
          <div className="uploadBox">
            <div className="textBox textBox1">
              <p>전체 사진</p>
            </div>
            <div className="textBox textBox2">
              <p>상세 사진</p>
            </div>
            <div className="itemImg itemImg1">
              <img src={fullImg} alt="itemImg1" />
            </div>
            <div className="imgInput imgInput1">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setFullImg)}
                required
              />
            </div>

            <div className="itemImg itemImg2">
              <img src={insideImg} alt="itemImg2" />
            </div>
            <div className="imgInput imgInput2">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setInsideImg)}
              />
            </div>

            <div className="itemImg itemImg3">
              <img src={sideImg} alt="itemImg3" />
            </div>
            <div className="imgInput imgInput3">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setSideImg)}
              />
            </div>

            <div className="itemImg itemImg4">
              <img src={spotImg} alt="itemImg4" />
            </div>
            <div className="imgInput imgInput4">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, setSpotImg)}
              />
            </div>
          </div>
          <div className="buttonContainer">
            <button onClick={handleNextClick} disabled={selectedImgCount < 1}>
              다음
            </button>
          </div>
        </div>
      </ImgUploadComp>
    </>
  );
};

export default ImgUpload;
