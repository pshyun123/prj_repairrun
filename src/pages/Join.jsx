import React, { useState } from "react";
import Joinstyle from "../style/Joinstyle";
import GlobalStyle from "../style/GlobalStyle";

const Join = () => {
  return (
    <div className="container">
      <Joinstyle>
        <div className="signup">
          <h2>소비자 회원가입</h2>
        </div>
        <div class="profileImg">
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <p>
              <label htmlFor="Join">이름</label>
            </p>
            <br />
            <p>
              <label htmlFor="Join">아이디</label>
            </p>
            <br />
            <p>
              <label htmlFor="Join">비밀번호</label>
            </p>
            <br />
            <p>
              <label htmlFor="Join">전화번호</label>
            </p>
            <br />
            <p>
              <label htmlFor="Join">E-MAIL</label>
            </p>
            <br />
            <p>
              <label htmlFor="Join">주소</label>
            </p>
          </div>
          <div className="input">
            <p>
              <input type="text" />
            </p>
            <br />
            <p>
              <input type="text" />
            </p>
            <br />
            <p>
              <input type="text" />
            </p>
            <br />
            <p>
              <input type="text" />
            </p>
            <br />
            <p>
              <input type="text" />
            </p>
            <br />
            <p>
              <input type="text" />
            </p>
            <br />
            <p>
              <input type="text" />
            </p>
            <br />
          </div>
          <div>
            <p>
              <button className="short">중복확인</button>
            </p>
            <br />
            <p>
              <button className="short">중복확인</button>
            </p>
            <br />
            <p>
              <button className="short">중복확인</button>
            </p>
            <br />
            <p>
              <button className="short">확인</button>
            </p>
            <br />
            <p>
              <button className="short">주소찾기</button>
            </p>
            <br />
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button className="short">인증발송</button>
            <br />
          </div>
        </div>
        <div class="joinConfirm">
          <button className="Basic">가입완료</button>
        </div>
      </Joinstyle>
    </div>
  );
};

export default Join;
