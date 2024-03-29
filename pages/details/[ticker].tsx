/* eslint-disable @next/next/no-img-element */
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import getApiKey from "../../components/api/getApiKey";
import { useRouter } from "next/router";
import { getFormattedPreviousBusinessDay } from "../../helpers/getPreviousWorkingDay";
import TradingViewWidget from "../../components/TradingViewWidget";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import React from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./ticker.module.css";

const URL = "https://api.polygon.io";

const CompanyDetails = () => {
  const router = useRouter();
  const [companyPrices, setCompanyPrices] = useState({ close: 1, open: 1 });
  const [companyInfo, setCompanyInfo] = useState({
    branding: { logo_url: "" },
    name: "",
    description: "",
  });
  const [img, setImg] = useState("");

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
        `${URL}/v1/open-close/${
          router.query.ticker
        }/${getFormattedPreviousBusinessDay()}?adjusted=true`,
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

  useEffect(() => {
    const fetchImage = async () => {
      if (!companyInfo.branding) {
        return;
      }
      const IMG_URL = `${companyInfo.branding.logo_url}`;
      const res = await fetch(IMG_URL, {
        headers: { Authorization: `Bearer VTwDsU6s6spJdOcQ8z2Sf43Pz9Ns1TdA` },
      });
      const imageBlob = await res.blob();
      const imageObjectURL = window.URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };
    fetchImage();
  }, [companyInfo.branding]);

  if (!companyInfo && !companyPrices) {
    return <Spinner />;
  }

  return (
    companyPrices && (
      <div className="pt-8 mt-24 flex flex-col">
        <div className="bg-gradient-to-r from-slate-900 to-gray-800 shadow-lg p-6 flex min-h-min mb-1 w-full">
          <div className="w-full">
            <div className="relative mb-1 ">
              <div>
                <h3 className="text-lg font-medium text-white">
                  {companyInfo.name}
                </h3>
                <p className="text-gray-300">{router.query.ticker}</p>
                <div className="price-container flex">
                  <p className="text-gray-300">{`${companyPrices.close}`}</p>
                  <p
                    className={`${
                      parseInt(priceDiff) < 0
                        ? "text-red-900"
                        : "text-green-900"
                    }`}
                  >
                    {`(${priceDiff} %)`}
                  </p>
                </div>
              </div>

              <img
                src={img}
                alt={`${companyInfo.name}`}
                className={`absolute top-0 right-0 w-36 ${styles.maxWidth}`}
              />
            </div>
            <p className="text-gray-400 text-justify">
              {companyInfo.description}
            </p>
          </div>
        </div>
        <div className="">
          {router.query.ticker ? (
            <TradingViewWidget ticker={router.query.ticker} />
          ) : null}
        </div>
        <Footer companyInfo={companyInfo} />
      </div>
    )
  );
};

export default withPageAuthRequired(CompanyDetails);
