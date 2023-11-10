import NoticeComp from "../style/NoticeStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

const Lili = styled.li`
  .test {
    display: ${(props) => (props.coiseBtn ? "none" : "")};
  }
`;

const NoticeText = ({ noticePlus }) => {
  const [coiseBtn, setCoiseBtn] = useState(true);
  const [icon, setIcon] = useState(faAngleUp);

  const onClick = () => {
    setIcon(coiseBtn ? faAngleUp : faAngleDown); // noticeBtn이 true이면 faAngleUp, false이면 faAngleDown으로 아이콘 변경

    if (coiseBtn === true) {
      setCoiseBtn(false);
    } else setCoiseBtn(true);
  };

  return (
    <>
      <Lili coiseBtn={coiseBtn}>
        <div className="box">
          <div className="noticeTit">{noticePlus.noticeTitle}</div>
          <div className="noticeDateBox">{noticePlus.noticeDate}</div>
        </div>

        <div className="test active">
          <p>{noticePlus.noticeContents}</p>
        </div>
        <FontAwesomeIcon onClick={onClick} icon={icon} />
      </Lili>
    </>
  );
};

const NoticeList = () => {
  const noticeData = [
    {
      noticeTitle: "견적의뢰는 요금을 내야하나요?",
      noticeContents:
        "견적의뢰는 무료입니다. 별도의 비용이 청구되지 않으며, 원하시는 수선내용과 파트너를 찾지 못하셨다면, 시간을 두고 다시 의뢰하시는 방법을 추천드립니다.",
      noticeDate: "2023-10-20",
    },
    {
      noticeTitle: "견적은 어떻게 의뢰하나요?",
      noticeContents:
        "[빠른매칭] [일반매칭]버튼을 통하여 이용 가능합니다. 의뢰 이후, 견적이 안내된 경우 알려드리기 위하여 회원가입을 필수로 선행해야 하는 점 참고 부탁드립니다.",
      noticeDate: "2023-10-22",
    },

    {
      noticeTitle: "수선의뢰시 언제쯤 견적이 안내되나요?",
      noticeContents:
        "평균적으로 영업일 1일~2일 이내 대부분의 견적이 안내되고 있습니다. 실제로 각 수선업체에서 확인 후 안내드리고 있기에 다소 시일이 걸릴 수 있는 점 양해 부탁드립니다.",
      noticeDate: "2023-10-24",
    },

    {
      noticeTitle: "검수 완료된 수선품은 언제 배송되나요?",
      noticeContents:
        "택배 수령을 선택하신 경우 주말, 공휴일 제외 2~3일 정도 소요됩니다.",
      noticeDate: "2023-10-24",
    },

    {
      noticeTitle: "리뷰는 어떻게 작성하나요?",
      noticeContents:
        "수선이 완료되어 고객님께 전달된 시점부터 작성이 가능합니다.",
      noticeDate: "2023-10-24",
    },

    {
      noticeTitle: "수선사와 직접 연락할 수는 없나요? 연락처를 알고싶어요",
      noticeContents:
        "현재로서는, 각 수선업체의 수선사와 직접적인 연락은 어렵습니다. 소통을 위하여 채팅기능을 이용해주세요. ",
      noticeDate: "2023-10-24",
    },

    {
      noticeTitle: "수선 종류는 어떤 게 있나요?",
      noticeContents:
        "저희 리페어런은 가방 클리닝, 가죽 복원, 지퍼 수선, 신발 클리닝, 부분 염색, 손상 복원, 디자인 수선, 사이즈 수선, 기장 수선, 벨트 길이 수선, 가죽 교체, 염색을 서비스 하고 있습니다.",
      noticeDate: "2023-10-24",
    },

    {
      noticeTitle: "이용중에 불편한 점이나 오류가 있어요",
      noticeContents:
        "이용중 불편한 사항이나 문제가 있다면, 해당 화면을 캡쳐 후 고객센터에 내용을 전달해 주세요.",
      noticeDate: "2023-10-24",
    },

    {
      noticeTitle: "결제를 했는데 취소 하고 싶어요",
      noticeContents:
        "리페어런 고객센터로 성함과 연락처를 알려주시면 바로 응대해드리겠습니다.",
      noticeDate: "2023-10-24",
    },

    {
      noticeTitle: "다른사람 명의의 계좌로 환불받을 수 있나요?",
      noticeContents:
        "미성년자 혹은, 본인 계좌 발급 불가 등의 사유도 마찬가지로 환불이 어려우며 고객님 본인 명의의 계좌로만 환불이 가능합니다.",
      noticeDate: "2023-10-24",
    },
  ];
  return (
    <>
      <NoticeComp>
        <div className="container">
          <div className="noticeHeader">
            <h2>FAQ</h2>
          </div>
          <ul className="noticeMap">
            {noticeData.map((e) => (
              <NoticeText key={e.noticeTitle} noticePlus={e} />
            ))}
          </ul>
        </div>
      </NoticeComp>
    </>
  );
};

export default NoticeList;
