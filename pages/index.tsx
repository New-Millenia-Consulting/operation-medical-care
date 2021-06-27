import { useEffect, useState } from "react";
import Head from "next/head";

import { ParallaxProvider } from "react-scroll-parallax";

import { ArrowSmUpIcon } from "@heroicons/react/outline";

import Header from "./home/header";
import Hero from "./home/hero";
import Slider from "./home/slider";
import CounterSection from "./home/counter";
import TeamSection from "./home/team";
import Footer from "./home/footer";
import Contact from "./home/contact";
import Mission from "./home/mission";

const FAB = () => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPercentage =
        (window.pageYOffset + window.innerHeight) /
        document.documentElement.offsetHeight;

      setIsShowing(scrollPercentage > 0.5);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`
      fixed p-2 transition-all rounded-full shadow-md bottom-4 right-8
      bg-primary-500 hover:bg-primary-700 transform
      ${isShowing ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
    `}
    >
      <ArrowSmUpIcon className="w-8 h-8 text-white" />
    </a>
  );
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Operation Medical Care</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="top"></div>
      <ParallaxProvider>
        <Header />
        <Hero />
        <Mission />
        <Slider />
        <CounterSection />
        <TeamSection />
        <div className="w-full px-8 py-5 bg-blue-700">
          <p className="max-w-2xl m-auto text-center text-white">
            Due to circumstances surrounding COVID-19 pandemic and the safety of
            our patients, Operation Medical Care will resume in September of
            2022
          </p>
        </div>
        <Contact />
        <Footer />
        <FAB />
      </ParallaxProvider>
    </>
  );
};

export default HomePage;
