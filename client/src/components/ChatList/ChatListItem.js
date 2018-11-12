import React from "react";
import GroupIcon from "../../images/group.png";
import { Avatar, Badge } from "@material-ui/core";
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
    fontWeight: "500",
    flex: 1
  },
  chatList: {
    display: "flex"
  },
  notify: {
    padding: "0 10px",
    marginLeft: "14px",
    marginRight: "5px",
    textAlign: "center",
    fontSize: 13,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontWeight: 700,
    color: " #fafafa",
    background: "#26A69A"
  },
  lastmessage: {
    fontSize: "14px",
    fontWeight: "500"
  }
};

const ChatListItem = props => {
  const { classes, name, notification } = props;
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
        <div className={classes.chatList}>
          <h3 className={classes.chatname}>{name}</h3>
          {!!notification && (
            <span className={classes.notify}>{notification}</span>
          )}
        </div>
        {/* <p className={classes.lastmessage}>+2347036835186: hello world</p> */}
      </div>
    </div>
  );
};

export default withStyles(styles)(ChatListItem);
