import { createContext, useEffect, useState } from "react";
import { getFavorites, saveFavorites } from "../../services/favorites-api";
import { ICompaniesContext } from "../../types";

const defaultValues = {
  companies: [],
  setCompanies: () => {},
  searchText: "",
  setSearchText: () => {},
  favorites: [],
  deleteItem: () => {},
  addToFavorites: () => {},
};

export const CompaniesContext = createContext<ICompaniesContext>(defaultValues);

export const Provider = ({ children }: any) => {
  const [companies, setCompanies] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState(getFavorites());
  console.log(favorites);

  const addToFavorites = (company: any) => {
    // construiesti arrayul nou
    const newItems = [...favorites, company];
    saveFavorites(newItems);
    setFavorites(newItems);
  };

  const deleteItem = (ticker: any) => {
    // construiesti arrayul nou
    const newItems = favorites.filter(
      (item: { ticker: any }) => item.ticker !== ticker
    );
    saveFavorites(newItems);
    setFavorites(newItems);
  };

  const contextValues = {
    companies,
    setCompanies,
    searchText,
    setSearchText,
    favorites,
    addToFavorites,
    deleteItem,
  };
  return (
    <CompaniesContext.Provider value={contextValues}>
      {children}
    </CompaniesContext.Provider>
  );
};
