import { useContext } from "react";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import styles from "./FavoritesCompanies.module.css";
import { useRouter } from "next/router";

const FavoritesCompanies = () => {
  const router = useRouter();
  const { favorites, setSelectedTicker, deleteItem } =
    useContext(CompaniesContext);

  function companyDetailsHandler(e, comp) {
    if (e.target.tagName === "path" || e.target.tagName === "svg") {
      return;
    }
    setSelectedTicker(comp.ticker);
    router.push(`details/` + comp.ticker);
  }

  const renderedCompanies = favorites.map((company) => {
    return (
      <div
        key={company.name + company.ticker}
        className={`rounded bg-transparent p-4 text-white text-opacity-75 border border-gray-800 items-center ${styles.highlight} flex`}
        onClick={(e) => companyDetailsHandler(e, company)}
      >
        <div>
          <h2 className="text-lg font-medium">{company.name}</h2>
          <h4 className="text-sm text-gray-600">{company.ticker}</h4>
        </div>
        <IconContext.Provider value={{ size: "25px" }}>
          <div className={`ml-auto ${styles.star}`}>
            <AiFillStar onClick={() => deleteItem(company.ticker)} />
          </div>
        </IconContext.Provider>
        <p>{company.added_on}</p>
      </div>
    );
  });
  return <div>{renderedCompanies}</div>;
};

export default FavoritesCompanies;
