import { useState } from "react";
import { currentUser } from "./Info";

export default function ReplyText({ user, reply, handleAddReply }) {
  const initialReplyText = `${
    reply ? reply.user.username : user.user.username
  }`;

  const [replyText, setReplyText] = useState(initialReplyText);

  const handleInput = (evt) => {
    setReplyText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // You can add additional logic here, like calling `handleAddReply(replyText)`
  };

  return (
    <div className="replyTextWrapper" style={{ width: reply ? "90%" : "100%" }}>
      <div className="replyText">
        <form onSubmit={handleSubmit}>
          <img src={currentUser.image.png} alt={`${user.username}'s profile`} />
          <textarea
            type="text"
            className="reply-textarea"
            value={replyText}
            onChange={handleInput}
          />
          <button>REPLY</button>
        </form>
      </div>
    </div>
  );
}
