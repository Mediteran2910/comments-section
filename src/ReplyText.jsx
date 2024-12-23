import { useState } from "react";
import { currentUser } from "./Info";
import { useEffect } from "react";

export default function ReplyText({
  user,
  reply,
  handleAddReply,
  setReplying,
  setReplyingTo,
  replyText,
  setReplyText,
  handleEditSave,
  isEditActive,
  comments,
  idx,
}) {
  const initialReplyText = `@${
    reply ? reply.user.username : user.user.username
  }`;

  useEffect(() => {
    // If you're in edit mode, pre-fill the replyText with the comment text
    if (isEditActive && comments[idx]) {
      setReplyText(comments[idx].text);
    } else if (!isEditActive) {
      // If replying, set the initial text
      setReplyText(initialReplyText);
    }
  }, [isEditActive, comments, idx, setReplyText]);

  const handleInput = (evt) => {
    setReplyText(evt.target.value); // Concatenate initial text with input value
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isEditActive) {
      // If editing, call the editComment function
      editComment(idx, replyText);
    } else {
      // If replying, add the reply
      handleAddReply(replyText);
    }
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
          ></textarea>
          <button>{isEditActive ? "Save Edit" : "Reply"}</button>
        </form>
      </div>
    </div>
  );
}
