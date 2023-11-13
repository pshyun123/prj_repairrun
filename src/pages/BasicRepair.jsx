import React, { useState } from "react";
import ItemSelect from "../component/ItemSelect";
import Brandinput from "../component/BrandInput";
import Request from "../component/Request";
import GeneralStep from "./GeneralStep";

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
      {currentPage === "request" && (
        <Request onNext={() => setCurrentPage("generalstep")} />
      )}
      {currentPage === "generalstep" && (
        <GeneralStep onNext={() => setCurrentPage("nextPage")} />
      )}
    </>
  );
};
export default BasicRepair;
