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
  return(
  <div className="community-list-background">
  <div className="community-list">{noticeNodes}</div></div>);
};

export default CommunityList;
