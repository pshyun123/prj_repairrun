import styled from "styled-components";
import { Link } from "react-router-dom";
import 기본프로필 from "../images/기본프로필.jpg";

const UserInfoContainer = styled.div`
  width: 100%;
  background-color: var(--MIDBLUE);
  /* height: 2000px; */
  .container {
    display: flex;
    justify-content: space-between;
    height: auto;
    flex-wrap: wrap;

    .userProfile {
      flex-grow: 1;
      background-color: red;
      img {
        max-width: 350px;
        height: 350px;
      }
    }
    .userContent {
      position: relative;
      flex-grow: 2;
      background-color: green;
    }
    .userBox1,
    .userBox2,
    .userBox3,
    .userBox4,
    .userBox5 {
      display: flex;
      align-items: center;

      margin-bottom: 10px;
    }
    .userModification {
      flex-grow: 1;
      background-color: black;
      display: flex;
      justify-content: flex-end;
    }
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
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
            <img src={userInfoEx.userUrl} alt="송중기" />
          </div>
          <div className="userContent">
            <div className="userBox1">
              <p>이름</p>
              <p>{userInfoEx.name}</p>
            </div>
            <div className="userBox2">
              <p>아이디</p>
              <p>{userInfoEx.userId}</p>
            </div>{" "}
            <div className="userBox3">
              <p>이메일</p>
              <p>{userInfoEx.email}</p>
            </div>{" "}
            <div className="userBox4">
              <p>전화번호</p>
              <p>{userInfoEx.phoneNumber}</p>
            </div>{" "}
            <div className="userBox5">
              <p>소 재 지</p>
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
