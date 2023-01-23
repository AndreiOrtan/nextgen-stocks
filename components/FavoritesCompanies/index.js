import { useContext } from "react";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";

const FavoritesCompanies = () => {
  const { favorites } = useContext(CompaniesContext);
  console.log(favorites);

  const renderedCompanies = favorites.map((company) => {
    return (
      <div key={company.ticker}>
        <h1>{company.name}</h1>
        <h2>{company.ticker}</h2>
      </div>
    );
  });
  return <div className="mt-36">{renderedCompanies}</div>;
};

export default FavoritesCompanies;
