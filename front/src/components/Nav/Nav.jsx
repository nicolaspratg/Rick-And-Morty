import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav({ onSearch, logout }) {
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={onSearch} />
      <button onClick={logout} className={styles.logOutBtn}>
        Logout
      </button>
    </div>
  );
}
