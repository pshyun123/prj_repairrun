import NoticeList from "../component/ServiceList";
import { useState, useEffect } from "react";
import ServiceApi from "../api/Service.Api";

const Notice = () => {
  const [noticeList, setNoticeList] = useState([]);
  useEffect(() => {
    const noticeData = async () => {
      try {
        const res = await ServiceApi.service(1);
        setNoticeList(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    noticeData();
  }, []);

  return (
    <>
      <NoticeList noticeData={noticeList} />
    </>
  );
};

export default Notice;
