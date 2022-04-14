import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        <h2>Home</h2>
      </Link>
      <Link className={styles.link} to="/form">
        <h2>SuperForm</h2>
      </Link>
    </nav>
  );
}

export default Nav;
