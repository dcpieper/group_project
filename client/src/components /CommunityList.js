import { useState, useEffect } from "react";
import { getNotices } from "../services/CommunityServices";
import Notice from "./Notice";
const CommunityList = () => {
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);
  console.log(filteredNotices);
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
  const noticeNodes = noticeResults.map((notice, index) => {
    return <Notice key={index} notice={notice} />;
  });
<<<<<<< HEAD
  return(
  <div className="community-list-background">
  <div className="community-list">{noticeNodes}</div></div>);
=======
  return (
    <div>
      <select onChange={handleFilterNotices}>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Transport">Transport</option>
        <option value="Advice">Advice</option>
      </select>
      <div>{noticeNodes}</div>
    </div>
  );
>>>>>>> cbf63b3333380e4d4707c80cf50961004d6df334
};

export default CommunityList;
