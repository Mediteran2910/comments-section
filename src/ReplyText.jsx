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

  const [isTextInitialized, setIsTextInitialized] = useState(false);

  useEffect(() => {
    if (!isTextInitialized) {
      if (isEditActive && comments[idx]) {
        // For editing, set the text from the existing comment
        setReplyText(comments[idx].text);
      } else if (!isEditActive) {
        // For replying, initialize with @username
        setReplyText(initialReplyText);
      }
      setIsTextInitialized(true); // Set as initialized after text is set
    }
  }, [
    isEditActive,
    comments,
    idx,
    setReplyText,
    isTextInitialized,
    initialReplyText,
  ]);

  const handleInput = (evt) => {
    setReplyText(evt.target.value); // Concatenate initial text with input value
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isEditActive) {
      // Ako uređujete, pozovite funkciju za uređivanje komentara
      handleEditSave(idx, replyText);
    } else {
      // Ako odgovarate, dodajte odgovor
      handleAddReply(replyText);
    }
    setReplyText(""); // Očistite tekstualno polje
    setIsTextInitialized(false); // Reset initialization flag
    if (setReplying) setReplying(null); // Sakrij ReplyText za odgovore
    if (setReplyingTo) setReplyingTo(null); // Sakrij ReplyText za korisnike
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
