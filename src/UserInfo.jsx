import Likes from "./Likes";
import ReplyBtn from "./ReplyBtn";
import UserDetail from "./UserDetail";

export default function UserInfo({ user, handleToggle }) {
  return (
    <div className="userWrapp">
      {/* Render user details */}
      <UserDetail user={user} />
      <p>{user.content}</p>

      <div className="likeReplyWrapp">
        <Likes initialLikes={user.score} />
        <ReplyBtn handleToggle={handleToggle} />
      </div>
    </div>
  );
}
