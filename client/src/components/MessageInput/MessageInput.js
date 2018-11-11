import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { AddMessage, RecievedMessage } from "../../actions/chatActions";

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
  }
};

class MessageInput extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    this.props.RecievedMessage();
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
  };
  render() {
    const { classes, activeChatId, AddMessage } = this.props;
    const { message } = this.state;
    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <textarea
          rows="1"
          multiline="true"
          onChange={this.onChange}
          className={classes.textField}
          placeholder="Type message here"
          value={message}
        />
        <button className={classes.button} type="submit" disabled={!message}>
          <i className="fas fa-paper-plane fa-2x" />
        </button>
      </form>
    );
  }
}

MessageInput.propTypes = {
  classes: propTypes.object.isRequired,
  activeChatId: propTypes.string.isRequired,
  AddMessage: propTypes.func.isRequired
};

const mapToStateProps = state => ({
  activeChatId: state.activeChatId
});

const MessageInputComponent = withStyles(styles)(MessageInput);
export default connect(
  mapToStateProps,
  { AddMessage, RecievedMessage }
)(MessageInputComponent);
