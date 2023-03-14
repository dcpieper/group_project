import { useState, useEffect } from "react";
import { postNotice } from "../services/CommunityServices";

const CommunityForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [created, setCreated] = useState("");
  const [category, setCategory] = useState("");




  console.log(created);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleNoticeSubmit = () => {
    setCreated();
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
    <div className="community-form">
      <form onSubmit={handleNoticeSubmit}>
        <select className='dropdown' onChange={handleCategoryChange}>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Transport">Transport</option>
          <option value="Advice">Advice</option>
        </select>
        <input className='input' type="text" placeholder="name" onChange={handleNameChange} />
        <textarea className='input' placeholder="message" onChange={handleMessageChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CommunityForm;
