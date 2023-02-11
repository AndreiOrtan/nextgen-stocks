export interface ICompanyItem {
  ticker: string;
  name: string;
  [key: string]: any;
}
export interface Companies {
  companies: ICompanyItem[];
}

export interface ICompaniesContext {
  companies: ICompanyItem[];
  setCompanies: (value: any) => void;
  searchText: string;
  setSearchText: (value: any) => void;
  favorites: FavoriteCompany[];
  addToFavorites: (value: any) => void;
  deleteItem: (value: any) => void;
}

export interface FavoriteCompany {
  ticker: string;
  name: string;
  added_on: string;
}

export interface CompanyItemComponent {
  company: ICompanyItem;
  date?: string;
}
