import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Mission from "../../components/mission";
import Casesection from "../../components/case2";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Head from "next/head";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Causes</title>
      </Head>
      <Header />
      <PageTitle pageTitle={"Our Causes"} pagesub={"Causes"} />
      <Mission subclass={"section-padding"} />
      <Casesection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
