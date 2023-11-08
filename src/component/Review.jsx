import styled from "styled-components";

import { ReviewBlock } from "../style/ReviewStyle";

const Review = () => {
  const test = {
    ptnName: "뜨개뜨개 마법",
    fullUrl:
      "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_full_wallet.jpg?alt=media&token=0bbf843a-06a9-4f85-9f19-ba0aa05b9ed6",
    compUrl:
      "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_comp_wallet.jpg?alt=media&token=25e63758-5c94-4ecc-8ecc-0ccdda651a01",
    rating: "★★★★★",
    repairItem: "가방",
    userId: "taeyang2016",
    review: "가방 수리 아주 만족스러웠어요~~",
    compDate: "2023/10/23",
  };
  return (
    <ReviewBlock>
      <div className="wrapper">
        <h3>{test.ptnName}</h3>
        <div className="wrap">
          <div className="imgWrap">
            <img className="CompImg" src={test.compUrl} alt="Comp" />
            <img className="fullImg" src={test.fullUrl} alt="full" />
          </div>
        </div>
        <div className="wrap2">
          <div className="box1">
            <div>{test.rating}</div>
            <p>{test.repairItem}</p>
          </div>
          <div className="box2">
            <p>{test.userId}</p>
            <p>{test.review}</p>
          </div>
          <div className="box3">
            <p>{test.compDate}</p>
          </div>
        </div>
      </div>
    </ReviewBlock>
  );
};
export default Review;
