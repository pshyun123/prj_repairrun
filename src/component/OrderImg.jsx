import OrderImgComp from "../style/OrderImgStyle";
import OrderImgSwiper from "../util/OrderImgSwiper";

const OrderImg = ({ orderInfo }) => {
  const orderDetailData = {
    orderNumber: "231029101123",
    userId: "Attend",
    repairItem: "가방",
    brand: "구찌",
    repairDetail: "가죽 복원",
    orderRequest: "지갑 가죽을 새것처럼 교체해주세요",
    priceTotal: "39000",
    orderDate: "D-2",
    imgListUrl: [
      {
        type: "imgFullUrl",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/14_full_bag.jpeg?alt=media&token=b0dcc4bd-64aa-40e1-b70d-d7e8b84e29e8",
      },
      {
        type: "imgDetail1",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/14_3_detail_bag.jpeg?alt=media&token=68d7eea9-58c4-4172-87ea-416ce980f696",
      },
      {
        type: "imgDetail2",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/14_1_detail_bag.jpeg?alt=media&token=60ea37e3-1669-422a-bb9d-c15f67c27d6b",
      },
      {
        type: "imgDetail3",
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/14_2_detail_bag.jpeg?alt=media&token=700a7d52-2056-41ef-a2fe-e3bfcba26f57",
      },
    ],
  };

  return (
    <>
      <OrderImgComp>
        <div className="container">
          <div className="orderDetailBoder">
            <div className="orderDetailBox1">
              <h2>주문번호 : {orderInfo.orderNum}</h2>
              <div className="orderImgBorder">
                <div className="swiperWrapper">
                  <OrderImgSwiper imgListUrl={orderInfo.imgListUrl} />
                </div>
              </div>
            </div>
            <div className="orderDetailBox2">
              <div className="orderDetailComp">
                <p className="orderDetailTitle">회원 ID :</p>
                <p>{orderInfo.orderId}</p>
              </div>
              <div className="orderDetailComp">
                <p className="orderDetailTitle">수선 품목 : </p>
                <p>{orderInfo.item}</p>
              </div>
              <div className="orderDetailComp">
                <p className="orderDetailTitle">브랜드 : </p>
                <p>{orderInfo.brand}</p>
              </div>
              <div className="orderDetailComp">
                <p className="orderDetailTitle">요청 사항 : </p>
                <p>{orderInfo.detail}</p>
              </div>
              <div className="orderRequestComp">
                <p className="orderRequestTitle">추가 요청 사항 : </p>
              </div>
              <div className="orderRequestComp">
                <p className="requestText">{orderInfo.request}</p>
              </div>
              <div className="orderMoney">
                <p>{orderInfo.dDay}</p>
                <p>수선 금액 : {orderInfo.totalPrice}</p>
              </div>
            </div>
          </div>

          <div className="orderDetailBtn">
            <div className="orderRepair">
              <div className="repairProcess">
                <p>진행상황</p>
              </div>
              <div className="repairing">
                <p>{orderInfo.orderPrg}</p>
              </div>
              <button>수정</button>
            </div>
            <div className="chattingBtn">
              <button>주문채팅</button>
            </div>
          </div>
        </div>
      </OrderImgComp>
    </>
  );
};

export default OrderImg;
