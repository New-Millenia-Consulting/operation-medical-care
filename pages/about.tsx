import Head from "next/head";
import Image from "next/image";

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import { DownloadIcon } from "@heroicons/react/outline";

import Header from "./home/header";
import Footer from "./home/footer";

import Picture1 from "../public/images/Picture1.png";
import Picture2 from "../public/images/Picture2.png";
import Picture3 from "../public/images/Picture3.png";
import Picture4 from "../public/images/Picture4.png";
import Picture5 from "../public/images/Picture5.png";
import Picture6 from "../public/images/Picture6.png";
import Picture7 from "../public/images/Picture7.png";
import Picture8 from "../public/images/Picture8.png";
import Picture9 from "../public/images/Picture9.png";
import Picture10 from "../public/images/Picture10.png";
import Picture11 from "../public/images/Picture11.png";
import Picture12 from "../public/images/Picture12.png";
import Picture13 from "../public/images/Picture13.png";
import Picture14 from "../public/images/Picture14.png";
import Picture15 from "../public/images/Picture15.png";
import Picture16 from "../public/images/Picture16.png";
import Picture17 from "../public/images/Picture17.png";
import Picture18 from "../public/images/Picture18.png";
import Picture19 from "../public/images/Picture19.png";
import Picture20 from "../public/images/Picture20.png";
import Picture21 from "../public/images/Picture21.png";
import Picture22 from "../public/images/Picture22.png";
import Picture23 from "../public/images/Picture23.png";
import Picture24 from "../public/images/Picture24.png";
import Picture25 from "../public/images/Picture25.png";
import Picture26 from "../public/images/Picture26.png";
import Picture27 from "../public/images/Picture27.png";
import Picture28 from "../public/images/Picture28.png";
import Picture29 from "../public/images/Picture29.png";
import Picture30 from "../public/images/Picture30.png";
import Picture31 from "../public/images/Picture31.png";
import Picture32 from "../public/images/Picture32.png";
import Picture33 from "../public/images/Picture33.png";
import Picture34 from "../public/images/Picture34.png";
import Picture35 from "../public/images/Picture35.png";
import Picture36 from "../public/images/Picture36.png";
import Picture37 from "../public/images/Picture37.png";
import Picture38 from "../public/images/Picture38.png";
import Picture39 from "../public/images/Picture39.png";
import Picture40 from "../public/images/Picture40.png";
import Picture41 from "../public/images/Picture41.png";
import Picture42 from "../public/images/Picture42.png";
import Picture43 from "../public/images/Picture43.png";
import Picture44 from "../public/images/Picture44.png";
import Picture45 from "../public/images/Picture45.png";
import Picture46 from "../public/images/Picture46.png";
import Picture47 from "../public/images/Picture47.png";

// import Picture7Upscale from "../public/images/Picture7-2.png";

const Images = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture5,
  Picture6,
  Picture7,
  Picture8,
  Picture9,
  Picture10,
  Picture11,
  Picture12,
  Picture13,
  Picture14,
  Picture15,
  Picture16,
  Picture17,
  Picture18,
  Picture19,
  Picture20,
  Picture21,
  Picture22,
  Picture23,
  Picture24,
  Picture25,
  Picture26,
  Picture27,
  Picture28,
  Picture29,
  Picture30,
  Picture31,
  Picture32,
  Picture33,
  Picture34,
  Picture35,
  Picture36,
  Picture37,
  Picture38,
  Picture39,
  Picture40,
  Picture41,
  Picture42,
  Picture43,
  Picture44,
  Picture45,
  Picture46,
  Picture47,
];

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Operation Medical Care</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <SimpleReactLightbox>
        <div className="relative grid w-full pt-32 pb-24 place-items-center mt-14 md:mt-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={Picture7}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
              alt=""
            />
          </div>
          <div
            className="absolute inset-0 bg-gray-900 bg-opacity-80"
            style={{ zIndex: 1 }}
          />
          <h1
            className="text-4xl font-normal tracking-normal text-white sm:text-5xl md:text-6xl"
            style={{ zIndex: 2 }}
          >
            About Vishnu
          </h1>
          <div className="w-20 h-px my-6 bg-white" style={{ zIndex: 2 }}></div>
          <p
            className="max-w-3xl px-4 text-sm text-center text-gray-200 md:text-base"
            style={{ zIndex: 2 }}
          >
            Every year, we spent 8 days traveling to remote villages in Belize.
            Our team of medical doctors, nurses, pharmacists, dietians, business
            owners, software engineers, and kind everday volunteers, treat over
            900 patients and distribute much needed supplies to improve the
            lives of those in need. We not only provide vital medical
            necessities, but hats—to prevent glaucoma, toys, school supplies,
            and everyday items that would otherwise be unaffordable.
          </p>
          <a
            href="https://www.dropbox.com/scl/fi/852dybe6tsapdcf56nomi/Belize-Trip-2018-Final.pptx?dl=1&rlkey=cvwiosihr69n16doxr54ci7gq"
            download
            className="mt-10 text-base font-medium tracking-wide text-center text-blue-300 md:text-lg"
            style={{ zIndex: 2 }}
          >
            See our 2018 Mission
            <br className="md:hidden" /> Trip Powerpoint!{" "}
            <DownloadIcon className="inline-block w-5 h-5 ml-1 -translate-y-px" />
          </a>
        </div>

        <main className="p-4 pb-24 m-auto max-w-7xl">
          <SRLWrapper>
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {Images.map((e, i) => (
                <div
                  key={i}
                  className="relative flex overflow-hidden bg-gray-300 h-72 hover:cursor-pointer"
                >
                  <Image
                    src={e}
                    placeholder="blur"
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </SRLWrapper>
        </main>
      </SimpleReactLightbox>
      <Footer />
    </>
  );
};

export default AboutPage;
