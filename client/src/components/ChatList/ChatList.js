import React from "react";
import ChatListItem from "./ChatListItem";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setActiveChat } from "../../actions/chatActions";

const styles = {
  root: {
    overflowY: "scroll",
    overflowX: "hidden",
    height: "100%",
    width: "100%"
  }
};

const ChatList = props => {
  return (
    <div style={styles.root}>
      {props.chats.map(chat => (
        <ChatListItem
          {...chat}
          setActiveChat={props.setActiveChat}
          key={chat.id}
        />
      ))}
    </div>
  );
};

ChatList.propTypes = {
  chats: propTypes.array.isRequired
};

const mapStateToProps = state => {
  const chats = state.chats.map(chat => ({
    name: chat.name,
    active: chat.id === state.activeChatId,
    id: chat.id,
    notification: chat.notification
  }));
  return { chats };
};

export default connect(
  mapStateToProps,
  { setActiveChat }
)(ChatList);
