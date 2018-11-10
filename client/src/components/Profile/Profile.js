import React from "react";
import { Avatar } from "@material-ui/core";
import img from "../../images/user.png";
import { connect } from "react-redux";
import propTypes from "prop-types";

const styles = {
  root: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    background: "#E0E0E0",
    padding: 10,
    height: "50px",
    width: "50px",
    color: "inherit",
    marginRight: "20px"
  },
  name: {
    color: "#4b4b4b",
    fontSize: 17,
    fontWeight: 500
  }
};

const Profile = props => {
  const { name } = props.user;
  return (
    <div style={styles.root}>
      <Avatar src={img} style={styles.avatar} />
      <h6 style={styles.name}>{name && name}</h6>
    </div>
  );
};

Profile.propTypes = {
  user: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(Profile);
