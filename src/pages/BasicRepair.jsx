import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
import ItemSelect from "../component/ItemSelect";
import Brandinput from "../component/BrandInput";
import Request from "../component/Request";

const BasicRepair = () => {
  const [currentPage, setCurrentPage] = useState("itemselect");

  const handleNext = () => {
    setCurrentPage("brandinput");
  };
  const handleRequest = () => {
    setCurrentPage("request");
  };

  return (
    <>
      {currentPage === "itemselect" && <ItemSelect onNext={handleNext} />}
      {currentPage === "brandinput" && <Brandinput onNext={handleRequest} />}
      {currentPage === "request" && <Request />}
    </>
  );
};
export default BasicRepair;
