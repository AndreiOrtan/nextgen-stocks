import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import CompanyList from "../components/CompanyList/CompanyList";
import CollapsibleMenu from "../components/CollapsibleMenu/CollapsibleMenu";
import React from "react";
import { CompaniesContext } from "../components/CompaniesProvider/CompaniesContext";
import { useContext, useEffect } from "react";
import { fetchCompanies } from "../components/api/fetchCompanies";

function Home() {
  const { searchText, companies, setCompanies } = useContext(CompaniesContext);

  useEffect(() => {
    fetchCompanies(searchText).then((data) => setCompanies(data.results));
  }, [searchText, setCompanies]);

  return (
    <>
      <Head>
        <title>Stocks Application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="mt-36">
        <CollapsibleMenu />
      </div>
      {searchText ? (
        <div className="mt-32">
          {" "}
          <CompanyList companies={companies} />
        </div>
      ) : (
        <section className="py-8 mt-18">
          <div className="container mx-auto">
            <h1 className="text-3xl font-medium text-center text-white mb-8">
              Welcome to Stockify
            </h1>
            <p className="text-lg text-center text-white mb-8">
              Stockify is the ultimate tool for managing your stock portfolio. A
              easy-to-use platform that allows you to search for companies, add
              them to your favorites, and view additional information and charts
              on their performance.
            </p>
            <p className="text-center text-white mb-8 text-2xl font-medium">
              Begin your journey by using our powerful search bar to find the
              companies you are interested in and{" "}
              <span className="text-indigo-500">start tracking them today</span>
              .
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default withPageAuthRequired(Home);
