import Head from "next/head";

import Header from "./home/header";
import Hero from "./home/hero";
import About from "./home/about";
import CounterSection from "./home/counter";
import TeamSection from "./home/team";
import Footer from "./home/footer";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Operation Medical Care</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Header />
      <Hero />
      <About />
      <CounterSection />
      <TeamSection />
      <Footer />
    </>
  );
};
export default HomePage;
