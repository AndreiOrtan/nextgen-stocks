import { useContext } from "react";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import CompanyItem from "../CompanyItem/CompanyItem";

const FavoritesCompanies = () => {
  const { favorites } = useContext(CompaniesContext);

  return (
    <div>
      {favorites &&
        favorites.map((company: any) => {
          return (
            <div key={company.ticker}>
              <CompanyItem company={company} date={company.added_on} />
            </div>
          );
        })}
    </div>
  );
};

export default FavoritesCompanies;
