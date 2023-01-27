import { createContext, useState } from "react";
import { getFavorites, saveFavorites } from "../../services/favorites-api";

export const CompaniesContext = createContext(null);

export const Provider = ({ children }) => {
  const [companies, setCompanies] = useState(null);
  const [selectedTicker, setSelectedTicker] = useState("");
  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState(getFavorites());

  const addToFavorites = (company) => {
    // construiesti arrayul nou
    const newItems = [...favorites, company];
    saveFavorites(newItems);
    setFavorites(newItems);
    console.log(favorites);
  };

  const deleteItem = (ticker) => {
    // construiesti arrayul nou
    const newItems = favorites.filter((item) => item.ticker !== ticker);
    saveFavorites(newItems);
    setFavorites(newItems);
  };
  const contextValues = {
    selectedTicker,
    setSelectedTicker,
    companies,
    setCompanies,
    searchText,
    setSearchText,
    favorites,
    addToFavorites,
    deleteItem,
    setFavorites,
  };
  return (
    <CompaniesContext.Provider value={contextValues}>
      {children}
    </CompaniesContext.Provider>
  );
};
