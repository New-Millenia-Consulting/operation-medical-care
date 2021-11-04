import Image from "next/image";
import Link from "next/link";

import { Parallax } from "react-scroll-parallax";

import ImageMap from "../../public/images/home/mission/dreamstime_xxl_114898439.jpg";

export default function Mission() {
  return (
    <div className="relative py-16 bg-secondGreen sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative hidden h-full sm:py-16 lg:py-0 lg:block">
          <div
            aria-hidden="true"
            className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 w-full right-1/2 bg-thirdGreen rounded-r-3xl lg:right-72" />
            <svg
              className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-mainGreen"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative h-full max-w-md px-4 mx-auto border-0 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            <Parallax
              y={[-20, 20]}
              className="w-full h-full"
              styleInner={{ width: "100%", height: "100%" }}
            >
              <div className="relative w-full h-full overflow-hidden shadow rounded-2xl">
                <Image
                  className="w-full h-full"
                  src={ImageMap}
                  objectFit="cover"
                  placeholder="blur"
                  layout="fill"
                  alt="Belize on a map"
                />
                <div className="absolute inset-0 bg-primary-500 bg-opacity-30 mix-blend-multiply" />
                <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-primary-600 via-primary-600" />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="relative max-w-md px-4 mx-auto border-0 sm:max-w-3xl sm:px-6 lg:px-0">
          <div className="lg:pt-20">
            <h2 className="text-3xl font-medium tracking-tight text-center text-green-800 sm:text-5xl lg:text-left">
              On a Mission to
              <br />
              Help Those In Need
            </h2>
            <div className="mt-6 space-y-2 text-green-700">
              <p className="text-center lg:pr-20 lg:text-left">
              Every year, we spend 8 days traveling to remote villages in Belize.
              Our team of medical doctors, nurses, pharmacists, dietians, business owners,
              software engineers, and kind everday volunteers, treat over 900 patients and 
              distribute much needed supplies to improve the lives of those in need.
              We not only provide vital medical services and medications. We also provide
              school supplies, fitness equipment, as well as day-to-day items that Belizeans use.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center lg:text-left">
            <Link href="/about">
              <a className="text-base font-medium transition-colors text-primary-700 hover:text-primary-300">
                Learn more about how we&apos;re changing the world{" "}
                <span aria-hidden="true">&rarr;</span>{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
