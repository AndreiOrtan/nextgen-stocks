import axios, { AxiosResponse } from "axios";
import getApiKey from "./getApiKey";

const URL = "https://api.polygon.io";

function apiAdapter<T>(response: AxiosResponse<T>) {
  return response.data;
}

export const fetchCompanies = (searchText = "") => {
  // if (!searchText) {
  //   return;
  // }
  return axios
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
    .then(apiAdapter);
};
