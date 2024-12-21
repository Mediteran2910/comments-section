import { useState } from "react";
import { otherUsers, currentUser } from "./Info";
import UserInfo from "./UserInfo";
import Replies from "./Replies";
import ReplyText from "./ReplyText";

export default function Post() {
  const [replyingTo, setReplyingTo] = useState(null); // Track which user is being replied to

  const handleToggle = (userId) => {
    setReplyingTo((prevReply) => (prevReply === userId ? null : userId));
  };

  const [comments, setComments] = useState([]);

  const repliesArr = [
    {
      user: currentUser.username,
      text: "",
      createdAt: "just now",
      img: currentUser.image.png,
      score: 0,
    },
  ];
  console.log(repliesArr);

  const handleAddReply = (content) => {
    const newReply = {
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

  const handleEdit = (idx) => {
    console.log(isEditActive);
    setIsEditActive((prevIsEditActive) => !prevIsEditActive);
    console.log(`its clicked, ${idx}, ${isEditActive}`);
  };

  return (
    <div>
      {otherUsers.map((user) => (
        <div key={user.id} className="post">
          <UserInfo
            user={user}
            handleToggle={() => handleToggle(user.id)} // Pass toggleReply function to UserInfo
          />

          {/* Render ReplyText directly under the appropriate post */}
          {replyingTo === user.id && (
            <ReplyText
              user={user} // Pass user data to ReplyText
              handleAddReply={handleAddReply}
              setReplyingTo={setReplyingTo}
            />
          )}
          <Replies
            user={user}
            handleAddReply={handleAddReply}
            comments={comments}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            isEditActive={isEditActive}
          />
        </div>
      ))}
    </div>
  );
}
