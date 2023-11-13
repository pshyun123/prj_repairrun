import { ItemSelectComp } from "../style/BasicStyle";
import bag from "../images/bag.png";
import shoes from "../images/shoes.png";
import clothes from "../images/clothes.png";
import walletBelt from "../images/walletBelt.png";

export const ItemSelect = ({ onNext }) => {
  return (
    <>
      <ItemSelectComp>
        <div className="container">
          <div className="itemSelect">
            <h3>
              <span>어떤 수선</span>이 필요하신가요?
            </h3>
            <div clssName="itemImg">
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
          <div className="buttonContainer">
            <button onClick={onNext}>다음</button>
          </div>
        </div>
      </ItemSelectComp>
    </>
  );
};
export default ItemSelect;
