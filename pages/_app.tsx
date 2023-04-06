import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "../components/Layout/Layout";
import { Provider } from "../components/CompaniesProvider/CompaniesContext";

export default function App({ Component, pageProps }:any) {
  return (
    <UserProvider>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </UserProvider>
  );
}
