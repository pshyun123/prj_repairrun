import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import PartnerApi from "../api/PartnerApi";

const LogoSlideStyle = styled.div`
  padding: 60px 0;
  .rrPtns {
    text-align: center;
    padding-bottom: 50px;
    font-size: 1.8em;
  }
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
    .rrPtns {
      text-align: center;
      padding: 0;
      font-size: 1.2em;
    }
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
        const partnerLogoData = await PartnerApi.loadLogos();
        setUrlList(partnerLogoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadLogoData();
  }, []);

  return (
    <LogoSlideStyle>
      <div>
        <p className="rrPtns">Repair-Run Partners</p>
      </div>
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