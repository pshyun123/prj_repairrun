// import styled from "styled-components";
// import MemReview from "./MemReview";
// import { MemReviewListStyle } from "../style/MyReviewStyle";

// const MemReviewList = () => {
//   return (
//     <>
//       <MemReviewListStyle>
//         <div className="container">
//           <MemReview />
//           <MemReview />
//           <MemReview />
//           <MemReview />
//         </div>
//       </MemReviewListStyle>
//     </>
//   );
// };

// export default MemReviewList;

import MemReview from "./MemReview";
import { MemReviewListStyle } from "../style/MyReviewStyle";
import ReviewApi from "../api/ReviewApi";
import { useEffect, useState } from "react";

const MemReviewList = () => {
  const [myReviewList, setmyReviewList] = useState();

  useEffect(() => {
    console.log("myReviewList");
    const userId = window.localStorage.getItem("userId");
    console.log(userId);
    const myReviewData = async () => {
      try {
        const res = await ReviewApi.myReview(userId);
        if (res.status === 200) {
          setmyReviewList(res.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    myReviewData();
  }, []);
  return (
    <>
      <MemReviewListStyle>
        <div className="container">
          {myReviewList &&
            myReviewList.map((myReviewMap) => (
              <MemReview
                key={myReviewMap.orderNumFk}
                myReviewData={myReviewMap}
              />
            ))}
        </div>
      </MemReviewListStyle>
    </>
  );
};

export default MemReviewList;
