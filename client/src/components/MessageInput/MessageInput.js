import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";
import { connect } from "react-redux";
import {
  AddMessage,
  UserJoined,
  UpdateTyping
} from "../../actions/chatActions";

const styles = theme => ({
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
    padding: "0px 5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    color: " #4b4b4b",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      padding: "0px 3px"
    }
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
});

class MessageInput extends Component {
  state = {
    message: "",
    isTyping: false
  };

  textInput = React.createRef();

  componentDidUpdate() {
    const { isChatMember } = this.props;
    const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    //focus the message input
    window.addEventListener("keydown", event => {
      if (
        isChatMember &&
        !(event.ctrlKey || event.metaKey || event.altKey) &&
        !keys.includes(event.key)
      ) {
        if (this.textInput.current) this.textInput.current.focus();
      }
    });
  }

  componentWillUnmount() {
    clearInterval(this.typingInterval);
  }

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
    if (e.keyCode === 13) this.handleSubmit();
  };

  handleJoinChat = e => {
    e.preventDefault();
    const { user, UserJoined, activeChatId } = this.props;
    UserJoined(user, activeChatId);
  };

  sendTyping = e => {
    const { isTyping } = this.state;
    this.lastUpdateTime = Date.now();
    if (!isTyping) {
      this.setState({ isTyping: true });
      this.props.UpdateTyping(true);
      this.startCheckingTyping();
    }
  };

  startCheckingTyping = () => {
    this.typingInterval = setInterval(() => {
      if (Date.now() - this.lastUpdateTime > 300) {
        this.setState({ isTyping: false });
        this.stopCheckingTyping();
      }
    }, 300);
  };

  stopCheckingTyping = () => {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
      this.props.UpdateTyping(false);
    }
  };

  render() {
    const { classes, isChatMember } = this.props;
    const { message } = this.state;
    return (
      <React.Fragment>
        {isChatMember ? (
          <form className={classes.root} onSubmit={this.handleSubmit}>
            <textarea
              ref={this.textInput}
              rows="1"
              multiline="true"
              onChange={this.onChange}
              className={classes.textField}
              placeholder="Type message here"
              value={message}
              onKeyUp={e => {
                e.keyCode !== 13 && this.sendTyping(e);
              }}
              onKeyDown={e => {
                e.keyCode === 13 && this.handleSubmit(e);
              }}
            />
            <button
              className={classes.button}
              type="submit"
              disabled={!message}
            >
              <i className="fas fa-paper-plane" />
            </button>
          </form>
        ) : (
          <div className={classes.join}>
            <a
              onClick={this.handleJoinChat}
              className={classes.joinText}
              href="#"
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
  user: propTypes.object.isRequired,
  activeChatId: propTypes.string.isRequired,
  isChatMember: propTypes.bool.isRequired,
  AddMessage: propTypes.func.isRequired,
  UserJoined: propTypes.func.isRequired,
  UpdateTyping: propTypes.func.isRequired
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
  { AddMessage, UserJoined, UpdateTyping }
)(MessageInputComponent);
