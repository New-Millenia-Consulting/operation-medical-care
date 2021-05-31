import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Contactpage from "../../components/Contactpage";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
      </Head>
      <Header />
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact"} />
      <Contactpage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
