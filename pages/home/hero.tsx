import Link from "next/link";
import Image from "next/image";

import { Parallax } from "react-scroll-parallax";
import ImageChildren from "../../public/images/home/hero/Operation-Medical-Care-Belize-1.jpg";

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="w-full pt-12 pb-20 mx-auto text-center max-w-7xl lg:py-16 lg:text-left">
          <div
            className="px-4 lg:w-1/2 sm:px-8 xl:pr-16"
            style={{ padding: "5rem" }}
          >
            <h1 className="text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Providing Care</span>{" "}
              <span className="block xl:inline">Changing Lives</span>
            </h1>
            <p
              className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
              style={{ lineHeight: "1.768" }}
            >
              We are a non-profit made up of medical doctors, nurses,
              pharmacists, dietitians, business owners, software engineers and
              everyday people all committed to bringing healthcare to the remote
              villages of Belize.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <Link href="https://charity.gofundme.com/o/en/donate-widget/31604">
                <a className="px-10 py-4 font-medium transition-all bg-white rounded shadow text-primary-500 hover:text-white hover:bg-primary-500 hover:shadow-lg hover:cursor-pointer">
                  Donate!
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative grid w-full h-64 sm:flex sm:justify-center sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full place-items-center">
          <div className="w-4/5 overflow-hidden" style={{ width: "80%" }}>
            <Parallax y={[-40, 40]}>
              <Image
                className="object-cover h-auto"
                src={ImageChildren}
                width={1024}
                height={860}
                placeholder="blur"
                alt="3 Belizean children having fun"
              />
            </Parallax>
          </div>
        </div>
      </main>
    </div>
  );
}
