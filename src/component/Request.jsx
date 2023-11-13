import { RequestComp, RadioBox } from "../style/BasicStyle";
import { useNavigate } from "react-router-dom";

export const ItemSelect = ({ onNext }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/neworder/generalstep"); // "/generalstep"에는 실제 프로젝트에서 사용하는 경로로 변경하세요.
  };

  const test = ["가방 클리닝", "가죽 복원", "스트랩 교체"];

  return (
    <>
      <RequestComp>
        <div className="container">
          <div className="request">
            <div className="requestType">
              <h3>
                <span>요청사항</span>을 작성해주세요
              </h3>
              <div className="detailItem">
                <h3>수선 유형</h3>
                <RadioBox>
                  {test.map((item, index) => (
                    <div className="radioBtn" key={index}>
                      <input
                        type="radio"
                        name="수선종류"
                        id={`item${index}`}
                        value={item}
                      />
                      <label htmlFor={`item${index}`}>{item}</label>
                    </div>
                  ))}
                </RadioBox>
              </div>
            </div>
            <div className="extraExplain">
              <h3>추가 설명</h3>
              <div className="example">
                <h4>이렇게 작성하면 좋아요!</h4>
                <p>가방 가죽에 스크래치가 났어요.</p>
              </div>
              <input
                type="text"
                placeholder="정확한 견적 확인을 위해 요청 사항을 자세하게 작성해 주세요."
              ></input>
            </div>
            <div className="buttonContainer">
              <button onClick={handleNextClick}>다음</button>
            </div>
          </div>
        </div>
      </RequestComp>
    </>
  );
};
export default ItemSelect;
