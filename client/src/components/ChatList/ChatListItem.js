import React from "react";
import GroupIcon from "../../images/group.png";
import { Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "70px",
    display: "flex",
    cursor: "pointer"
  },
  active: {
    background: "#EEEEEE"
  },
  chat: {
    flexGrow: 1,
    borderBottom: "1px solid #EEEEEE",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#424242"
  },
  avatar: {
    background: "#E0E0E0",
    padding: 10,
    height: "50px",
    width: "50px",
    margin: "10px",
    color: "inherit"
  },
  chatname: {
    fontWeight: "500"
  },
  lastmessage: {
    fontSize: "14px",
    fontWeight: "500"
  }
};

const ChatListItem = props => {
  const { classes } = props;
  const className = props.active
    ? `${classes.root} ${classes.active}`
    : `${classes.root}`;
  return (
    <div
      className={className}
      onClick={() => {
        props.setActiveChat(props.id);
      }}
    >
      <Avatar src={GroupIcon} alt="avatar" className={classes.avatar} />
      <div className={classes.chat}>
        <h3 className={classes.chatname}>{props.name}</h3>
        {/* <p className={classes.lastmessage}>+2347036835186: hello world</p> */}
      </div>
    </div>
  );
};

export default withStyles(styles)(ChatListItem);
