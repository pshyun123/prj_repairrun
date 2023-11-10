import NoticeComp from "../style/NoticeStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const Li = styled.li`
  /* .test {
    display: ${(props) => (props.coisebtn ? "block" : "none")};
  } */
`;

const NoticeText = ({ noticePlus, isNotice }) => {
  const [icon, setIcon] = useState(faAngleDown);
  const [active, setActive] = useState("");

  const onClick = () => {
    icon === faAngleDown ? setIcon(faAngleUp) : setIcon(faAngleDown);
    active === "" ? setActive("active") : setActive("");
  };

  return (
    <>
      <Li>
        {/* coisebtn={coisebtn} */}
        <div className="box">
          <div className="noticeTit">{noticePlus.noticeTitle}</div>
          {isNotice && (
            <div className="noticeDateBox">{noticePlus.noticeDate}</div>
          )}
        </div>

        <div className={`test ${active}`}>
          <p>{noticePlus.noticeContents}</p>
        </div>
        <FontAwesomeIcon onClick={onClick} icon={icon} />
      </Li>
    </>
  );
};

const NoticeList = ({ noticeData, faqData }) => {
  return (
    <>
      <NoticeComp>
        <div className="container">
          <div className="noticeHeader">
            <h2>{noticeData ? "공지사항" : "FAQ"}</h2>
          </div>
          <ul className="noticeMap">
            {noticeData &&
              noticeData.map((e) => (
                <NoticeText
                  key={e.noticeTitle}
                  noticePlus={e}
                  isNotice={true}
                />
              ))}
            {faqData &&
              faqData.map((e) => (
                <NoticeText
                  key={e.noticeTitle}
                  noticePlus={e}
                  isNotice={false}
                />
              ))}
          </ul>
        </div>
      </NoticeComp>
    </>
  );
};

export default NoticeList;
