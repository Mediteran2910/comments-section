import { useState } from "react";
import { otherUsers, currentUser } from "./Info";
import UserInfo from "./UserInfo";
import Replies from "./Replies";
import ReplyText from "./ReplyText";
import PersonalReply from "./PersonalReply";

export default function Post() {
  const [replyingTo, setReplyingTo] = useState(null); // Track which user is being replied to

  const handleToggle = (userId) => {
    console.log("reply od id", userId);
    setReplyingTo((prevReply) => (prevReply === userId ? null : userId));
  };

  const [comments, setComments] = useState([]);

  const handleAddReply = (content) => {
    let newReply = {
      user: currentUser.username, // You can modify this to be dynamic based on the user
      text: content,
      createdAt: "just now",
      img: currentUser.image.png, // You can replace this with dynamic time if needed
      score: 0,
    };
    // Log the new reply
    console.log("New Reply:", newReply);

    // Update comments state with the new reply
    setComments((prevComments) => [...prevComments, newReply]);
    console.log("Updated comments:", [...comments, newReply]); // Log the updated comments array
  };

  const handleDelete = (index) => {
    setComments((prevComments) =>
      prevComments.filter((_, idx) => idx !== index)
    );
  };

  const [isEditActive, setIsEditActive] = useState(false);

  const [editIdx, setEditIdx] = useState(null);

  const [replyText, setReplyText] = useState("");

  // Handle Edit mode - Initialize replyText when starting to edit
  const handleEdit = (idx) => {
    console.log("Editing comment at index:", idx);
    const comment = comments[idx];
    if (comment) {
      setEditIdx(idx);
      setReplyText(comment.text); // Set the current comment text to replyText
      setIsEditActive(true); // Activate edit mode
    }
  };

  const editComment = (idx, newText) => {
    setComments((prevComments) =>
      prevComments.map((comment, index) =>
        index === idx ? { ...comment, text: newText } : comment
      )
    );

    setReplyText(""); // Clear the text field after submission
    setIsEditActive(false); // Deactivate edit mode
  };

  return (
    <div>
      {otherUsers.map((user) => (
        <div key={user.id} className="post">
          <UserInfo
            user={user}
            handleToggle={() => handleToggle(user.id)} // Pass toggleReply function to UserInfo
          />
          {/* Render PersonalReply under the specific UserInfo if replying to this user */}
          {replyingTo === user.id && (
            <PersonalReply
              comments={comments}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              isEditActive={isEditActive}
            />
          )}

          {/* Render ReplyText directly under the appropriate post */}
          {replyingTo === user.id && (
            <ReplyText
              user={user} // Pass user data to ReplyText
              handleAddReply={handleAddReply}
              setReplyingTo={setReplyingTo}
              replyText={replyText}
              setReplyText={setReplyText}
              editComment={editComment}
              isEditActive={isEditActive}
            />
          )}
          <Replies
            user={user}
            handleAddReply={handleAddReply}
            comments={comments}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            isEditActive={isEditActive}
            replyText={replyText}
            setReplyText={setReplyText}
            editComment={editComment}
            idx={editIdx}
          />
        </div>
      ))}
    </div>
  );
}
