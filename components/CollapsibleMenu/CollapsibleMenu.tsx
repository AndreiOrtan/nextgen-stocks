import { useState } from "react";
import FavoritesCompanies from "../FavoritesCompanies";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import React from "react";

const CollapsibleMenu = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="text-white mt-32">
      <button
        onClick={toggle}
        className="flex items-center text-xl font-medium text-white mb-8 hover:text-gray-300"
      >
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
