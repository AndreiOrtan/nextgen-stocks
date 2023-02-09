import React, { useContext, useEffect, useState } from "react";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const [debouncedText, setDebouncedText] = useState("");
  const { setSearchText } = useContext(CompaniesContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchText(debouncedText);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [debouncedText, setSearchText]);

  return router.pathname === "/" ? (
    <form
      className="max-w-sm px-4 ml-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for Companies or tickers.."
          className="md:w-80 sm:min-w-min h-10 py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 hover:bg-gray-200 focus:bg-white focus:border-indigo-600 transition duration-150 ease-in-out"
          onChange={(e) => setDebouncedText(e.target.value)}
          value={debouncedText}
        />
      </div>
    </form>
  ) : null;
};
export default SearchBar;
