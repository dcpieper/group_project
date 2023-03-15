import { deleteNotice } from "../services/CommunityServices";

const Notice = ({ notice }) => {
  const noticeDelete = () => {
    deleteNotice(notice._id);
  };
  const splicedDate = notice.created.split("T")[0];
  const splitDate = splicedDate.split("-");
  const day = splitDate[2];
  const month = splitDate[1];
  const year = splitDate[0];

  return (
    <div className="community-post">
      <h3>{notice.name}</h3>
      <div className="flex-post">
      <p>{notice.message}</p>
      <p>Category: <b>{notice.category}</b></p>
      <p>
        {day}-{month}-{year}
      </p>
      </div>
      <div className="delete-button-container">
      <form onSubmit={noticeDelete}>
        <button >Remove</button>
      </form>
      </div>
      
      
    </div>
  );
};

export default Notice;
