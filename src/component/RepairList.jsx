import Repair from "./Repair";
import RepairListComp from "../style/RepairListStyle";
import { useState, useEffect } from "react";
import PartnerApi from "../api/PartnerApi";

const RepairList = () => {
  const [repairList, setRepairList] = useState([]);
  const ptnId = window.localStorage.getItem("userId");

  const renderList = async (ptnId) => {
    console.log("ptnId(파트너메인) :" + ptnId);
    try {
      const res = await PartnerApi.itemlist(ptnId);
      console.log(res.data);
      if (res.data !== null) {
        setRepairList(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    renderList(ptnId);
  }, []);

  return (
    <>
      <RepairListComp>
        <div className="container">
          <h2>수선 정보</h2>
          <div className="repairWrapper">
            {repairList &&
              repairList.map((data) => <Repair key={data.item} data={data} />)}
          </div>
        </div>
      </RepairListComp>
    </>
  );
};
export default RepairList;
