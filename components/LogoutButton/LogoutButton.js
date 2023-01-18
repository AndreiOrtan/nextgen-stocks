import Link from "next/link";
import React from "react";

const LogoutButton = () => {
  return (
    <Link
      href="/api/auth/logout"
      className="relative z-10 text-white hover:text-gray-300 py-2 px-3 rounded-md bg-indigo-600"
    >
      Logout
    </Link>
  );
};

export default LogoutButton;
