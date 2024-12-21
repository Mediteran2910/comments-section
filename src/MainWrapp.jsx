import Post from "./Post";
import UserInfo from "./UserInfo";
import { otherUsers, currentUser } from "./Info";

export default function MainWrapp() {
  return (
    <main className="mainWrapp">
      <ul>
        {otherUsers.map((user) => (
          <li key={user.id}>
            <Post />
          </li>
        ))}
      </ul>
    </main>
  );
}
