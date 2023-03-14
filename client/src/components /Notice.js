import { deleteNotice } from "../services/CommunityServices";

const Notice = ({ notice }) => {
  const noticeDelete = () => {
    deleteNotice(notice._id);
  };
  return (
    <div className="community-post">
      <h3>{notice.name}</h3>
      <p>{notice.message}</p>
      <p>{notice.category}</p>
      <p>{notice.created}</p>
      <form onSubmit={noticeDelete}>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default Notice;
