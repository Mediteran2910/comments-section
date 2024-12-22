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
}) {
  const [replies, setReplying] = useState(null);

  const handleReply = (replyId) => {
    console.log("its clicked");
    setReplying((prevReply) => (prevReply === replyId ? null : replyId));
  };

  const [replyText, setReplyText] = useState("");

  const handleInput = (evt) => {
    setReplyText(evt.target.value);
  };

  return (
    <>
      {user.replies.map((reply) => (
        <>
          <div className="replies-container" key={uuidv4()}>
            <UserReply
              reply={reply}
              key={uuidv4()}
              handleReply={() => handleReply(reply.id)}
              comments={comments}
            />
          </div>
          {isEditActive ? (
            <ReplyText user={user} replyText="i hate you" />
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
              setReplying={setReplying}
              replyText={initialReplyText}
              setReplyText={setReplyText}
            />
          )}
        </>
      ))}
    </>
  );
}

//
