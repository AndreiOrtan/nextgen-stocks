import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styles from "./CompanyList.module.css";
import { useRouter } from "next/router";
import { CompaniesContext } from "../CompaniesProvider/CompaniesContext";
import Spinner from "../Spinner/Spinner";
import getApiKey from "../api/getApiKey";

const URL = "https://api.polygon.io";

const CompanyList = () => {
  const router = useRouter();
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

  function companyDetailsHandler(comp) {
    setSelectedTicker(comp.ticker);
    router.push(`details/` + comp.ticker);
  }

  const renderedCompanies =
    companies &&
    companies.map((company) => {
      return (
        <div
          key={company.name + company.ticker}
          className={`rounded bg-transparent p-4 text-white text-opacity-75 border border-gray-800 ${styles.parrentDiv} ${styles.highlight} flex`}
          onClick={() => companyDetailsHandler(company)}
        >
          <div>
            <h2 className="text-lg font-medium">{company.name}</h2>
            <h4 className="text-sm text-gray-600">{company.ticker}</h4>
          </div>
        </div>
      );
    });

  return <div className="space-y-4 p-4 mt-32">{renderedCompanies}</div>;
};

export default CompanyList;
