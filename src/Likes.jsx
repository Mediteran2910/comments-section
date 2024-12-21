import { useState } from "react";
import { otherUsers, currentUser } from "./Info";
export default function Likes({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  const increaseLikes = () => {
    setLikes(likes + 1);
  };

  const descreseLikes = () => {
    setLikes(likes - 1);
  };
  return (
    <div className="likes">
      <button onClick={increaseLikes}>+</button>
      <p>{likes}</p>
      <button onClick={descreseLikes}>-</button>
    </div>
  );
}
