/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div className="flex items-center">
      <img
        src={user.picture ? user.picture : ""}
        alt={user.name ? user.name : ""}
        className="h-10 w-10 rounded-full mr-4"
        referrerPolicy="no-referrer"
      />
      <LogoutButton />
    </div>
  ) : null;
}
