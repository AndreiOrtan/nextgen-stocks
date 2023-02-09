/* eslint-disable @next/next/no-img-element */
import React from "react";
import Spinner from "../Spinner/Spinner";
import CompanyItem from "../CompanyItem/CompanyItem";

const CompanyList = ({ companies }: any) => {
  if (!companies) {
    return <Spinner />;
  }

  const renderedCompanies =
    companies &&
    companies.map((company: any) => {
      return <CompanyItem company={company} key={company.ticker} />;
    });

  return <div className="space-y-4 p-4">{renderedCompanies}</div>;
};

export default CompanyList;
