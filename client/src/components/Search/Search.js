import React from "react";
import { InputBase } from "@material-ui/core";

const styles = {
  root: {
    padding: "10px",
    background: "#fafafa",
    height: "50px"
  },
  search: {
    width: "100%",
    background: "#fff",
    height: "100%",
    borderRadius: "5px",
    padding: "10px",
    display: "flex"
  },
  searchIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "50px",
    color: "#BDBDBD"
  },
  searchInput: {
    color: "inherit",
    width: "100%",
    padding: "0 10px"
  }
};

const Search = () => {
  return (
    <div style={styles.root}>
      <div style={styles.search}>
        <div style={styles.searchIcon}>
          <i className="fas fa-search" />
        </div>
        <InputBase placeholder="search..." style={styles.searchInput} />
      </div>
    </div>
  );
};

export default Search;
