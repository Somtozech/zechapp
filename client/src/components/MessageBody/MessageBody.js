import React from "react";
import chatbg from "../../images/chatBg.jpg";
import Message from "./Message";

const styles = {
  root: {
    flexGrow: 1,
    background: `url(${chatbg})`,
    overflowY: "scroll",
    display: "flex",
    justifyContent: "center"
  },
  messages: {
    marginTop: "100px",
    width: "90%"
  }
};

const MessageBody = () => {
  return (
    <div style={styles.root}>
      <div style={styles.messages}>
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default MessageBody;
