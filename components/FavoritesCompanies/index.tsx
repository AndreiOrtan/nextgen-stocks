import { useContext } from "react";
import { FavoriteCompany, ICompanyItem } from "../../types";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import CompanyItem from "../CompanyItem/CompanyItem";

const FavoritesCompanies = () => {
  const { favorites } = useContext(CompaniesContext);
  return (
    <div>
      {favorites &&
        favorites.map((company: FavoriteCompany) => {
          return (
            <CompanyItem
              company={company}
              date={company.added_on}
              key={company.ticker}
            />
          );
        })}
    </div>
  );
};

export default FavoritesCompanies;
