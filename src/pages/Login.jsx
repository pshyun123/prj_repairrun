import LoginStyle from "../style/LoginStyle";

const Login = () => {
  return (
    <LoginStyle>
      <div className="container">
        <div className="loginText">
          <h2>로그인</h2>
        </div>
        <div className="loginProcess">
          <div className="loginType">
            <button className="active">개인 회원 로그인</button>
            <button>파트너 로그인</button>
          </div>
          <div className="loginInput">
            <div className="idInput">
              <label for="userId">아이디 </label>
              <input type="text" />
            </div>
            <div className="pwInput">
              <label for="userPw">비밀번호</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <button className="loginButton">
              <h4>로그인</h4>
            </button>
          </div>
          <div className="forgotbox">
            <div className="findId">
              아이디를 잊으셨나요?
              <button>아이디 찾기</button>
            </div>
            <div className="findPw">
              비밀번호를 잊으셨나요?
              <button>비밀번호 찾기</button>
            </div>
          </div>
        </div>
        <div className="noJoin">
          <div className="noMember">
            아직 리페어런의 회원이 아니신가요?
            <button>일반회원 가입</button>
          </div>
          <div className="noPartner">
            리페어런의 파트너가 되길 원하시나요?
            <button>파트너 가입</button>
          </div>
        </div>
      </div>
    </LoginStyle>
  );
};

export default Login;
