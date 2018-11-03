import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "100%",
    display: "flex"
  },
  messageDiv: {
    padding: "10px 13px",
    background: "#fafafa",
    display: "flex",
    maxWidth: "70%",
    borderRadius: "20px 30px 30px 10px",
    color: "#2b2b2b",
    margin: "7px"
  },
  name: {
    fontWeight: "500",
    color: "#2b2b2b"
  },
  message: {
    color: "#2b2b2b"
  }
};

const Message = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.messageDiv}>
        <div>
          <h3 className={classes.name}>Somto</h3>
          <p className={classes.message}>Lorem ipsum dolor</p>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Message);
