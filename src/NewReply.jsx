import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewReplyForm({ handleAddReply }) {
  const [replyContent, setReplyContent] = useState("");

  const handleReplyChange = (e) => {
    setReplyContent(e.target.value);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyContent.trim()) {
      const newReply = {
        id: uuidv4(), // Unique ID for each reply
        content: replyContent,
        createdAt: "Just now",
        score: 0,
        replyingTo: "someone", // Example user you're replying to
        user: {
          image: {
            png: "./images/avatars/image-ramsesmiron.png", // Example image
          },
          username: "currentUser",
        },
      };

      handleAddReply(newReply); // Add new reply to state in parent
      setReplyContent(""); // Clear the form input after adding
    }
  };

  return (
    <div className="new-reply-form">
      <textarea
        value={replyContent}
        onChange={handleReplyChange}
        placeholder="Write your reply here..."
      />
      <button onClick={handleReplySubmit}>Post Reply</button>
    </div>
  );
}
