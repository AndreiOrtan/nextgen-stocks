import React from "react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link
      href="/api/auth/login"
      className="relative z-10 text-white hover:text-gray-300 py-2 px-3 rounded-md bg-indigo-600"
    >
      Log In
    </Link>
  );
};

export default LoginButton;
