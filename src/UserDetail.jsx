import { otherUsers, currentUser } from "./Info";
export default function UserDetail({ user }) {
  return (
    <>
      <div key={user.id} className="userWrapp">
        <div className="userInfos">
          <img src={user.user.image.png} alt="profile picture of the user" />
          <p>{user.user.username}</p>
          <p>{user.createdAt}</p>
        </div>
      </div>
    </>
  );
}
