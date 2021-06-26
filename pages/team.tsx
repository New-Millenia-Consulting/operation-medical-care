import Head from "next/head";
import Image from "next/image";

import Header from "./home/header";

import Picture46 from "../public/images/Picture46.png";

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Operation Medical Care</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className="relative grid w-full py-36 place-items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={Picture46}
            placeholder="blur"
            objectFit="cover"
            alt=""
            layout="fill"
            objectPosition="center 25%"
          />
        </div>
        <div
          className="absolute inset-0 bg-gray-900 bg-opacity-80"
          style={{ zIndex: 1 }}
        />
        <h1
          className="text-6xl font-normal tracking-normal text-white"
          style={{ zIndex: 2 }}
        >
          Our Team
        </h1>
        <div className="w-20 h-px my-6 bg-white" style={{ zIndex: 2 }}></div>
        <p className="text-lg text-center text-gray-200" style={{ zIndex: 2 }}>
          Meet our awesome team of physicians,
          <br />
          nurses, and virtuous volunteers from all over!
        </p>
      </div>
    </>
  );
};

export default TeamPage;
