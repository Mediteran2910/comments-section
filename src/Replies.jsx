import { useState } from "react";
import UserReply from "./UserReply";
import { v4 as uuidv4 } from "uuid";
import ReplyText from "./ReplyText";
import PersonalReply from "./PersonalReply";

export default function Replies({
  user,
  handleAddReply,
  comments,
  handleDelete,
  handleEdit,
  isEditActive,
  replyText,
  setReplyText,
  editComment,
  idx,
}) {
  const [replies, setReplying] = useState(null);

  const handleReply = (replyId) => {
    console.log("reply of id", replyId);
    setReplying((prevReply) => (prevReply === replyId ? null : replyId));
  };

  let cryptoKey = crypto.randomUUID();

  return (
    <>
      {user.replies.map((reply) => (
        <>
          <div className="replies-container" key={reply.id}>
            <UserReply
              reply={reply}
              handleReply={() => handleReply(reply.id)}
              comments={comments}
            />
          </div>
          {isEditActive ? (
            <ReplyText
              user={user}
              handleAddReply={handleAddReply}
              replyText={replyText} // State from parent
              setReplyText={setReplyText} // Update function from parent
              setReplying={setReplying}
              handleEditSave={() => editComment(idx, replyText)}
              isEditActive={isEditActive}
              comments={comments}
              idx={idx}
            />
          ) : (
            <PersonalReply
              comments={comments}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              isEditActive={isEditActive}
            />
          )}
          {replies === reply.id && (
            <ReplyText
              reply={reply}
              user={user}
              handleAddReply={handleAddReply}
              replyText={replyText}
              setReplyText={setReplyText}
              setReplying={setReplying}
              handleEditSave={() => editComment(idx, replyText)}
              isEditActive={isEditActive}
              comments={comments}
              idx={idx}
            />
          )}
        </>
      ))}
    </>
  );
}
