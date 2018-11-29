import React from "react";
import { Avatar, Icon, IconButton } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import img from "../../images/group.png";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { ResetActiveChat } from "../../actions/chatActions";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  avatar: {
    background: "#E0E0E0",
    padding: 10,
    height: "50px",
    width: "50px",
    color: "inherit",
    margin: "10px"
  },
  details: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
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
  const { chat, ResetActiveChat, width } = props;
  const user = chat.typingUsers[chat.typingUsers.length - 1];
  return (
    <div style={styles.root}>
      {width === "xs" && (
        <IconButton
          style={{ cursor: "pointer", margin: "0 0 0 1px" }}
          onClick={e => {
            ResetActiveChat();
          }}
        >
          <Icon
            className="fas fa-arrow-left"
            style={{ color: "#333", fontSize: 20 }}
          />
        </IconButton>
      )}
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
  chat: propTypes.object.isRequired,
  ResetActiveChat: propTypes.func.isRequired,
  width: propTypes.string.isRequired
};

const mapStateToProps = state => {
  const chat = state.chats.find(chat => chat.id === state.activeChatId);
  return { chat };
};

export default connect(
  mapStateToProps,
  { ResetActiveChat }
)(withWidth()(ChatDetails));
