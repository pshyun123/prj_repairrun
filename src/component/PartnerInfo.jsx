import PartnerInfoComp from "../style/PartnerInfoStyle";

const PartnerInfo = () => {
  const tempData = {
    ptnName: "SILK ROAD",
    logoImgUrl:
      "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/01_SilkRoad_logo.png?alt=media&token=71026c74-3311-42a0-ad70-338bd97139ce",
    ptnPhone: "02-123-4567",
    ptnEmail: "silkroad01@gmail.com",
    ptnAddr: "서울특별시 강남구 강남대로 123",
    ptnDesc: "요청사항에 맞춰 빠르고 정확하게 수선해드립니다",
  };

  return (
    <>
      <PartnerInfoComp>
        <div className="container">
          <div className="infoHeader">
            <h2>{tempData.ptnName}</h2>
            <div className="logo">
              <img src={tempData.logoImgUrl} alt="로고" />
            </div>
          </div>
          <div className="ptninfo">
            <div className="info-box">
              <p className="title">전화번호</p>
              <p>{tempData.ptnPhone}</p>
            </div>
            <div className="info-box">
              <p className="title">EMAIL</p>
              <p>{tempData.ptnEmail}</p>
            </div>
            <div className="info-box">
              <p className="title">소재지</p>
              <p>{tempData.ptnAddr}</p>
            </div>
            <div className="info-box">
              <p className="title">소개글</p>
              <p className="desc">{tempData.ptnDesc}</p>
            </div>
          </div>
          <div className="btnBox">
            <button>수정하기</button>
          </div>
        </div>
      </PartnerInfoComp>
    </>
  );
};
export default PartnerInfo;
