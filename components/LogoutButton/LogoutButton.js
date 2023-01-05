import React from "react";

const LogoutButton = () => {
  return (
    <button className="ui button">
      <a href="/api/auth/logout">Logout</a>
    </button>
  );
};

export default LogoutButton;
