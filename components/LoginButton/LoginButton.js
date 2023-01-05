import React from "react";
import styles from "../../styles/Button.module.css";

const LoginButton = () => {
  return (
    <button className={styles.button}>
      <a href="/api/auth/login">Log In</a>
    </button>
  );
};

export default LoginButton;
