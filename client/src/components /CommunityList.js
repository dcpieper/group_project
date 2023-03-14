import { useState, useEffect } from "react";
import { getNotices } from "../services/CommunityServices";
import Notice from "./Notice";
const CommunityList = () => {
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);

  const filterNotices = (input) => {
    const filteredNodes = notices.filter((notice) => {
      return notice.category === input;
    });
    setFilteredNotices(filteredNodes);
    if (input === "") {
      setFilteredNotices([]);
    }
  };

  const handleFilterNotices = (event) => {
    filterNotices(event.target.value);
  };

  let noticeResults;

  if (filteredNotices.length > 0) {
    noticeResults = filteredNotices;
  } else {
    noticeResults = notices;
  }

  useEffect(() => {
    getNotices().then((allNotices) => {
      setNotices(allNotices);
    });
  }, []);

  notices.sort((a,b) => {
    return new Date(b.created) - new Date(a.created);
  });

  const noticeNodes = noticeResults.map((notice, index) => {
    return <Notice key={index} notice={notice} />;
  });
  return (
    <div>
      <select onChange={handleFilterNotices}>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Transport">Transport</option>
        <option value="Advice">Advice</option>
        <option value="Household">Household</option>
        <option value="Other">Other</option>
      </select>
      <div>{noticeNodes}</div>
    </div>
  );
};

export default CommunityList;
