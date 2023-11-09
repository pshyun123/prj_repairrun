import { styled } from "styled-components";
import MemReviewList from "../component/MemReviewList";
import { ReviewTop } from "../style/MyReviewStyle";

const MyReview = () => {
  return (
    <>
      <ReviewTop>
        <div className="container">
          <div className="myreviewTitle">
            <h3>나의 리뷰 보기</h3>
          </div>
          <ui className="writingReview">
            <li className="active">작성한 리뷰</li>
            <li>작성 가능한 리뷰</li>
          </ui>
          <div className="total">
            <p>총 4건</p>
          </div>
        </div>
      </ReviewTop>
      <MemReviewList />
    </>
  );
};
export default MyReview;

// 나의리뷰보기 상단 부분 작업페이지
