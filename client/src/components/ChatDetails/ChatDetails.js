import React from "react";
import { Avatar } from "@material-ui/core";
import img from "../../images/group.png";

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

const ChatDetails = () => {
  return (
    <div style={styles.root}>
      <Avatar src={img} style={styles.avatar} />
      <div style={styles.details}>
        <h3 style={styles.chatname}>Javascripters</h3>
        <p>see group info</p>
      </div>
    </div>
  );
};

export default ChatDetails;
