import Navbar from "./Navbar/Navbar";

export default function Layout({ children }: any) {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
}
