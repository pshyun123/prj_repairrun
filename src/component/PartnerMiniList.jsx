import PartnerMini from "./PartnerMini";
import { styled } from "styled-components";

const PartnerMiniListComp = styled.section`
  padding: 100px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const PartnerMiniList = () => {
  return (
    <>
      <PartnerMiniListComp>
        <div className="container">
          <PartnerMini />
          <PartnerMini />
          <PartnerMini />
          <PartnerMini />
          <PartnerMini />
          <PartnerMini />
        </div>
      </PartnerMiniListComp>
    </>
  );
};
export default PartnerMiniList;
