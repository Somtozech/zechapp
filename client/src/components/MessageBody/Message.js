import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";

const COLORS = [
  "#e21400",
  "#91580f",
  "#f8a700",
  "#f78b00",
  "#58dc00",
  "#287b00",
  "#a8f07a",
  "#4ae8c4",
  "#3b88eb",
  "#3824aa",
  "#a700ff",
  "#d300e7"
];

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
    fontWeight: "700",
    fontSize: "15px",
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
    fontSize: 16
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

class Message extends Component {
  // username = React.createRef();

  // componentDidMount() {
  //   if (this.username) {
  //     this.username.current.style.color = this.getColor(this.props.sender);
  //   }
  // }

  getColor = username => {
    let hash = 7;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    let index = Math.abs(hash % COLORS.length);
    return COLORS[index];
  };
  render() {
    let message;
    const { classes, sender, message: msg } = this.props;
    if (!sender) {
      const root = `${classes.root} ${classes.log}`;
      message = (
        <div className={root}>
          <div className={classes.messageLog}>
            <div className={classes.message}>
              <p className={classes.userLog}>{msg}</p>
            </div>
          </div>
        </div>
      );
    } else {
      const { active, sender, time, message: msg } = this.props;
      const root = active
        ? `${classes.root} ${classes.active}`
        : `${classes.root}`;

      const messageDiv = active
        ? `${classes.messageActive}`
        : `${classes.messageDiv}`;
      message = (
        <div className={root}>
          <div className={messageDiv}>
            <h3
              style={{ color: `${this.getColor(sender)}` }}
              className={classes.name}
            >
              {!active && sender}
            </h3>
            <div className={classes.message}>
              <p className={classes.userMessage}>{msg}</p>
              <span className={classes.time}>{time}</span>
            </div>
          </div>
        </div>
      );
    }

    return message;
  }
}

Message.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(Message);
