import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { getFavorites, saveFavorites } from "../../services/favorites-api";
import { FavoriteCompany, ICompaniesContext } from "../../types";

const defaultValues = {
  companies: [],
  setCompanies: () => {},
  searchText: "",
  setSearchText: () => {},
  favorites: [],
  deleteItem: () => {},
  addToFavorites: ({}) => {},
};

export const CompaniesContext = createContext<ICompaniesContext>(defaultValues);

interface ProviderProps {
  children: ReactNode;
}

export const Provider: FC<ProviderProps> = ({ children }) => {
  const [companies, setCompanies] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState<FavoriteCompany[]>(getFavorites());

  const addToFavorites = (company: FavoriteCompany) => {
    // construiesti arrayul nou
    const newItems: FavoriteCompany[] = [...favorites, company];
    saveFavorites(newItems);
    setFavorites(newItems);
  };

  const deleteItem = (ticker: string) => {
    // construiesti arrayul nou
    const newItems = favorites.filter(
      (item: { ticker: string }) => item.ticker !== ticker
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
