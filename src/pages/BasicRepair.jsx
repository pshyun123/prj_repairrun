import { BrandInputComp } from "../component/Location";
import { ItemSelectComp, RequestComp } from "../component/BasicRequest";
import bag from "../images/bag.png";
import shoes from "../images/shoes.png";
import clothes from "../images/clothes.png";
import walletBelt from "../images/walletBelt.png";

const BasicRepair = () => {
  return (
    <>
      <ItemSelectComp>
        <div className="container">
          <div className="itemSelect">
            <h3>
              <span>어떤 수선</span>이 필요하신가요?
            </h3>
            <div className="itemImg">
              <button>
                <img src={bag} alt="bag" />
                <p>가방</p>
              </button>
              <button>
                <img src={shoes} alt="shoes" />
                <p>신발</p>
              </button>
              <button>
                <img src={clothes} alt="clothes" />
                <p>의류</p>
              </button>
              <button>
                <img src={walletBelt} alt="walletBelt" />
                <p>지갑/벨트</p>
              </button>
            </div>
          </div>
        </div>
      </ItemSelectComp>
      <BrandInputComp>
        <div className="container">
          <div className="brandInput">
            <h3>
              <span>브랜드</span>를 입력해주세요.
            </h3>
            <input type="text"></input>
            <div className="buttonContainer">
              <button>다음</button>
            </div>
          </div>
        </div>
      </BrandInputComp>
      <RequestComp>
        <div className="container">
          <div className="Request">
            <div className="type">
              <h3>
                <span>요청사항</span>을 작성해주세요
              </h3>
              <div className="detail">
                <h4>수선 유형</h4>
                <div className="radioBox">
                  <input type="radio" name="repairDetail" id="repairDetail" />
                  <label htmlFor="repairDetail">가방 클리닝</label>
                  <input type="radio" name="repairDetail" id="repairDetail" />
                  <label htmlFor="repairDetail">가죽 복원</label>
                  <input type="radio" name="repairDetail" id="repairDetail" />
                  <label htmlFor="repairDetail">스트랩 교체</label>
                </div>
              </div>
            </div>
            <div>
              <h4>추가 설명</h4>
              <p className="exmaple">
                <p>이렇게 작성하면 좋아요!</p>
                <p>가방 가죽에 스크래치가 났어요.</p>
              </p>
              <input
                type="text"
                placeholder="정확한 견적 확인을 위해 요청 사항을 자세하게 작성해 주세요."
              ></input>
            </div>
            <div className="buttonContainer">
              <button>다음</button>
            </div>
          </div>
        </div>
      </RequestComp>
    </>
  );
};
export default BasicRepair;
