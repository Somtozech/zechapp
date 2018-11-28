import React, { Component } from "react";
import { Card, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verifyUser } from "../actions/authActions";

const styles = theme => ({
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: "400px",
    height: "400px",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  inputLabel: {
    fontSize: "20px",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px"
    }
  },
  input: {
    width: "100%",
    marginTop: "10px",
    padding: "13px 10px"
  },
  button: {
    width: "100%",
    marginTop: "30px",
    background: "#388E3C",
    color: "#fafafa",
    padding: "13px 10px",
    fontSize: 16,
    border: 0,
    borderRadius: "5px"
  },
  progress: {
    height: "20px",
    color: "#fafafa"
  },
  error: {
    color: "#E53935"
  }
});

class Login extends Component {
  state = {
    name: "",
    isLoading: false
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.props.verifyUser(this.state.name);
      this.setState({ name: "", isLoading: false });
    }, 1500);
  };
  render() {
    const { classes, error, user } = this.props;
    return (
      <div className={classes.root}>
        {user.name && <Redirect to="/chat" />}
        <Card className={classes.card}>
          <form onSubmit={this.handleSubmit}>
            <div>
              {error && <p className={classes.error}>{error}</p>}
              <label htmlFor="" className={classes.inputLabel}>
                Enter Cool Nickname
              </label>
              <input
                type="text"
                placeholder="robocop123"
                className={classes.input}
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <button
              type="submit"
              disabled={!this.state.name || this.state.isLoading}
              className={classes.button}
            >
              {this.state.isLoading ? (
                <CircularProgress
                  className={classes.progress}
                  size={20}
                  thickness={5}
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </Card>
      </div>
    );
  }
}

const LoginComponent = withStyles(styles)(Login);

const mapStateToProps = state => ({
  error: state.error,
  user: state.user
});
export default connect(
  mapStateToProps,
  { verifyUser }
)(LoginComponent);
