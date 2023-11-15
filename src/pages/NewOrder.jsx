import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NewOrderComp, TransBtn } from "../component/ButtonContainer";

const NewOrder = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  //품목 선택시 세부수선항목 보내기위함
  useEffect(() => {
    window.localStorage.setItem("selectedItem", selectedItem);
  }, [selectedItem]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const onClickBtn = (e) => {
    switch (e) {
      case 1:
        navigate("/neworder/FastRepair");
        break;
      case 2:
        navigate("/neworder/BasicRepair");
        break;
      default:
    }
  };

  return (
    <>
      <NewOrderComp>
        <div className="container">
          <TransBtn onClick={() => onClickBtn(1)}>빠른 매칭</TransBtn>
          <TransBtn onClick={() => onClickBtn(2)}>일반 매칭</TransBtn>
        </div>
      </NewOrderComp>
    </>
  );
};

export default NewOrder;
