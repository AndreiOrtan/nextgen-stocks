import React from "react";
import styles from "../../styles/Button.module.css";

const LogoutButton = () => {
  return (
    <button className={styles.button}>
      <a href="/api/auth/logout">Logout</a>
    </button>
  );
};

export default LogoutButton;
