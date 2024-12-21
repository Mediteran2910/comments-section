import Likes from "./Likes";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

export default function PersonalReply({
  comments,
  handleDelete,
  handleEdit,
  isEditActive,
}) {
  return (
    <>
      {comments.map((comment, idx) => (
        <div className="replies-wrapp" key={comment.id}>
          <div className="userInfos">
            <img src={comment.img} alt="" />
            <p>{comment.user}</p>
            <p>{comment.createdAt}</p>
          </div>
          <p>{comment.text}</p>
          <div className="personal-reply-icons">
            <Likes initialLikes={comment.score} />
            <div className="delete-edit-wrapp">
              <DeleteIcon handleDelete={() => handleDelete(idx)} />
              <EditIcon handleEdit={() => handleEdit(idx)} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
