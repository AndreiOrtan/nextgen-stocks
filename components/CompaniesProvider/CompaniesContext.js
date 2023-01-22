import { createContext, useState } from "react";
import { getFavorites, saveFavorites } from "../../services/favorites-api";

export const CompaniesContext = createContext(null);

export const Provider = ({ children }) => {
  const [companies, setCompanies] = useState(null);
  const [selectedTicker, setSelectedTicker] = useState("");
  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState(getFavorites());

  const contextValues = {
    selectedTicker,
    setSelectedTicker,
    companies,
    setCompanies,
    searchText,
    setSearchText,
  };

  const addToFavorites = (company) => {
    // construiesti arrayul nou
    // newItems = [...favorites, company]
    saveFavorites(newItems);
  };

  const deleteItem = (ticker) => {
    // construiesti arrayul nou
    // newItems = favorites.filter(item => item.ticker !== ticker)

    saveFavorites(newItems);
  };
  return (
    <CompaniesContext.Provider value={contextValues}>
      {children}
    </CompaniesContext.Provider>
  );
};
