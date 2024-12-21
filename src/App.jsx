import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainWrapp from "./MainWrapp";
import UserInfo from "./UserInfo";
import { otherUsers, currentUser } from "./Info";
import Post from "./Post";
import Likes from "./Likes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Post></Post>
    </>
  );
}

export default App;
