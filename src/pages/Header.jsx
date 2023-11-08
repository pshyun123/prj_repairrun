import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserStore";

import HeaderComp from "../style/HeaderStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/RepairRun_logo.png";

import MemHeader from "../component/MemHeader";
import PtnHeader from "../component/PtnHeader";

const Header = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { loginStatus, setLoginStatus } = context;

  const [active, setOpen] = useState("");
  const [icon, setIcon] = useState(active === "" ? faBars : faXmark);

  useEffect(() => {
    console.log(loginStatus);
  }, [loginStatus]);

  const mMenuClick = () => {
    active === "active" ? setOpen("") : setOpen("active");
    setIcon(icon === faBars ? faXmark : faBars);
  };

  const onLogOutClick = () => {
    setLoginStatus("");
    window.localStorage.setItem("userId", "");
    window.localStorage.setItem("userPw", "");
    console.log(
      "유저로그아웃 확인 아이디" + window.localStorage.getItem("userId")
    );
    console.log(
      "유저로그아웃 확인 상태" + window.localStorage.getItem("loginStatus")
    );
  };

  return (
    <>
      <HeaderComp>
        <div className="container">
          <FontAwesomeIcon
            icon={icon}
            className="m-menu"
            onClick={mMenuClick}
          />
          <div className="logo">
            <img src={Logo} alt="로고" />
          </div>
          {loginStatus === "" || loginStatus === "member" ? (
            <MemHeader active={active} togle={mMenuClick} />
          ) : (
            <PtnHeader active={active} togle={mMenuClick} />
          )}
          <div className="log-icon">
            {loginStatus === "" ? (
              <FontAwesomeIcon
                icon={faUser}
                onClick={() => {
                  navigate("/login");
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faRightFromBracket}
                onClick={onLogOutClick}
              />
            )}
          </div>
        </div>
      </HeaderComp>
      <Outlet />
    </>
  );
};
export default Header;
