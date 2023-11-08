import OrderListComp from "../style/OrderListStyle";
import { Link } from "react-router-dom";
const Order = ({ e }) => {
  return (
    <>
      <div className="orderContainer">
        <div className="orderBoder">
          <div className="ordersecBorder1">
            <h2>주문번호 : {e.orderNumber}</h2>
            <div className="orderImgBorder">
              {<img src={e.imgFullUrl} alt="오더 이미지" />}
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
      ptnName: "Attend",
      repairItem: "가방",
      repairDetail: "가죽 복원",
      requestDate: "2023.10.29",
      imgFullUrl:
        "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/14_full_bag.jpeg?alt=media&token=b0dcc4bd-64aa-40e1-b70d-d7e8b84e29e8",
    },
    {
      orderNumber: "231030100024",
      ptnName: "SILK ROAD",
      repairItem: "가방",
      repairDetail: "가죽 복원",
      requestDate: "2023.10.30",
      imgFullUrl:
        "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/15_full_bag.jpeg?alt=media&token=6f786c62-44a1-42f0-b94a-c4e5dc301293",
    },
    {
      orderNumber: "231016100010",
      ptnName: "SILK ROAD",
      repairItem: "지갑",
      repairDetail: "가죽 교체",
      requestDate: "2023.10.16",
      imgFullUrl:
        "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_full_wallet.jpg?alt=media&token=0bbf843a-06a9-4f85-9f19-ba0aa05b9ed6",
    },
  ];
  return (
    <>
      <OrderListComp>
        <div className="container">
          <div className="orderHeader">
            <h2>주문현황</h2>
            {/* {orderData.map((e) => (
              <Order key={e.orderNumber} e={e} />
            ))} */}

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
