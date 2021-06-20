import Head from "next/head";

import { ParallaxProvider } from "react-scroll-parallax";

import Header from "./home/header";
import Hero from "./home/hero";
import About from "./home/about";
import CounterSection from "./home/counter";
import TeamSection from "./home/team";
import Footer from "./home/footer";
import Contact from "./home/contact";
import Mission from "./home/mission";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Operation Medical Care</title>
      </Head>
      <ParallaxProvider>
        <Header />
        <Hero />
        <Mission />
        <About />
        <CounterSection />
        <TeamSection />
        <Contact />
        <Footer />
      </ParallaxProvider>
    </>
  );
};
export default HomePage;
