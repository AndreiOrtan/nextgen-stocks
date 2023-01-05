import styles from "./Navbar.module.css";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import Profile from "../Profile/Profile";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h3>My App</h3>
        <div className={styles.profileMiscContainer}>
          {user ? <Profile /> : <LoginButton />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
