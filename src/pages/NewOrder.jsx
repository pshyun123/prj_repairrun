import React from "react";
import { useNavigate } from "react-router-dom";
import { NewOrderComp, TransBtn } from "../component/ButtonContainer";

const NewOrder = () => {
  const navigate = useNavigate();

  const onClickBtn = (e) => {
    switch (e) {
      case 1:
        navigate("/FastRepair");
        break;
      case 2:
        navigate("/BasicRepair");
        break;
      default:
    }
  };

  return (
    <>
      <NewOrderComp>
        <div className="container">
          <TransBtn onClickBtn={() => onClickBtn(1)}>빠른 매칭</TransBtn>
          <TransBtn onClickBtn={() => onClickBtn(2)}>일반 매칭</TransBtn>
        </div>
      </NewOrderComp>
    </>
  );
};

export default NewOrder;
