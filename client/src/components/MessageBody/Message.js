import React from "react";
import { withStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";

const styles = {
  root: {
    width: "100%",
    display: "flex"
  },
  active: {
    justifyContent: "flex-end"
  },

  messageActive: {
    background: "#69F0AE",
    padding: "10px 13px",
    display: "flex",
    maxWidth: "70%",
    color: "#2b2b2b",
    borderRadius: "20px 30px 30px 10px",
    margin: "7px"
  },
  messageDiv: {
    padding: "10px 13px",
    display: "flex",
    maxWidth: "70%",
    background: "#fafafa",
    borderRadius: "20px 30px 30px 10px",
    color: "#2b2b2b",
    margin: "7px"
  },
  name: {
    fontWeight: "500",
    color: "#2b2b2b"
  },
  message: {
    color: "#2b2b2b",
    display: "flex",
    justifyContent: "space-around"
  },
  time: {
    fontSize: 13,
    color: "#555",
    marginLeft: "10px",
    display: "flex",
    alignItems: "flex-end"
  }
};

const Message = props => {
  const { classes } = props;

  const root = props.active
    ? `${classes.root} ${classes.active}`
    : `${classes.root}`;

  const messageDiv = props.active
    ? `${classes.messageActive}`
    : `${classes.messageDiv}`;

  return (
    <div className={root}>
      <div className={messageDiv}>
        <div>
          <h3 className={classes.name}>{!props.active && props.sender}</h3>
          <div className={classes.message}>
            <p>{props.message}</p>
            <span className={classes.time}>{props.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(Message);
