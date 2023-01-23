/* eslint-disable @next/next/no-img-element */
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import getApiKey from "../../components/api/getApiKey";
import { useRouter } from "next/router";
import { getFormattedPreviousBusinessDay } from "../../helpers/getPreviousWorkingDay";
import TradingViewWidget from "../../components/TradingViewWidget";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const URL = "https://api.polygon.io";

const CompanyDetails = () => {
  const router = useRouter();

  const [companyPrices, setCompanyPrices] = useState(null);
  const [companyInfo, setCompanyInfo] = useState("");
  const priceDiff = companyPrices
    ? (
        ((companyPrices.close - companyPrices.open) / companyPrices.close) *
        100
      ).toFixed(2)
    : "";

  const fetchTickerPrice = useCallback(() => {
    if (!router.query.ticker) {
      return;
    }
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
      .catch((error) => {
        if (error.response) {
          console.log(error);
        }
        console.log(error.config);
      });
  }, [router.query.ticker]);

  const fetchTickerDetails = useCallback(() => {
    if (!router.query.ticker) {
      return;
    }
    axios
      .get(`${URL}/v3/reference/tickers/${router.query.ticker}`, {
        params: {
          apiKey: getApiKey(),
        },
      })
      .then((data) => setCompanyInfo(data.data.results));
  }, [router.query.ticker]);

  useEffect(() => {
    fetchTickerDetails();
    fetchTickerPrice();
  }, [fetchTickerDetails, fetchTickerPrice]);

  if (!companyInfo && !companyPrices) {
    return <Spinner />;
  }

  return (
    companyPrices && (
      <div className="pt-14 mt-32">
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
          {router.query.ticker ? (
            <TradingViewWidget ticker={router.query.ticker} />
          ) : null}
        </div>
      </div>
    )
  );
};

export default withPageAuthRequired(CompanyDetails);

//https://api.polygon.io/v1/open-close/DSJA/2023-01-13?adjusted=true&apiKey=sjapce6gjgDFgpRHlc7wrzhza_9dbFji
//https://api.polygon.io/v1/open-close/DSJA/2023-01-13?adjusted=true&apiKey=sjapce6gjgDFgpRHlc7wrzhza_9dbFji
