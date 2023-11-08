import MyReviewComp from "../style/MyReviewStyle";
const Review = ({ e }) => {
  return (
    <>
      <div className="reviewContainer">
        <h3>{e.ptnName}</h3>
        <div className="fullBorder">
          <div className="reviewImgBorder">
            <img src={e.imgCompUrl} alt="완료이미지" />
          </div>
          <div className="ratingItem">
            <p>{e.reviewRating}</p>
            <p>{e.repairItem}</p>
          </div>
          <div className="userBorder">
            <p>{e.userId}</p>
            <p>{e.reviewComments}</p>
          </div>
          <div className="dateComp">
            <p>{e.requestDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const ReviewList = () => {
  const ReviewData = [
    {
      orderNum: "231016100010",
      reviewRating: "*****",
      ptnName: "Attend",
      repairItem: "가방",
      userId: "silkroad01",
      reviewComments:
        "제 고장난 가방이 처음 구매했을때랑 거의 비슷하게 수선 됐어요! 새것 같아서 너무 좋아요!",
      reviewDate: "2023.10.18",
      imgCompUrl:
        "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/1_comp_wallet.jpg?alt=media&token=25e63758-5c94-4ecc-8ecc-0ccdda651a01",
    },
    {
      orderNum: "231017100011",
      reviewRating: "*****",
      ptnName: "SILK ROAD",
      repairItem: "가방",
      userId: "silkroad01",
      reviewComments:
        "제가 직접 선택한 수선 전문가여서 마음 편하게 클리닝 맡겼습니다! 예상대로 너무 잘 됐네요~! 여기 강추합니다!",
      requestDate: "2023.10.18",
      imgFullUrl:
        "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/2_comp_bag.jpg?alt=media&token=d501d74a-c5e0-49fa-891e-8f45521d3c66",
    },
    {
      orderNum: "231018100312",
      reviewRating: "****",
      ptnName: "SILK ROAD",
      repairItem: "지갑",
      userId: "styleq345",
      reviewComments:
        "클리닝을 처음 맡겼는데 너무 잘 됐습니다. 다만 시간이 조금 아쉬웠어요 그래도 꽤 만족스러워서 앞으로 자주 이용할게요!",
      requestDate: "2023.10.19",
      imgFullUrl:
        "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/3_comp_bag.jpg?alt=media&token=6b67ff6c-c2a7-4076-b4c3-0a64e0b1e114",
    },
  ];
  return (
    <>
      <MyReviewComp>
        <div className="container">
          <h2 className="reviewHeader">나의 리뷰</h2>
          {ReviewData.map((e) => (
            <Review key={e.orderNum} e={e} />
          ))}
        </div>
      </MyReviewComp>
    </>
  );
};

export default ReviewList;
