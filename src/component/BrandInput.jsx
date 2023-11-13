import { BrandInputComp } from "../style/LocationStyle";

const Brandinput = ({ onNext }) => {
  const handeleNextClick = () => {
    // 다음 버튼 클릭 시 FastRepair 컴포넌트의 onNext 함수 호출
    onNext();
  };
  return (
    <>
      <BrandInputComp>
        <div className="container">
          <div className="brandInput">
            <h3>
              <span>브랜드</span>를 입력해주세요.
            </h3>
            <input type="text"></input>
            <div className="buttonContainer">
              <button onClick={handeleNextClick}>다음</button>
            </div>
          </div>
        </div>
      </BrandInputComp>
    </>
  );
};

export default Brandinput;
