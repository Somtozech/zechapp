import React from "react";
import { Avatar } from "@material-ui/core";
import img from "../../images/user.png";

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
  }
};

const Profile = () => {
  return (
    <div style={styles.root}>
      <Avatar src={img} style={styles.avatar} />
    </div>
  );
};

export default Profile;
