import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import CompanyList from "../components/CompanyList/CompanyList";

function Home() {
  return (
    <>
      <Head>
        <title>Stocks Application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CompanyList />
    </>
  );
}

export default withPageAuthRequired(Home);
