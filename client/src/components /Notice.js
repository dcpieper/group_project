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
    <div>
      <h3>{notice.name}</h3>
      <p>{notice.message}</p>
      <p>{notice.category}</p>
      <p>
        {day}-{month}-{year}
      </p>
      <form onSubmit={noticeDelete}>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default Notice;
