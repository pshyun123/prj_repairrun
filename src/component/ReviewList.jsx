import Review from "./Review";
import { ReviewListStyle } from "../style/ReviewStyle";

const ReviewListComp = () => {
  return (
    <>
      <ReviewListStyle>
        <div className="container">
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
      </ReviewListStyle>
    </>
  );
};
export default ReviewListComp;
