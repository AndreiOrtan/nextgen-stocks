import { createContext, useState } from "react";

export const CompaniesContext = createContext(null);

export const Provider = ({ children }) => {
  const [companies, setCompanies] = useState(null);
  const [selectedTicker, setSelectedTicker] = useState("");
  const [searchText, setSearchText] = useState("");

  const contextValues = {
    selectedTicker,
    setSelectedTicker,
    companies,
    setCompanies,
    searchText,
    setSearchText,
  };
  return (
    <CompaniesContext.Provider value={contextValues}>
      {children}
    </CompaniesContext.Provider>
  );
};
