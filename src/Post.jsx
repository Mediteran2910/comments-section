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
            />
          )}
          <Replies user={user} />
        </div>
      ))}
    </div>
  );
}
