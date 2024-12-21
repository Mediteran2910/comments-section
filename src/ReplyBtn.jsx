const toggleHandler = (handleToggle, handleReply) => {
  if (handleToggle) handleToggle();
  if (handleReply) handleReply();
};

export default function ReplyBtn({ handleToggle, handleReply }) {
  return (
    <button
      className="replyButton"
      onClick={() => toggleHandler(handleToggle, handleReply)}
    >
      <img src="public/images/icon-reply.svg" alt="Reply" />
      Reply
    </button>
  );
}
