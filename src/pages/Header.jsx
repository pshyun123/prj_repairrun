import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import HeaderComp from "../style/HeaderStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/RepairRun_logo.png";

import MemHeader from "../component/MemHeader";
import PtnHeader from "../component/PtnHeader";

const Header = () => {
  const navigate = useNavigate();

  const [member, setMember] = useState(true);
  const [active, setOpen] = useState("");
  const [icon, setIcon] = useState(active === "" ? faBars : faXmark);

  const test = () => {
    member ? setMember(false) : setMember(true);
  };

  const mMenuClick = () => {
    active === "active" ? setOpen("") : setOpen("active");
    setIcon(icon === faBars ? faXmark : faBars);
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
          {member ? (
            <MemHeader active={active} togle={mMenuClick} />
          ) : (
            <PtnHeader active={active} togle={mMenuClick} />
          )}
          <div className="log-icon">
            <FontAwesomeIcon icon={faUser} onClick={test} />
          </div>
        </div>
      </HeaderComp>
      <Outlet />
    </>
  );
};
export default Header;
