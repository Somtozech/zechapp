import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Loadable from "react-loadable";
import "./font-awesome/css/fontawesome-all.min.css";

const styles = {
  root: {
    display: "flex",
    height: "100vh",
    width: "100%"
  }
};

const Sidebar = Loadable({
  loader: () => import("./components/Sidebar"),
  loading() {
    return <div>Loading</div>;
  }
});

const ChatBody = Loadable({
  loader: () => import("./components/ChatBody"),
  loading() {
    return <div>Loading</div>;
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline>
          <div className={classes.root}>
            <Sidebar />
            <ChatBody />
          </div>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
