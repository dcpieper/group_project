import { useState, useEffect } from "react";
import { getNotices } from "../services/CommunityServices";
import Notice from "./Notice";
const CommunityList = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    getNotices().then((allNotices) => {
      setNotices(allNotices);
    });
  }, []);
  const noticeNodes = notices.map((notice, index) => {
    return <Notice key={index} notice={notice} />;
  });
  return <div>{noticeNodes}</div>;
};

export default CommunityList;
