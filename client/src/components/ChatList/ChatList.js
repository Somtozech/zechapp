import React from "react";
import ChatListItem from "./ChatListItem";
const styles = {
  root: {
    overflowY: "scroll",
    height: "100%"
  }
};

const ChatList = () => {
  return (
    <div style={styles.root}>
      <ChatListItem />
    </div>
  );
};

export default ChatList;
