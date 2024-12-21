import { useState } from "react";
import UserReply from "./UserReply";
import { v4 as uuidv4 } from "uuid";
import ReplyText from "./ReplyText";

export default function Replies({ user }) {
  const [replies, setReplying] = useState(null);

  const handleReply = (replyId) => {
    console.log("its clicked");
    setReplying((prevReply) => (prevReply === replyId ? null : replyId));
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
            />
          </div>

          {replies === reply.id && <ReplyText reply={reply} user={user} />}
        </>
      ))}
    </>
  );
}
