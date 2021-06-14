import Head from "next/head";

import Header from "./home/header";
import Hero from "./home/hero";
import About from "./home/about";
import CounterSection from "./home/counter";
import TeamSection from "./home/team";
import Footer from "./home/footer";
import Contact from "./home/contact";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Operation Medical Care</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      </Head>
      <Header />
      <Hero />
      <About />
      <CounterSection />
      <TeamSection />
      <Contact />
      <Footer />
    </>
  );
};
export default HomePage;
