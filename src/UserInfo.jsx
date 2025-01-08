import Likes from "./Likes";
import ReplyBtn from "./ReplyBtn";
import UserDetail from "./UserDetail";
import PersonalReply from "./PersonalReply";

export default function UserInfo({ user, handleToggle }) {
  return (
    <div className="userWrapp">
      <UserDetail user={user} />
      <p>{user.content}</p>
      <div className="likeReplyWrapp">
        <Likes initialLikes={user.score} />
        <ReplyBtn handleToggle={handleToggle} />
      </div>
    </div>
  );
}
