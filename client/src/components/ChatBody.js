import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Header from "./common/Header";
import MessageBody from "./MessageBody/MessageBody";
import MessageInput from "./MessageInput/MessageInput";
import ChatDetails from "./ChatDetails/ChatDetails";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100%",
    borderLeft: "1px solid #EEEEEE",
    overflowY: "hidden",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      flex: 0,
      width: "100%"
    }
  },
  noChat: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ECEFF1"
  },
  noChatText: {
    background: "#E0F7FA",
    borderRadius: "8px",
    padding: "10px 15px",
    color: "#555",
    fontSize: 14,
    fontWeight: 500
  }
});

const ChatBody = props => {
  const { classes, activeChatId } = props;
  return (
    <div className={classes.root}>
      {activeChatId ? (
        <React.Fragment>
          <Header>
            <ChatDetails />
          </Header>
          <MessageBody />
          <MessageInput />
        </React.Fragment>
      ) : (
        <div className={classes.noChat}>
          <span className={classes.noChatText}>
            Select Chat to Start Messaging
          </span>
        </div>
      )}
    </div>
  );
};

ChatBody.propTypes = {
  classes: propTypes.object.isRequired,
  activeChatId: propTypes.string.isRequired
};

const ChatBodyComponent = withStyles(styles)(ChatBody);

const mapStateToProps = state => ({
  activeChatId: state.activeChatId
});

export default connect(
  mapStateToProps,
  null
)(ChatBodyComponent);
