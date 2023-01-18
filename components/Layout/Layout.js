import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
}
