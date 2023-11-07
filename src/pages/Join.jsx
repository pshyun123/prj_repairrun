import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { storage } from "../api/firebase";
import Joinstyle from "../style/Joinstyle";
import basicProfile from "../images/기본프로필.jpg";

const Join = () => {
  const params = useParams();
  const [imgSrc, setImgSrc] = useState(basicProfile);
  const [url, setUrl] = useState("");

  const handleFileInputChange = (e) => {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
    console.log(imgSrc);
  };

  return (
    <Joinstyle>
      <div className="container">
        <h2>소비자 회원가입</h2>
        <div className="profile">
          <div className="imgBox">
            <img src={imgSrc} alt="프로필이미지" />
          </div>
          <input type="file" onChange={(e) => handleFileInputChange(e)} />
        </div>
        <div className="wrapper">
          <div className="inputArea">
            <label name="name">
              <span>이름</span>
              <input type="text" />
            </label>
          </div>
          <div className="inputArea">
            <label name="userId">
              <span>아이디</span>
              <div className="box">
                <input type="text" />
                <p className="check">check</p>
              </div>
              <button>중복확인</button>
            </label>
          </div>
          <div className="inputArea">
            <label name="">
              <span>비밀번호</span>
              <div className="box">
                <input type="password" />
                <p className="check">check</p>
              </div>
            </label>
          </div>
          <div className="inputArea">
            <label name="">
              <span>전화번호</span>
              <div className="box">
                <input type="text" />
                <p className="check">check</p>
              </div>
              <button>중복확인</button>
            </label>
          </div>
          <div className="inputArea">
            <label name="">
              <span>EMAIL</span>
              <div className="box">
                <input type="email" />
                <p className="check">check</p>
              </div>
              <button>중복확인</button>
            </label>
          </div>
          <div className="inputArea">
            <label name="addr">
              <span>주소</span>
              <input type="text" />
              <button>주소찾기</button>
            </label>
          </div>
        </div>
        <div className="btnBox">
          <button>제출하기</button>
        </div>
      </div>
    </Joinstyle>
  );
};

export default Join;
