import styled from "styled-components";

const PartnerMiniBlock = styled.div`
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 50%;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    .wrap {
      width: 48%;
      height: auto;
      outline: 1px solid red;
      .logoImg {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      &:last-child {
        display: flex;
        flex-direction: column;
        outline: 1px solid red;
        .item {
          &.name {
            margin-bottom: 10px;
            flex-grow: 3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            h3 {
              font-weight: 600;
              margin-bottom: 20px;
            }
            p {
            }
          }
          &.rating {
            flex-grow: 2;
            text-align: center;
            font-size: 2em;
          }
        }
      }
    }
  }
`;

const PartnerMini = () => {
  const test = {
    logoUrl:
      "https://firebasestorage.googleapis.com/v0/b/repairrun-dae01.appspot.com/o/03_magic_logo.png?alt=media&token=ca7abac3-4450-4292-bf71-02523b2818f4",
    ptnName: "뜨개뜨개 마법",
    repairItem: "가방, 옷, 신발, 벨트지갑",
    rating: "★★★★★",
  };
  return (
    <PartnerMiniBlock>
      <div className="wrapper">
        <div className="wrap">
          <img className="logoImg" src={test.logoUrl} alt="logo" />
        </div>
        <div className="wrap">
          <div className="item name">
            <h3>{test.ptnName}</h3>
            <p>{test.repairItem}</p>
          </div>
          <div className="item rating">{test.rating}</div>
        </div>
      </div>
    </PartnerMiniBlock>
  );
};
export default PartnerMini;

// 플렉스로 나누기로함!
