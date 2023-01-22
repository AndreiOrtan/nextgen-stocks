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
    if (!searchText) {
      return;
    }

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

  if (!companies && searchText) {
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

  return !searchText ? (
    <section className="py-8 mt-32">
      <div className="container mx-auto">
        <h1 className="text-3xl font-medium text-center text-white mb-8">
          Welcome to Stockify
        </h1>
        <p className="text-lg text-center text-white mb-8">
          Stockify is the ultimate tool for managing your stock portfolio. A
          easy-to-use platform that allows you to search for companies, add them
          to your favorites, and view additional information and charts on their
          performance.
        </p>
        <p class="text-center text-white mb-8 text-2xl font-medium">
          Begin your journey by using our powerful search bar to find the
          companies you are interested in and{" "}
          <span className="text-indigo-500">start tracking them today</span>.
        </p>
      </div>
    </section>
  ) : (
    <div className="space-y-4 p-4 mt-32">{renderedCompanies}</div>
  );
};

export default CompanyList;
