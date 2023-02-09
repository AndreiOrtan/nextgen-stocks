import styles from "./Navbar.module.css";
import LoginButton from "../../LoginButton/LoginButton";
import Profile from "../../Profile/Profile";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import SearchBar from "../../SearchBar/SearchBar";

const Navbar = () => {
  const { user } = useUser();

  return (
    <div
      className={`border-b border-gray-800 mb-5 fixed left-0 right-0 top-0 bg-transparent opacity-95 z-20 bg-slate-900`}
    >
      <nav className={`container mx-auto flex ${styles.navbar}`}>
        <h3 className="font-sans text-xl font-semibold text-white">
          <Link href="/">Stockify</Link>
        </h3>
        <SearchBar />
        <div className="ml-auto">{user ? <Profile /> : <LoginButton />}</div>
      </nav>
    </div>
  );
};

export default Navbar;
