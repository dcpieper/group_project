import { useState, useEffect } from "react";
import { postNotice } from "../services/CommunityServices";

const CommunityForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleNoticeSubmit = () => {
    postNotice({
      name: name,
      message: message,
    });
  };
  return (
    <div className="community-form">
      <form onSubmit={handleNoticeSubmit}>
        <input type="text" placeholder="name" onChange={handleNameChange} />
        <textarea placeholder="message" onChange={handleMessageChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CommunityForm;
