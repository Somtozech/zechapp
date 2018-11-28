import React, { Component } from "react";
import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";

import Header from "./common/Header";
import Search from "./Search/Search";
import ChatList from "./ChatList/ChatList";
import Profile from "./Profile/Profile";
import ReconnectErrorMessage from "./ReconnectErrorMessage/ReconnectErrorMessage";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#424242",
    overflow: "hidden",
    height: "100%",
    transition: "all 0.2s ease",
    [theme.breakpoints.down("sm")]: {
      width: "300px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  }
});

class Sidebar extends Component {
  root = React.createRef();
  hide() {
    const { width, activeChatId } = this.props;
    if (width == "xs" && activeChatId) {
      this.root.current.style.width = "0%";
    } else if (width == "xs" && !activeChatId) {
      this.root.current.style.width = "100%";
    } else if (width === "sm") {
      this.root.current.style.width = "300px";
    } else {
      this.root.current.style.width = "400px";
    }
  }
  componentDidMount() {
    this.hide();
  }
  componentDidUpdate() {
    this.hide();
  }

  render() {
    const { classes } = this.props;
    return (
      <div ref={this.root} className={classes.root}>
        <Header>
          <Profile />
        </Header>
        <Search />
        <ChatList />
        <ReconnectErrorMessage />
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: propTypes.object.isRequired,
  width: propTypes.string.isRequired,
  activeChatId: propTypes.string
};

const mapStateToProps = state => ({
  activeChatId: state.activeChatId
});
export default connect(
  mapStateToProps,
  null
)(withWidth()(withStyles(styles)(Sidebar)));
