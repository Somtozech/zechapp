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
  return (
    <div style={styles.root}>
      <Avatar src={img} style={styles.avatar} />
      <div style={styles.details}>
        <h3 style={styles.chatname}>{chat.name}</h3>
        <p style={styles.groupinfo}>
          {chat.users.map(user => (
            <span key={user.id} style={styles.name}>
              {user.name},
            </span>
          ))}
        </p>
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
