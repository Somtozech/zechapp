import React from "react";
import { AppBar } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    height: "60px",
    background: "#F5F5F5",
    boxShadow: "none",
    padding: "0px 20px",
    position: "relative",
    display: "flex",
    justifyContent: "center"
  }
});

const Header = props => {
  const { classes } = props;
  return <AppBar className={classes.root}>{props.children}</AppBar>;
};

Header.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
