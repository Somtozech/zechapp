import React from "react";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";

const styles = theme => ({
  root: {
    width: "100%",
    display: "flex"
  },
  active: {
    justifyContent: "flex-end"
  },
  log: {
    justifyContent: "center"
  },
  messageActive: {
    background: "#69F0AE",
    padding: "10px 13px",
    display: "flex",
    flexDirection: "column",
    maxWidth: "70%",
    color: "#2b2b2b",
    borderRadius: "20px 30px 30px 10px",
    margin: "7px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "92%"
    }
  },
  messageDiv: {
    padding: "10px 13px",
    display: "flex",
    maxWidth: "70%",
    flexDirection: "column",
    background: "#fafafa",
    borderRadius: "20px 30px 30px 10px",
    color: "#2b2b2b",
    margin: "7px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "92%"
    }
  },
  messageLog: {
    maxWidth: "80%",
    overflow: "hidden",
    display: "flex",
    margin: 7,
    borderRadius: 20,
    background: "#BBDEFB",
    padding: "5px 13px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "92%"
    }
  },
  name: {
    fontWeight: "500",
    color: "#2b2b2b",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "calc(100 % -20)"
  },
  message: {
    color: "#2b2b2b",
    display: "flex",
    flex: 1
  },
  userMessage: {
    wordBreak: "break-all",
    flex: 1,
    fontWeight: 400,
    fontSize: 17
  },
  userLog: {
    wordBreak: "break-all",
    flex: 1,
    fontSize: "15px",
    fontWeight: 500,
    color: "#555"
  },
  time: {
    fontSize: 12,
    color: "#555",
    marginLeft: "7px",
    display: "flex",
    alignItems: "flex-end",
    fontWeight: 400
  }
});

const Message = props => {
  let message;
  const { classes } = props;
  if (!props.sender) {
    const root = `${classes.root} ${classes.log}`;
    message = (
      <div className={root}>
        <div className={classes.messageLog}>
          <div className={classes.message}>
            <p className={classes.userLog}>{props.message}</p>
          </div>
        </div>
      </div>
    );
  } else {
    const root = props.active
      ? `${classes.root} ${classes.active}`
      : `${classes.root}`;

    const messageDiv = props.active
      ? `${classes.messageActive}`
      : `${classes.messageDiv}`;
    message = (
      <div className={root}>
        <div className={messageDiv}>
          <h3 className={classes.name}> {!props.active && props.sender}</h3>
          <div className={classes.message}>
            <p className={classes.userMessage}>{props.message}</p>
            <span className={classes.time}>{props.time}</span>
          </div>
        </div>
      </div>
    );
  }

  return message;
};

Message.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(Message);
