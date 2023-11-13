import React, { useState } from "react";
import Brandinput from "../component/BrandInput";
import Location from "../component/Location";
import GeneralStep from "./GeneralStep";
// import ImgUpload from "../component/ImgUpload";

export const FastRepair = () => {
  const [currnentPage, setCurrentPage] = useState("location");

  const handleNext = () => {
    setCurrentPage("brandinput");
  };
  return (
    <>
      {currnentPage === "location" && <Location onNext={handleNext} />}
      {currnentPage === "brandinput" && (
        <Brandinput onNext={() => setCurrentPage("generalstep")} />
      )}
      {currnentPage === "generalstep" && (
        <GeneralStep onNext={() => setCurrentPage("nextPage")} />
      )}
    </>
  );
};

export default FastRepair;
