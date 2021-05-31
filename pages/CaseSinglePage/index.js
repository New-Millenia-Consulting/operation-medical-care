import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import CaseSingle from "../../components/CaseSingle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Head from "next/head";

const CaseSinglePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Causes Details</title>
      </Head>
      <Header />
      <PageTitle
        pageTitle={"Single Causes"}
        pagesub={"Ensure Education for every poor children"}
      />
      <CaseSingle />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CaseSinglePage;
