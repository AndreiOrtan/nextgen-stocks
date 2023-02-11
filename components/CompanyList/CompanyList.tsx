/* eslint-disable @next/next/no-img-element */
import React from "react";
import Spinner from "../Spinner/Spinner";
import CompanyItem from "../CompanyItem/CompanyItem";
import { Companies, ICompanyItem } from "../../types";

const CompanyList = ({ companies }: Companies) => {
  if (!companies) {
    return <Spinner />;
  }

  const renderedCompanies =
    companies &&
    companies.map((company: ICompanyItem) => {
      return <CompanyItem company={company} key={company.ticker} />;
    });

  return <div className="space-y-4 p-4">{renderedCompanies}</div>;
};

export default CompanyList;
