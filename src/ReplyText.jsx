import { useState } from "react";
import { currentUser } from "./Info";

export default function ReplyText({
  user,
  reply,
  handleAddReply,
  setReplying,
  setReplyingTo,
  replyText,
  setReplyText,
}) {
  const initialReplyText = `@${
    reply ? reply.user.username : user.user.username
  }`;

  const handleInput = (evt) => {
    setReplyText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddReply(replyText);
    setReplyText(initialReplyText);
    setReplying ? setReplying(null) : setReplyingTo(null);

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
          >
            <span>{initialReplyText}</span>
          </textarea>
          <button>REPLY</button>
        </form>
      </div>
    </div>
  );
}
