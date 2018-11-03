import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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

const MessageInput = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <textarea
        rows="1"
        multiline
        className={classes.textField}
        placeholder="Type message here"
      />
      <button className={classes.button}>
        <i className="fas fa-paper-plane fa-2x" />
      </button>
    </div>
  );
};

MessageInput.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MessageInput);
