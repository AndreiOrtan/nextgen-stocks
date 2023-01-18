import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styles from "./CompanyList.module.css";
import Link from "next/link";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import Spinner from "../Spinner/Spinner";
import getApiKey from "../api/getApiKey";

const URL = "https://api.polygon.io";

const CompanyList = () => {
  const { setSelectedTicker, companies, setCompanies, searchText } =
    useContext(CompaniesContext);
  useEffect(() => {
    axios
      .get(`${URL}/v3/reference/tickers`, {
        params: {
          active: true,
          limit: 1000,
          sort: "cik",
          order: "desc",
          market: "stocks",
          search: searchText,
          apiKey: getApiKey(),
        },
      })
      .then((data) => {
        setCompanies(data.data.results);
      });
  }, [setCompanies, searchText]);

  if (!companies) {
    return <Spinner />;
  }

  const renderedCompanies =
    companies &&
    companies.map((company) => {
      return (
        <div
          key={company.name + company.ticker}
          className={`bg-transparent p-4 text-white text-opacity-75 border-b-2 border-gray-600 ${styles.parrentDiv} ${styles.highlight} flex`}
        >
          <div>
            <h2 className="text-lg font-medium">{company.name}</h2>
            <h4 className="text-sm text-gray-600">{company.ticker}</h4>
          </div>
          <Link
            href="/portofolio"
            className="z-10 text-white hover:text-gray-300 px-2 pt-3 rounded-md bg-indigo-600"
          >
            Add to portofolio
          </Link>
          <Link
            href={`/details/${company.ticker}`}
            className={`relative z-10 text-white hover:text-gray-300 px-2 pt-3 rounded-md bg-indigo-600 ml-auto ${styles.showBtn}`}
            onClick={() => setSelectedTicker(company.ticker)}
          >
            More details
          </Link>
        </div>
      );
    });

  return <div className="pt-14">{renderedCompanies}</div>;
};

export default CompanyList;
