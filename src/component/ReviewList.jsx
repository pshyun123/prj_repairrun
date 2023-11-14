import Review from "./Review";
import { ReviewListStyle } from "../style/ReviewStyle";
import { useEffect, useState } from "react";
import ReviewApi from "../api/ReviewApi";

const ReviewList = ({ search, nofilter }) => {
  const [reviewList, setreviewList] = useState("");

  useEffect(() => {
    console.log("reviewList");
    const reviewData = async () => {
      try {
        const res = await ReviewApi.review();
        if (res.status === 200) {
          setreviewList(res.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    reviewData();
  }, []);

  const filteredReviews =
    nofilter === "" &&
    reviewList &&
    reviewList.filter((review) => {
      return (
        search === "" ||
        review.reviewContents.toLowerCase().includes(search.toLowerCase())
      );
    });

  return (
    <>
      <ReviewListStyle>
        <div className="container">
          {filteredReviews &&
            filteredReviews.map((filteredReview) => (
              <Review
                key={filteredReview.reviewContents}
                reviewData={filteredReview}
              />
            ))}
          {nofilter === "nofilter" &&
            reviewList &&
            reviewList.map((review) => (
              <Review key={review.reviewContents} reviewData={review} />
            ))}
        </div>
      </ReviewListStyle>
    </>
  );
};
export default ReviewList;
