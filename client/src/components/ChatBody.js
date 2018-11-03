import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MessageBody from "./MessageBody/MessageBody";
import MessageInput from "./MessageInput/MessageInput";
import ChatDetails from "./ChatDetails/ChatDetails";

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100%",
    borderLeft: "1px solid #EEEEEE",
    overflow: "hidden",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      flex: 0,
      width: "100%"
    }
  }
});

const ChatBody = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Header>
        <ChatDetails />
      </Header>
      <MessageBody />
      <MessageInput />
    </div>
  );
};

ChatBody.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChatBody);
