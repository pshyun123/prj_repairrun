import OrderListComp from "../style/OrderListStyle";
import { Link } from "react-router-dom";
import OrderImgSwiper from "../util/OrderImgSwiper";
const Order = ({ e }) => {
  return (
    <>
      <div className="orderContainer">
        <div className="orderBoder">
          <div className="ordersecBorder1">
            <h2>주문번호 : {e.orderNumber}</h2>
            <div className="orderImgBorder">
              <div className="swiperWrapper">
                <OrderImgSwiper imgListUrl={e.imgListUrl} />
              </div>
            </div>
          </div>
          <div className="ordersecBorder2">
            <div className="orderComp">
              <p className="orderTitle">파트너명 :</p>
              <p>{e.ptnName}</p>
            </div>
            <div className="orderComp">
              <p className="orderTitle">수선품목 : </p>
              <p>{e.repairItem}</p>
            </div>
            <div className="orderComp">
              <p className="orderTitle">요청사항 : </p>
              <p>{e.repairDetail}</p>
            </div>
            <div className="orderComp">
              <p className="orderTitle">수선요청날짜 : </p>
              <p>{e.requestDate}</p>
            </div>
          </div>
          <Link to="/MyPage/OrderInfo">
            <div className="orderBtn">
              <button>자세히</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

const OrderList = () => {
  const orderData = [
    {
      orderNumber: "231029101123",
      userId: "Attend",
      repairItem: "가방",
      brand: "가죽 복원",
      orderRequest: "원래 상태처럼 복구 부탁드려요",
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
    },
    {
      orderNumber: "231030100024",
      ptnName: "SILK ROAD",
      repairItem: "가방",
      repairDetail: "가죽 복원",
      requestDate: "2023.10.30",
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
    },
    {
      orderNumber: "231016100010",
      ptnName: "SILK ROAD",
      repairItem: "지갑",
      repairDetail: "가죽 교체",
      requestDate: "2023.10.16",
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
    },
  ];
  return (
    <>
      <OrderListComp>
        <div className="container">
          <div className="orderHeader">
            <h2>주문현황</h2>
            <div className="orderBox">
              <div className="couponBox">
                {orderData.map((e) => (
                  <Order key={e.orderNumber} e={e} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </OrderListComp>
    </>
  );
};

export default OrderList;
