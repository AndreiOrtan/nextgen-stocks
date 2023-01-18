/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import getApiKey from "../../components/api/getApiKey";
import { useRouter } from "next/router";

const URL = "https://api.polygon.io";

const CompanyDetails = () => {
  const router = useRouter();

  const [companyPrices, setCompanyPrices] = useState(null);
  const [companyInfo, setCopanyInfo] = useState("");
  const priceDiff = companyPrices
    ? (
        ((companyPrices.close - companyPrices.open) / companyPrices.close) *
        100
      ).toFixed(2)
    : "";

  useEffect(() => {
    axios
      .get(
        `${URL}/v1/open-close/${router.query.ticker}/2023-01-13?adjusted=true`,
        {
          params: {
            apiKey: getApiKey(),
          },
        }
      )
      .then((data) => setCompanyPrices(data.data))
      .then(() => {})
      .catch((error) => {
        if (error.response) {
          console.log(error);
        }
        console.log(error.config);
      });
  }, [router.query.ticker]);

  useEffect(() => {
    axios
      .get(`${URL}/v3/reference/tickers/${router.query.ticker}`, {
        params: {
          apiKey: getApiKey(),
        },
      })
      .then((data) => setCopanyInfo(data.data.results));
  }, [router.query.ticker]);

  if (!companyInfo) {
    return <Spinner />;
  }

  return (
    companyPrices && (
      <div className="pt-14">
        <div className="bg-gray-900 bg-opacity-75 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium text-white">{companyInfo.name}</h3>
          <p className="text-gray-300">{router.query.ticker}</p>
          <div className="price-container flex">
            <p className="text-gray-300">{`${companyPrices.close}`}</p>
            <p
              className={`${priceDiff < 0 ? "text-red-900" : "text-green-900"}`}
            >
              {`(${priceDiff} %)`}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default CompanyDetails;

//https://api.polygon.io/v1/open-close/DSJA/2023-01-13?adjusted=true&apiKey=sjapce6gjgDFgpRHlc7wrzhza_9dbFji
//https://api.polygon.io/v1/open-close/DSJA/2023-01-13?adjusted=true&apiKey=sjapce6gjgDFgpRHlc7wrzhza_9dbFji