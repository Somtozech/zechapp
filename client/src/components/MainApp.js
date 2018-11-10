import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ChatBody from "./ChatBody";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import { getChats } from "../actions/chatActions";
import { connect } from "react-redux";
import propTypes from "prop-types";

const styles = {
  root: {
    display: "flex",
    height: "100vh",
    width: "100%"
  }
};

class MainApp extends Component {
  componentDidMount() {
    const { user, getChats } = this.props;
    if (user.name) {
      getChats();
    }
  }

  render() {
    const { classes, user } = this.props;
    return (
      <div className={classes.root}>
        {!user.name && <Redirect to="/login" />}
        <Sidebar />
        <ChatBody />
      </div>
    );
  }
}

MainApp.propTypes = {
  classes: propTypes.object.isRequired,
  user: propTypes.object.isRequired
};

const MainAppComponent = withStyles(styles)(MainApp);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {
    getChats
  }
)(MainAppComponent);
