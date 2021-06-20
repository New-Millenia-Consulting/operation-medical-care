import Image from "next/image";

import ImageMap from "../../public/images/home/mission/dreamstime_xxl_114898439.jpg";

export default function section2() {
  return (
    <div className="relative py-16 bg-white sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 w-full right-1/2 bg-gray-50 rounded-r-3xl lg:right-72" />
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
                    className="text-gray-200"
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
          <div className="relative max-w-md px-4 mx-auto border-0 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20 ">
            <div
              className="relative"
              style={{ width: "560px", height: "350px" }}
            >
              {/* Honestly I don't know why we need this absolute inset-0 */}
              {/* But if we don't have this wrapper then the image doesn't take up the entire height */}
              <div className="absolute inset-0 overflow-hidden shadow rounded-2xl">
                <Image
                  src={ImageMap}
                  objectFit="cover"
                  placeholder="blur"
                  alt="Belize on a map"
                />
                <div className="absolute inset-0 bg-primary-500 bg-opacity-30 mix-blend-multiply" />
                <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-primary-600 via-primary-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-md px-4 mx-auto border-0 sm:max-w-3xl sm:px-6 lg:px-0">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              On a mission To<br></br>Help Those In&nbsp;Need
            </h2>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">
                Every year, we spent 8 days traveling to remote villages in
                Belize. Our team of medical doctors, nurses, pharmacists,
                dietians, business owners, software engineers, and kind everday
                volunteers, treat over 900 patients and distribute much needed
                supplies to improve the lives of those in need. We not only
                provide vital medical necessities, but hats—to prevent glaucoma,
                toys, school supplies, and everyday items that would otherwise
                be&nbsp;unaffordable.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#"
              className="text-base font-medium transition-colors text-primary-600 hover:text-primary-300"
            >
              Learn more about how we&apos;re changing the world{" "}
              <span aria-hidden="true">&rarr;</span>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
