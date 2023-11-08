import {
  BannerStyle,
  FixStyle,
  ReasonStyle,
  SlideStyle,
  ReviewStyle,
} from "../style/BasicMainStyle";

const MainBody = () => {
  return (
    <BannerStyle>
      <div className="mainBanner">
        <div className="bannerText">
          <h2>나에게 필요한 매칭 서비스를 선택하세요.</h2>
        </div>
        <div className="matching">
          <div className="fastButton">빠른 매칭</div>
          <div className="generalButton">일반 매칭</div>
        </div>
      </div>
    </BannerStyle>
  );
};
const Fix = () => {
  return (
    <FixStyle>
      <div className="container">
        <div className="beaf">
          <div className="before"></div>
          <div className="after"></div>
        </div>
      </div>
    </FixStyle>
  );
};

const Reason = () => {
  return (
    <ReasonStyle>
      <div className="container">
        <div className="whyText">
          <h3>많은 사람들이 리페어런만 고집하는 이유!</h3>
        </div>
        <div className="reasonSet">
          <div className="reason reason1"></div>
          <div className="reason reason2">
            모바일 세탁 & 수선 서비스 런드리고 세탁소 마감 시간에 맞출 필요없이,
            배달원과 약속하는번거로움 없이 문 앞에 내놓고 모바일로 수거 신청
            버튼 클릭한 번이면 한밤만에 깨끗해진 세탁물을 문
            앞으로배송해드립니다.
          </div>
          <div className="reason reason3">
            스마트 무인 세탁소 런드리24 365일 24시간 세탁 서비스를 제공하는
            스마트 무인세탁소 런드리24 드라이크리닝, 이불, 신발, 수선서비스를
            제공하는 드라이크리닝 스테이션과 셀프 코인 세탁이 결합된 새로운
            무인세탁서비스입니다.
          </div>
          <div className="reason reason4"></div>
          <div className="reason reason5"></div>
          <div className="reason reason6">
            국내 최대 호텔 세탁 서비스 런드리고 호텔&비즈니스 국내 최대 규모의
            산업 세탁 전문 설비로 높은 품질과 호텔별맞춤 서비스를 제공하여
            B2B에서도 세탁 산업의 혁신을 선보입니다.
          </div>
        </div>
      </div>
    </ReasonStyle>
  );
};

const Review = () => {
  return <ReviewStyle>리뷰영역</ReviewStyle>;
};

const Slide = () => {
  return <SlideStyle>슬라이드영역</SlideStyle>;
};

const BasicMain = () => {
  return (
    <>
      <MainBody />
      <Fix />
      <Reason />
      <Review />
      <Slide />
    </>
  );
};

export default BasicMain;
