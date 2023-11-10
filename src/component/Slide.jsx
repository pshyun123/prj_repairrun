import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import loadLogos from "../api/LogoApi";

const LogoSlideStyle = styled.div`
  padding: 60px 0;
  .logo-slider {
    transition-timing-function: linear;

    .slide {
      width: 100%;

      img {
        border: 1px solid var(--GREY);
        border-radius: 100%;
        width: 60%;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .logo-slider {
      padding: 30px 0;
      .slide {
        width: 100%;

        img {
          border: 1px solid var(--GREY);
          border-radius: 100%;
          width: 70%;
        }
      }
    }
  }
`;

const LogoSlide = () => {
  const [urlList, setUrlList] = useState([]);
  useEffect(() => {
    const loadLogoData = async () => {
      try {
        const imageData = await loadLogos(); // fetchImageData 함수 사용
        setUrlList(imageData); // 서버에서 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadLogoData();
  }, []);

  return (
    <LogoSlideStyle>
      <Swiper
        className="logo-slider"
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
        }}
        slidesPerView={7}
        speed={3000}
      >
        {urlList &&
          urlList.map((url, index) => (
            <SwiperSlide className="slide" key={index}>
              <img src={url} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </LogoSlideStyle>
  );
};

export default LogoSlide;
// 라이브러리 설치 : npm i swiper@8  (터미널)
