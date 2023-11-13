import NoticeList from "../component/ServiceList";
import ServiceApi from "../api/Service.Api";
import { useState, useEffect } from "react";

const FAQ = () => {
  const [faqList, setFaqList] = useState([]);
  useEffect(() => {
    const faqData = async () => {
      try {
        const res = await ServiceApi.service(0);
        setFaqList(res.data);
        console.log(res);
        return res;
      } catch (err) {
        console.log(err);
      }
    };
    faqData();
  }, []);

  return (
    <>
      <NoticeList faqData={faqList} />
    </>
  );
};
export default FAQ;
