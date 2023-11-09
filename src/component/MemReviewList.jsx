import styled from "styled-components";
import MemReview from "./MemReview";

const MemReviewListStyle = styled.section`
  padding: 100px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const MemReviewList = () => {
  return (
    <>
      <MemReviewListStyle>
        <div className="container">
          <MemReview />
          <MemReview />
          <MemReview />
          <MemReview />
        </div>
      </MemReviewListStyle>
    </>
  );
};

export default MemReviewList;
