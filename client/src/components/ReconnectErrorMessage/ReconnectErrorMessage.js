import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import {
  UserReconnect,
  UserReconnecting,
  UserReconnectError
} from "../../actions/statusActions";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    padding: "20px 20px",
    fontSize: "15px",
    fontWeight: 400,
    color: "#555"
  },
  progress: {
    height: "20px",
    color: "#4CAF50",
    margin: "0 10px"
  }
};

class ReconnectErrorMessage extends Component {
  componentDidMount() {
    const { UserReconnect, UserReconnecting, UserReconnectError } = this.props;
    UserReconnect();
    UserReconnecting();
    UserReconnectError();
  }
  render() {
    const { connectionStatus } = this.props;
    let status;
    if (connectionStatus === "connected") {
      status = null;
    } else {
      status = (
        <div style={styles.root}>
          <span>{connectionStatus}</span>
          {connectionStatus === "Reconnecting" && (
            <CircularProgress style={styles.progress} size={20} thickness={5} />
          )}
        </div>
      );
    }
    return status;
  }
}

const mapStateToProps = state => ({
  connectionStatus: state.connectionStatus
});

export default connect(
  mapStateToProps,
  { UserReconnect, UserReconnecting, UserReconnectError }
)(ReconnectErrorMessage);
