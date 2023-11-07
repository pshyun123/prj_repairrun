import styled from "styled-components";
import { Link } from "react-router-dom";
import 기본프로필 from "../images/기본프로필.jpg";

const UserInfoContainer = styled.div`
  width: 100%;
  /* background-color: var(--MIDBLUE); */
  /* height: 2000px; */
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: auto;
    flex-wrap: wrap;
    padding: 10px 0;

    .userProfile {
      width: 40%;
      background-color: red;
      display: flex;
      flex-direction: column; /* 세로로 쌓이도록 설정 */
      align-items: center; /* 가운데 정렬을 위해 추가 */
      justify-content: center; /* 가운데 정렬을 위해 추가 */
      .profileImg {
        position: relative;
        width: 100%;
        padding-bottom: 100%; /* 이미지의 높이를 부모 요소와 동일하게 설정 */
        overflow: hidden;
        .img {
          position: absolute;
          width: 100%;
          height: 100%; /* 이미지의 높이를 부모 요소와 동일하게 설정 */
          object-fit: cover;
          top: 0;
        }
      }
    }
    .userContent {
      display: flex;
      width: 60%;
      flex-direction: column; /* 세로로 쌓이도록 설정 */
      /* align-items: center; 가운데 정렬을 위해 추가 */
      justify-content: center; /* 가운데 정렬을 위해 추가 */

      /* background-color: green; */
      .userBox {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .title {
          width: 120px;
          font-size: 1.2em;
          font-weight: 800;
        }
      }
    }
    .userModification {
      position: absolute;
      right: 0;
    }
    @media only screen and (max-width: 768px) {
      .userModification {
        bottom: 0;
      }
    }
  }
`;

const UserInfo = () => {
  const userInfoEx = {
    name: "송중기",
    userId: "taeyang2016",
    userUrl:
      "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/user01.jpg?alt=media&token=e6562c4e-5394-41f2-9186-037eb9997336",
    email: "songJK@gmail.com",
    phoneNumber: "010-1234-5678",
    addr: "서울특별시 강남구 역삼동",
  };

  return (
    <>
      <UserInfoContainer>
        <div className="container">
          <div className="userProfile">
            <h3>{userInfoEx.name}님, 안녕하세요!</h3>
            <div className="profileImg">
              {<img src={userInfoEx.userUrl} alt="송중기" />}
            </div>
          </div>
          <div className="userContent">
            <div className="userBox">
              <p className="title">이름</p>
              <p>{userInfoEx.name}</p>
            </div>
            <div className="userBox">
              <p className="title">아이디</p>
              <p>{userInfoEx.userId}</p>
            </div>{" "}
            <div className="userBox">
              <p className="title">이메일</p>
              <p>{userInfoEx.email}</p>
            </div>{" "}
            <div className="userBox">
              <p className="title">전화번호</p>
              <p>{userInfoEx.phoneNumber}</p>
            </div>{" "}
            <div className="userBox">
              <p className="title">소 재 지</p>
              <p>{userInfoEx.addr}</p>
            </div>
          </div>

          <div className="userModification">
            <Link to="/MyPage/UpdateInfo">
              <button>수정하기</button>
            </Link>
          </div>
        </div>
      </UserInfoContainer>
    </>
  );
};

export default UserInfo;
