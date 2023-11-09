import styled from "styled-components";
import { MemReviewBlock } from "../style/MyReviewStyle";

const MemReview = () => {
  const test = {
    orderNum: "주문번호 : 100002031",
    fullUrl:
      "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_full_wallet.jpg?alt=media&token=0bbf843a-06a9-4f85-9f19-ba0aa05b9ed6",
    compUrl:
      "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_comp_wallet.jpg?alt=media&token=25e63758-5c94-4ecc-8ecc-0ccdda651a01",
    rating: "★★★★★",
    ptnName: "뜨개뜨개 마법",
    repairItem: "가방",
    compDate: "2023/10/26",
    review: "가방 수리 아주 만족스러웠어요~~",
  };
  return (
    <MemReviewBlock>
      <div className="wrapper">
        <h3>{test.orderNum}</h3>
        <div className="wrap">
          <div className="imgBox">
            <div className="imgWrap">
              <img className="CompImg" src={test.compUrl} alt="Comp" />
              <img className="fullImg" src={test.fullUrl} alt="full" />
            </div>
          </div>
          <div className="box">
            <div className="txt-box">
              <p>별점: </p>
              <p>{test.rating}</p>
            </div>
            <div className="txt-box">
              <p>파트너사:</p>
              <p>{test.ptnName}</p>
            </div>
            <div className="txt-box">
              <p>수선품목:</p>
              <p>{test.repairItem}</p>
            </div>
            <div className="txt-box">
              <p>완료날짜:</p>
              <p>{test.compDate}</p>
            </div>
          </div>
          <div className="box2">
            <p>{test.review}</p>
          </div>
        </div>
        <div className="btnBox">
          <button className="ch-btn">수정</button>
        </div>
      </div>
    </MemReviewBlock>
  );
};

export default MemReview;
