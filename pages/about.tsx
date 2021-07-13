import Head from "next/head";
import Image from "next/image";

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import { DownloadIcon } from "@heroicons/react/outline";

import Header from "./home/header";
import Footer from "./home/footer";

// Do not inline these into the array so we can do static imports later when vercel fixes their issue
const Picture1 = "/images/Picture1.png";
const Picture2 = "/images/Picture2.png";
const Picture3 = "/images/Picture3.png";
const Picture4 = "/images/Picture4.png";
const Picture5 = "/images/Picture5.png";
const Picture6 = "/images/Picture6.png";
const Picture7 = "/images/Picture7.png";
const Picture8 = "/images/Picture8.png";
const Picture9 = "/images/Picture9.png";
const Picture10 = "/images/Picture10.png";
const Picture11 = "/images/Picture11.png";
const Picture12 = "/images/Picture12.png";
const Picture13 = "/images/Picture13.png";
const Picture14 = "/images/Picture14.png";
const Picture15 = "/images/Picture15.png";
const Picture16 = "/images/Picture16.png";
const Picture17 = "/images/Picture17.png";
const Picture18 = "/images/Picture18.png";
const Picture19 = "/images/Picture19.png";
const Picture20 = "/images/Picture20.png";
const Picture21 = "/images/Picture21.png";
const Picture22 = "/images/Picture22.png";
const Picture23 = "/images/Picture23.png";
const Picture24 = "/images/Picture24.png";
const Picture25 = "/images/Picture25.png";
const Picture26 = "/images/Picture26.png";
const Picture27 = "/images/Picture27.png";
const Picture28 = "/images/Picture28.png";
const Picture29 = "/images/Picture29.png";
const Picture30 = "/images/Picture30.png";
const Picture31 = "/images/Picture31.png";
const Picture32 = "/images/Picture32.png";
const Picture33 = "/images/Picture33.png";
const Picture34 = "/images/Picture34.png";
const Picture35 = "/images/Picture35.png";
const Picture36 = "/images/Picture36.png";
const Picture37 = "/images/Picture37.png";
const Picture38 = "/images/Picture38.png";
const Picture39 = "/images/Picture39.png";
const Picture40 = "/images/Picture40.png";
const Picture41 = "/images/Picture41.png";
const Picture42 = "/images/Picture42.png";
const Picture43 = "/images/Picture43.png";
const Picture44 = "/images/Picture44.png";
const Picture45 = "/images/Picture45.png";
const Picture46 = "/images/Picture46.png";
const Picture47 = "/images/Picture47.png";

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

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

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
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
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
            About Us
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
                  className="flex overflow-hidden bg-gray-300 h-72 hover:cursor-pointer"
                >
                  <Image
                    src={e}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(300, 300)
                    )}`}
                    alt=""
                    objectFit="cover"
                    layout="fill"
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
