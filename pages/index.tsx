import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Mission from "../components/mission";
import About from "../components/about";
import CounterSection from "../components/counter";
import TeamSection from "../components/team";
import Footer from "../components/footer";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Operation Medical Care</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Header />
      <Hero />
      <Mission />
      <About />
      <CounterSection />
      <TeamSection />
      <Footer />
    </>
  );
};
export default HomePage;
