import styled from "styled-components";

const ReviewListContainer = styled.div`
  width: 100%;
  background-color: var(--GREY);

  .container {
    padding-top: 30px;
    padding-bottom: 80px;
    p,
    div {
      color: white;
    }
  }
`;

const ReviewList = () => {
  return (
    <>
      <ReviewListContainer>
        <div className="container">
          <p>주문현황 영역입니다.</p>
        </div>
      </ReviewListContainer>
    </>
  );
};

export default ReviewList;
