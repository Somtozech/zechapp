import React from "react";
import { Avatar } from "@material-ui/core";
import img from "../../images/group.png";
import { connect } from "react-redux";

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
    flexGrow: 1,
    height: "100%",
    color: "#2b2b2b"
  },
  chatname: {
    color: "#2b2b2b",
    fontWeight: "500"
  },
  groupinfo: {}
};

const ChatDetails = props => {
  return (
    <div style={styles.root}>
      <Avatar src={img} style={styles.avatar} />
      <div style={styles.details}>
        <h3 style={styles.chatname}>{props.chat.name}</h3>
        <p>see group info</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const chat = state.chats.find(chat => chat.id === state.activeChatId);
  return { chat };
};

export default connect(
  mapStateToProps,
  null
)(ChatDetails);
