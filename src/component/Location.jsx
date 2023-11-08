import { LocationComp } from "../style/LocationStyle";
import mapimg from "../images/metropolitan-area.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <>
      <LocationComp>
        <div className="container">
          <div className="fastselect">
            <h3>빠른 수선 가능항목</h3>
            <div className="btnBox">
              <button>
                <p>기장 수선</p>
              </button>
              <button>
                <p>지퍼 수선</p>
              </button>
              <button>
                <p>가방 클리닝</p>
              </button>
              <button>
                <p>신발 클리닝</p>
              </button>
            </div>

            <img src={mapimg} alt="서비스 가능한 지역" />
          </div>
          <div className="searchArea">
            <div className="searchBox">
              <input type="text" placeholder="지역구를 입력하세요" />
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <ul className="ptnList">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      </LocationComp>
    </>
  );
};

export default Location;
