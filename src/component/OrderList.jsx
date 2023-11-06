import styled from "styled-components";

const OrderListContainer = styled.div`
  width: 100%;
  background-color: var(--IVORY);

  .container {
    padding-top: 30px;
    padding-bottom: 80px;
    p,
    div {
      color: white;
    }
  }
`;

const OrderList = () => {
  return (
    <>
      <OrderListContainer>
        <div className="container">
          <p>주문현황 영역입니다.</p>
        </div>
      </OrderListContainer>
    </>
  );
};

export default OrderList;
