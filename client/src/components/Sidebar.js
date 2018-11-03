import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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

Sidebar.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
