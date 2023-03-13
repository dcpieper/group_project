import { deleteNotice } from "../services/CommunityServices";

const Notice = ({ notice }) => {
  const noticeDelete = () => {
    deleteNotice(notice._id);
  };
  return (
    <div>
      <h3>{notice.name}</h3>
      <p>{notice.message}</p>
      <form onSubmit={noticeDelete}>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default Notice;
