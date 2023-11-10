import styled from "styled-components";
import MemReview from "./MemReview";
import { MemReviewListStyle } from "../style/MyReviewStyle";

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
