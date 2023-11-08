import UserInfoComp from "../style/UserInfoStyle";
import { Link } from "react-router-dom/dist";
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
      <UserInfoComp>
        <div className="container">
          <div className="userProfile">
            <h2>{userInfoEx.name}님, 안녕하세요!</h2>
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
            </div>
            <div className="userBox">
              <p className="title">EMAIL</p>
              <p>{userInfoEx.email}</p>
            </div>
            <div className="userBox">
              <p className="title">전화번호</p>
              <p>{userInfoEx.phoneNumber}</p>
            </div>
            <div className="userBox">
              <p className="title">소재지</p>
              <p>{userInfoEx.addr}</p>
            </div>
          </div>

          <div className="userModification">
            <Link to="/MyPage/UpdateInfo">
              <button>수정하기</button>
            </Link>
          </div>
        </div>
      </UserInfoComp>
    </>
  );
};

export default UserInfo;
