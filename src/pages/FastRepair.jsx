import React, { useState } from "react";
import Brandinput from "../component/BrandInput";
import Location from "../component/Location";

export const FastRepair = () => {
  const [currnentPage, setCurrentPage] = useState("location");

  const handleNext = () => {
    setCurrentPage("brandinput");
  };
  return (
    <>
      {currnentPage === "location" && <Location onNext={handleNext} />}
      {currnentPage === "brandinput" && <Brandinput />}
    </>
  );
};

export default FastRepair;
