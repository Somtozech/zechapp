import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { AddMessage, UserJoined } from "../../actions/chatActions";
import { Divider } from "@material-ui/core";

const styles = {
  root: {
    padding: "10px",
    background: "#f8f2f2",
    display: "flex"
  },
  textField: {
    padding: "15px 20px",
    borderRadius: "35px",
    flexGrow: 1,
    resize: "none",
    outline: "none",
    fontSize: "16px",
    border: "0",
    fontFamily: "Roboto",
    background: "#ffffff"
  },
  button: {
    background: "transparent",
    border: "0",
    width: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: " #4b4b4b",
    cursor: "pointer"
  },
  join: {
    background: "#ffffff",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  joinText: {
    textDecoration: "none",
    fontSize: 17,
    fontWeight: 500,
    color: "#42A5F5"
  }
};

class MessageInput extends Component {
  state = {
    message: ""
  };

  handleSubmit = e => {
    const { activeChatId, AddMessage } = this.props;
    const { message } = this.state;
    e.preventDefault();
    if (message) {
      AddMessage(message.trim(), activeChatId);
      this.setState({ message: "" });
    }
  };

  onChange = e => {
    this.setState({ message: e.target.value });
  };

  handleJoinChat = e => {
    e.preventDefault();
    const { user, UserJoined, activeChatId } = this.props;
    UserJoined(user, activeChatId);
  };
  render() {
    const { classes, activeChatId, AddMessage, isChatMember } = this.props;
    const { message } = this.state;
    return (
      <React.Fragment>
        {isChatMember ? (
          <form className={classes.root} onSubmit={this.handleSubmit}>
            <textarea
              rows="1"
              multiline="true"
              onChange={this.onChange}
              className={classes.textField}
              placeholder="Type message here"
              value={message}
            />
            <button
              className={classes.button}
              type="submit"
              disabled={!message}
            >
              <i className="fas fa-paper-plane fa-2x" />
            </button>
          </form>
        ) : (
          <div className={classes.join}>
            <a
              onClick={this.handleJoinChat}
              className={classes.joinText}
              href=""
            >
              Join Group
            </a>
          </div>
        )}
      </React.Fragment>
    );
  }
}

MessageInput.propTypes = {
  classes: propTypes.object.isRequired,
  activeChatId: propTypes.string.isRequired,
  AddMessage: propTypes.func.isRequired,
  isChatMember: propTypes.bool.isRequired,
  UserJoined: propTypes.func.isRequired,
  user: propTypes.object.isRequired
};

const mapToStateProps = state => {
  const chat = state.chats.find(chat => chat.id === state.activeChatId);
  const isChatMember = !!chat.users.find(user => user.name === state.user.name);
  return {
    user: state.user,
    activeChatId: state.activeChatId,
    isChatMember
  };
};

const MessageInputComponent = withStyles(styles)(MessageInput);
export default connect(
  mapToStateProps,
  { AddMessage, UserJoined }
)(MessageInputComponent);
