import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const OrderImgSwiper = ({ imgListUrl }) => {
  console.log(imgListUrl);

  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {imgListUrl &&
          imgListUrl.map((imgUrl) => (
            <SwiperSlide key={imgUrl.type}>
              <img src={imgUrl.imgUrl} alt="이미지" style={{ width: "100%" }} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default OrderImgSwiper;
