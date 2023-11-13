import { PartnerSelectComp } from "../style/PartnerSelectStyle";
export const PartnerSelect = ({ onNext }) => {
  const tempData = {
    ptnLogo:
      "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/01_SilkRoad_logo.png?alt=media&token=71026c74-3311-42a0-ad70-338bd97139ce",
    rating: "4.5",
    ptnName: "SILK ROAD",
    repairItem: "의류 / 가방",
    repairPrice: "50,000",
  };
  return (
    <>
      <PartnerSelectComp>
        <div className="container">
          <div className="background">
            <div className="title">
              <h3>
                <span>파트너</span>를 선택해 보세요!
              </h3>
              <p>후기가 증명하는 최고의 파트너를 소개합니다.</p>
            </div>
            <div className="ptninfo">
              <div className="selectPtn">
                <img src={tempData.ptnLogo} alt="logo" />
              </div>
              <div className="ratingBox">
                <div className="ratingPtn">
                  <p>별점</p>
                  <div className="num">{tempData.rating}</div>
                </div>
              </div>
              <div className="itemBox">
                <div className="info">
                  <p>파트너 : {tempData.ptnName}</p>
                  <p>수선 항목 : {tempData.repairItem}</p>
                </div>
              </div>
              <div className="cost">
                <div className="costArea">
                  <p>{tempData.repairPrice}</p>
                </div>
              </div>
            </div>

            <div className="ptninfo">
              <div className="selectPtn">
                <img src={tempData.ptnLogo} alt="logo" />
              </div>
              <div className="ratingBox">
                <div className="ratingPtn">
                  <p>별점</p>
                  <div className="num">{tempData.rating}</div>
                </div>
              </div>
              <div className="itemBox">
                <div className="info">
                  <p>파트너 : {tempData.ptnName}</p>
                  <p>수선 항목 : {tempData.repairItem}</p>
                </div>
              </div>
              <div className="cost">
                <div className="costArea">
                  <p>{tempData.repairPrice}</p>
                </div>
              </div>
            </div>

            <div className="ptninfo">
              <div className="selectPtn">
                <img src={tempData.ptnLogo} alt="logo" />
              </div>
              <div className="ratingBox">
                <div className="ratingPtn">
                  <p>별점</p>
                  <div className="num">{tempData.rating}</div>
                </div>
              </div>
              <div className="itemBox">
                <div className="info">
                  <p>파트너 : {tempData.ptnName}</p>
                  <p>수선 항목 : {tempData.repairItem}</p>
                </div>
              </div>
              <div className="cost">
                <div className="costArea">
                  <p>{tempData.repairPrice}</p>
                </div>
              </div>
            </div>

            <div className="ptninfo">
              <div className="selectPtn">
                <img src={tempData.ptnLogo} alt="logo" />
              </div>
              <div className="ratingBox">
                <div className="ratingPtn">
                  <p>별점</p>
                  <div className="num">{tempData.rating}</div>
                </div>
              </div>
              <div className="itemBox">
                <div className="info">
                  <p>파트너 : {tempData.ptnName}</p>
                  <p>수선 항목 : {tempData.repairItem}</p>
                </div>
              </div>
              <div className="cost">
                <div className="costArea">
                  <p>{tempData.repairPrice}</p>
                </div>
              </div>
            </div>

            <div className="ptninfo">
              <div className="selectPtn">
                <img src={tempData.ptnLogo} alt="logo" />
              </div>
              <div className="ratingBox">
                <div className="ratingPtn">
                  <p>별점</p>
                  <div className="num">{tempData.rating}</div>
                </div>
              </div>
              <div className="itemBox">
                <div className="info">
                  <p>파트너 : {tempData.ptnName}</p>
                  <p>수선 항목 : {tempData.repairItem}</p>
                </div>
              </div>
              <div className="cost">
                <div className="costArea">
                  <p>{tempData.repairPrice}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button onClick={onNext}>결제하기</button>
            </div>
          </div>
        </div>
      </PartnerSelectComp>
    </>
  );
};

export default PartnerSelect;
