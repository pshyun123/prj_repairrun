import { OrderCheckComp } from "../style/GeneralStyle";
const tempData = {
  item: "가방 클리닝",
  brand: "구찌",
  request: "가죽 교체",
  extra: "가방 세탁이 급하게 필요해요.",
  fullImg:
    "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/2_full_bag.jpg?alt=media&token=e2c4d290-8679-463a-a2da-28c8bcddee76",
  detailImg1:
    "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/2_1_detail_bag.jpg?alt=media&token=c191ae3b-d308-4a32-9b19-6105bc8365a5",
  detailImg2:
    "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/2_1_detail_bag.jpg?alt=media&token=c191ae3b-d308-4a32-9b19-6105bc8365a5",
  detailImg3:
    "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/2_1_detail_bag.jpg?alt=media&token=c191ae3b-d308-4a32-9b19-6105bc8365a5",
};

export const OrderCheck = () => {
  return (
    <>
      <OrderCheckComp>
        <div className="container">
          <h3>
            <span>견적 요청서를</span> 확인해 주세요.
          </h3>
          <div className="orderContainer">
            <div className="itemBox">
              <p className="repairItem">품목</p>
              <p>{tempData.item}</p>
            </div>
            <div className="itemBox">
              <p className="repairItem">브랜드</p>
              <p>{tempData.brand}</p>
            </div>
            <div className="itemBox">
              <p className="repairItem">요청 사항</p>
              <p>{tempData.request}</p>
            </div>
            <div className="itemBox">
              <p className="repairItem">추가 설명</p>
              <p>{tempData.extra}</p>
            </div>
            <div className="itemBox">
              <div className="repairItemImg">
                <p>전체 사진</p>
                <img src={tempData.fullImg} alt="전체 이미지" />
              </div>
            </div>
            <div className="itemBox">
              <div className="repairItemImg">
                <p>상세 사진</p>
                <img src={tempData.fullImg} alt="상세 이미지" />
                <img src={tempData.fullImg} alt="상세 이미지" />
                <img src={tempData.fullImg} alt="상세 이미지" />
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <button>견적요청서 보내기</button>
          </div>
        </div>
      </OrderCheckComp>
    </>
  );
};

export default OrderCheck;
