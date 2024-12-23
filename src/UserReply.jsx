import { useState } from "react";
import UserDetail from "./UserDetail";
import { otherUsers } from "./Info";
import { v4 as uuidv4 } from "uuid";
import Likes from "./Likes";
import ReplyBtn from "./ReplyBtn";
import ReplyText from "./ReplyText";
import NewReply from "./NewReply";

export default function UserReply({ reply, handleReply }) {
  return (
    <>
      <div className="replies-container" key={uuidv4()}>
        <div className="replies-wrapp" key={uuidv4()}>
          <div key={uuidv4()} className="userWrapp">
            <div className="userInfos">
              <img
                src={reply.user.image.png}
                alt="profile picture of the user"
              />
              <p>{reply.user.username}</p>
              <p>{reply.createdAt}</p>
            </div>
          </div>

          <p>
            <span style={{ color: "purple" }}>@{reply.replyingTo}</span>{" "}
            {reply.content}
          </p>
          <div className="likeReplyWrapp">
            <Likes initialLikes={reply.score} />
            <ReplyBtn handleReply={() => handleReply(reply.id)} />
          </div>
        </div>
      </div>
    </>
  );
}
