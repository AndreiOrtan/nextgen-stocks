export interface Company {
  ticker: string;
  name: string;
  [key: string]: any;
}

export interface ICompaniesContext {
  companies: Company[];
  setCompanies: (value: any) => void;
  searchText: string;
  setSearchText: (value: any) => void;
  favorites: string[];
  addToFavorites: (value: any) => void;
  deleteItem: (value: any) => void;
}
