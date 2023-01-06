/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import styles from "./Profile.module.css";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div className={styles.profileMisc}>
      <img src={user.picture} alt={user.name} style={{ width: 50 }} />
      <LogoutButton />
    </div>
  ) : null;
}
