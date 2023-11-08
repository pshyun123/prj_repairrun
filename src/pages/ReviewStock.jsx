import styled, { Styled } from "styled-components";
import ReviewList from "../component/ReviewList";
import { PtnStockSearchBar } from "../style/ReviewStyle";

const ReviewStock = () => {
  return (
    <>
      <PtnStockSearchBar>
        <div className="container">
          <div className="SearchArea">
            <input type="text" placeholder="키워드를 입력해 주세요" />
            <button className="btnSearch">검색</button>
          </div>
          <ul className="sortArea">
            <li className="active">별점높은순</li>
            <li>별점낮은순</li>
            <li>최신순</li>
            <li>과거순</li>
          </ul>
        </div>
      </PtnStockSearchBar>
      <ReviewList />
    </>
  );
};
export default ReviewStock;
