import React from "react";
import { Avatar } from "@material-ui/core";
import img from "../../images/group.png";
import { connect } from "react-redux";
import propTypes from "prop-types";

const styles = {
  root: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    background: "#E0E0E0",
    padding: 10,
    height: "50px",
    width: "50px",
    color: "inherit",
    marginRight: "20px"
  },
  details: {
    flex: 1,
    height: "100%",
    color: "#2b2b2b",
    overflow: "hidden"
  },
  chatname: {
    color: "#2b2b2b",
    fontWeight: "500",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  groupinfo: {
    display: "flex"
  },
  name: {
    margin: "0px 2px",
    fontSize: 14,
    fontWeight: 400
  }
};

const ChatDetails = props => {
  const { chat } = props;
  const user = chat.typingUsers[chat.typingUsers.length - 1];
  return (
    <div style={styles.root}>
      <Avatar src={img} style={styles.avatar} />
      <div style={styles.details}>
        <h3 style={styles.chatname}>{chat.name}</h3>
        <p style={styles.groupinfo}>
          {chat.typingUsers.length > 0 && (
            <span style={styles.name}>{`${user} is typing...`}</span>
          )}
        </p>
      </div>
    </div>
  );
};

ChatDetails.propTypes = {
  chat: propTypes.object.isRequired
};

const mapStateToProps = state => {
  const chat = state.chats.find(chat => chat.id === state.activeChatId);
  return { chat };
};

export default connect(
  mapStateToProps,
  null
)(ChatDetails);
