import OrderImgComp from "../style/OrderImgStyle";
import OrderImgSwiper from "../util/OrderImgSwiper";

const OrderImg = ({ orderInfo }) => {
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
