import React from "react";
import { AppBar } from "@material-ui/core";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    height: "60px",
    background: "#F5F5F5",
    boxShadow: "none",
    position: "relative",
    display: "flex",
    justifyContent: "center"
  }
});

const Header = props => {
  const { classes } = props;
  return <AppBar className={classes.root}>{props.children}</AppBar>;
};

Header.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(Header);
