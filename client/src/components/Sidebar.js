import React from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Header from "./common/Header";
import Search from "./Search/Search";
import ChatList from "./ChatList/ChatList";
import Profile from "./Profile/Profile";

const styles = theme => ({
  root: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#424242",
    overflow: "hidden",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "300px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  }
});

const Sidebar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Header>
        <Profile />
      </Header>
      <Search />
      <ChatList />
    </div>
  );
};

Sidebar.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
