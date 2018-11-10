import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ChatBody from "./ChatBody";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const styles = {
  root: {
    display: "flex",
    height: "100vh",
    width: "100%"
  }
};

const MainApp = props => {
  const { classes, user } = props;
  return (
    <div className={classes.root}>
      {!user.name && <Redirect to="/login" />}
      <Sidebar />
      <ChatBody />
    </div>
  );
};
const MainAppComponent = withStyles(styles)(MainApp);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(MainAppComponent);
