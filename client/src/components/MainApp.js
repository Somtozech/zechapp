import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ChatBody from "./ChatBody";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import {
  getChats,
  OnUserJoined,
  RecievedMessage
} from "../actions/chatActions";
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
    const { user, getChats, OnUserJoined, RecievedMessage } = this.props;
    if (user.name) {
      getChats();
      OnUserJoined();
      RecievedMessage();
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
  user: propTypes.object.isRequired,
  getChats: propTypes.func.isRequired,
  OnUserJoined: propTypes.func.isRequired,
  RecievedMessage: propTypes.func.isRequired
};

const MainAppComponent = withStyles(styles)(MainApp);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  {
    getChats,
    OnUserJoined,
    RecievedMessage
  }
)(MainAppComponent);
