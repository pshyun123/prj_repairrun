import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../api/firebase";
import DaumPostPopup from "../api/DaumPost";
import basicProfile from "../images/기본프로필.jpg";
import Modal from "../util/Modal";
import MemberApi from "../api/MemberApi";
import PartnerApi from "../api/PartnerApi";
import { UserContext } from "../context/UserStore";
import UpdateInfoStyle from "../style/UpdateInfoStyle";

const UpdateInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { loginStatus } = context;
  const status = loginStatus;
  const userId = window.localStorage.getItem("userId");
  const userName = window.localStorage.getItem("userName");
  const userImg = window.localStorage.getItem("userImg");
  const originImg = userImg !== null ? userImg : basicProfile;
  console.log(status);

  const userPw = window.localStorage.getItem("userPw");

  //프로필이미지
  const [imgSrc, setImgSrc] = useState(originImg);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  //키보드 입력
  const [inputPw, setInputPw] = useState("");
  const [inputPhone, setInputPhone] = useState(
    window.localStorage.getItem("userPhone")
  );
  const [inputEmail, setInputEmail] = useState(
    window.localStorage.getItem("userEmail")
  );
  const [inputAddr, setInputAddr] = useState(
    window.localStorage.getItem("userAddr")
  );
  //파트너만
  const [inputDesc, setInputDesc] = useState(
    window.localStorage.getItem("ptnDesc")
  );

  // 오류 메세지
  const [pwMessage, setPwMessage] = useState("");
  const [pwMessage2, setPwMessage2] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  // 파트너만
  const [descMessage, setDescMessage] = useState("");

  // 유효성 검사
  const [isPw, setIsPw] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isAddr, setIsAddr] = useState(false);
  const [isDesc, setIsDesc] = useState(true);

  //팝업 처리
  const [openModal, setModalOpen] = useState(false);
  const closeModal = (num) => {
    setModalOpen(false);
  };
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  //주소 팝업
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const openPostCode = () => {
    setIsPopUpOpen(true);
  };
  const closePostCode = () => {
    setIsPopUpOpen(false);
  };

  const setAddr = (addr) => {
    setInputAddr(addr);
    setIsAddr(true);
  };

  //입력받은 이미지 파일 주소
  const handleFileInputChange = (e) => {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
    // 파이어베이스에 보내기위해 변수에 저장
    setFile(e.target.files[0]);
    console.log(imgSrc);
  };

  const regexList = [
    // id
    /^[a-zA-Z0-9]{8,15}$/,
    //pw
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_#^*?])[A-Za-z\d@$!%_#^*?]{12,15}$/,
    //phone
    /^\d{3}-\d{4}-\d{4}$/,
    //email
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    //ptnPhone
    /^\d{2,3}-\d{3,4}-\d{4}$/,
  ];

  const onChangeInpt = (e, num) => {
    switch (num) {
      case 1:
        const currPw = e.target.value;
        setInputPw(currPw);
        if (!regexList[1].test(currPw)) {
          setPwMessage(
            "소대문자, 숫자, 특수기호 포함 12자 이상 15자 이하로 입력 하세요"
          );
          setIsPw(false);
        } else {
          setPwMessage("사용 가능합니다");
          setIsPw(true);
        }
        break;
      case 2:

      default:
    }
  };

  return (
    <>
      <UpdateInfoStyle>
        <div className="container">
          <h2>{status === "member" ? "회원" : "파트너"}정보 수정</h2>
          <div className="profile">
            <div className="imgBox">
              <img src={imgSrc} alt="프로필이미지" />
            </div>
            <input type="file" onChange={(e) => handleFileInputChange(e)} />
          </div>
          <div className="wrapper">
            <div className="inputArea">
              <label className="name">
                <span>{status === "member" ? "이름" : "파트너명"}</span>
                <div className="box">
                  <input
                    className="fixed"
                    type="text"
                    disabled
                    value={userName}
                  />
                </div>
              </label>
            </div>
            <div className="inputArea">
              <label name="userId">
                <span>아이디</span>
                <div className="box">
                  <input
                    className="fixed"
                    type="text"
                    disabled
                    value={userId}
                  />
                </div>
              </label>
            </div>
            <div className="inputArea pwArea">
              <label name="userPw">
                <span>비밀번호</span>
                <div className="box">
                  <input type="password" placeholder="기존 비밀번호 입력" />
                  <p className="check">안녕</p>
                </div>
              </label>
              <div className="inputbox">
                <input type="password" />
                <input type="passowrd" />
              </div>
            </div>
            <div className="inputArea">
              <label name="phone">
                <span>전화번호</span>
                <div className="box">
                  <input
                    type="text"
                    placeholder="'-' 포함 입력하세요"
                    defaultValue={inputPhone}
                  />
                </div>
              </label>
            </div>
            <div className="inputArea">
              <label name="email">
                <span>EMAIL</span>
                <div className="box">
                  <input type="email" defaultValue={inputEmail} />
                </div>
              </label>
            </div>
            <div className="inputArea">
              <label name="addr">
                <span>주소</span>
                <input type="text" defaultValue={inputAddr} />
                <button className="active" onClick={openPostCode}>
                  주소찾기
                </button>
              </label>
              {isPopUpOpen && (
                <DaumPostPopup onClose={closePostCode} setAddr={setAddr} />
              )}
            </div>
            {status === "partner" && (
              <div className="inputArea">
                <label name="desc">
                  <span>소개글</span>
                  <div className="box">
                    <textarea
                      cols="34"
                      rows="5"
                      defaultValue={inputDesc}
                    ></textarea>
                  </div>
                </label>
              </div>
            )}
          </div>
          <div className="btnBox">
            {isPw && isPhone && isEmail && isAddr && isDesc ? (
              <button className="active">제출하기</button>
            ) : (
              <button>제출하기</button>
            )}
            <button className="active">취소하기</button>
          </div>
        </div>
      </UpdateInfoStyle>
    </>
  );
};
export default UpdateInfo;
