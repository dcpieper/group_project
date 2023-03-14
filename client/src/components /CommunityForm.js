import { useState, useEffect } from "react";
import { postNotice } from "../services/CommunityServices";

const CommunityForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [created, setCreated] = useState("");
  const [category, setCategory] = useState("");
  const date = new Date();
  const today =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    setCreated(date);
  }, []);
  const handleNoticeSubmit = (event) => {
    postNotice({
      name: name,
      message: message,
      created: created,
      category: category,
    });
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className="community-form-wrapper">
   <div className="tip-header-wrapper"> <h2>Post Your Top Tips</h2></div>
      <form  className="community-form" onSubmit={handleNoticeSubmit}>
        <div>
        <select className='dropdown' onChange={handleCategoryChange}>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Transport">Transport</option>
          <option value="Advice">Advice</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
        <input className='input' type="text" placeholder="name" onChange={handleNameChange} />
        </div>
        <div>
        <textarea className='text-box' placeholder="message" onChange={handleMessageChange} />
        </div>
        <input className="post-button" type="submit" value="Post"/>
      </form>
    </div>
  );
};

export default CommunityForm;
