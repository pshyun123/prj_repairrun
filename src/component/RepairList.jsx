import Repair from "./Repair";
import RepairListComp from "../style/RepairListStyle";

const RepairList = () => {
  const testDatas = [
    {
      item: "가방",
      detail: [
        {
          name: "가방클리닝",
          days: 1,
          price: 24000,
        },
        {
          name: "가죽복원",
          days: 5,
          price: 39000,
        },
        {
          name: "지퍼수선",
          days: 1,
          price: 9000,
        },
      ],
    },
    {
      item: "신발",
      detail: [
        {
          name: "신발클리닝",
          days: 1,
          price: 19000,
        },
        {
          name: "부분염색",
          days: 3,
          price: 14000,
        },
        {
          name: "손상복원",
          days: 3,
          price: 34000,
        },
      ],
    },
    {
      item: "의류",
      detail: [
        {
          name: "디자인수선",
          days: "-",
          price: "-",
        },
        {
          name: "사이즈수선",
          days: "-",
          price: "-",
        },
        {
          name: "기장수선",
          days: "-",
          price: "-",
        },
      ],
    },
    {
      item: "지갑벨트",
      detail: [
        {
          name: "벨트길이수선",
          days: 1,
          price: 9000,
        },
        {
          name: "가죽교체",
          days: 2,
          price: 39000,
        },
        {
          name: "염색",
          days: 5,
          price: 29000,
        },
      ],
    },
  ];
  return (
    <>
      <RepairListComp>
        <div className="container">
          <h2>수선 정보</h2>
          <div className="repairWrapper">
            {testDatas &&
              testDatas.map((data) => <Repair key={data.item} data={data} />)}
          </div>
        </div>
      </RepairListComp>
    </>
  );
};
export default RepairList;
