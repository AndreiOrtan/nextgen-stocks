import { IconContext } from "react-icons";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./CompanyList.module.css";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

const CompanyItem = ({ company, date }: any) => {
  const [favoriteTickers, setFavoriteTickers] = useState([""]);
  const router = useRouter();

  const { deleteItem, addToFavorites, favorites } =
    useContext(CompaniesContext);

  function companyDetailsHandler(e: any, comp: any) {
    if (e.target.tagName === "path" || e.target.tagName === "svg") {
      return;
    }
    // setSelectedTicker(comp.ticker);
    router.push(`details/` + comp.ticker);
  }

  const handleFavoriteTickers = (ticker: any) => {
    if (favoriteTickers.includes(ticker)) {
      setFavoriteTickers(
        favoriteTickers.filter((selectedTicker) => selectedTicker !== ticker)
      );
    } else {
      setFavoriteTickers([...favoriteTickers, ticker]);
    }
  };

  return (
    <div
      className={`rounded bg-transparent p-4 text-white text-opacity-75 border border-gray-800 items-center ${styles.parrentDiv} ${styles.highlight} flex`}
      onClick={(e) => companyDetailsHandler(e, company)}
    >
      <div>
        <h2 className="text-lg font-medium">{company.name}</h2>
        <h4 className="text-sm text-gray-600">{company.ticker}</h4>
      </div>
      <IconContext.Provider value={{ size: "25px" }}>
        <div
          className={`ml-auto ${styles.star}`}
          onClick={() => handleFavoriteTickers(company.ticker)}
        >
          {favoriteTickers.includes(company.ticker) ||
          favorites.find(
            (favComp: any) => favComp.ticker === company.ticker
          ) ? (
            <AiFillStar onClick={() => deleteItem(company.ticker)} />
          ) : (
            <AiOutlineStar
              onClick={() =>
                addToFavorites({
                  ticker: company.ticker,
                  name: company.name,
                  added_on: new Date().toLocaleDateString(),
                })
              }
            />
          )}
        </div>
      </IconContext.Provider>
      {date ? date : ""}
    </div>
  );
};

export default CompanyItem;
