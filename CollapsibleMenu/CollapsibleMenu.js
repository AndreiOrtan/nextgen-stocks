import { useState } from "react";
import FavoritesCompanies from "../components/FavoritesCompanies";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";

const CollapsibleMenu = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="text-white">
      <button onClick={toggle} className="flex items-center">
        <p>{open ? "Hide" : "Show"} favorite companies</p>{" "}
        <span className="ml-auto">
          {open ? <FiChevronsUp /> : <FiChevronsDown />}
        </span>
      </button>
      {open && (
        <div>
          <FavoritesCompanies />
        </div>
      )}
    </div>
  );
};

export default CollapsibleMenu;
