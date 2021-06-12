import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import { ChevronRightIcon } from "@heroicons/react/outline";

import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

const About = () => {
  return (
    <div className="px-10 py-32 bg-blue-gray-50">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-end">
          <div className="max-w-xl">
            <h3 className="font-medium text-primary-500 text-opacity-80">
              What Do We Do?
            </h3>
            <h1 className="mb-6 text-3xl font-bold text-blue-gray-700">
              Providing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700">
                Medical Care
              </span>
              <br />
              Distributing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-pink-700">
                Supplies
              </span>
            </h1>
            <p className="text-gray-600">
              Every year, we spent 8 days traveling to remote villages in
              Belize. Our team of medical doctors, nurses, pharmacists,
              dietians, business owners, software engineers, and kind everday
              volunteers, treat over 900 patients and distribute much needed
              supplies to improve the lives of those in need. We not only
              provide vital medical necessities, but hats—to prevent glaucoma,
              toys, school supplies, and everyday items that would otherwise be
              unaffordable.
            </p>
            <div className="flex flex-row items-center mt-8">
              <Link href="/DonatePage">
                <a className="px-5 py-2 text-base btn-main">Donate!</a>
              </Link>

              <span className="mx-5 font-medium text-gray-700">or</span>
              <Link href="#">
                <span className="flex items-center text-lg font-medium text-primary-500 hover:cursor-pointer">
                  Get Involved!{" "}
                  <ChevronRightIcon className="inline w-5 h-5 ml-2 animate-bounce-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid px-6 pr-0 place-items-center">
          <Swiper
            navigation={true}
            className="w-full h-full"
            style={{ height: "360px" }}
          >
            <SwiperSlide className="flex px-12">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-1.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 flex items-center w-full h-10 px-3 bg-gray-900 border-t border-gray-400 bg-opacity-60">
                  <span
                    className="text-xs leading-none text-white"
                    style={{ textShadow: "rgb(255 255 255 / 30%) 2px 2px 3px" }}
                  >
                    Adair Blanco travels to America to have a brain tumor
                    treated
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex px-12">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-2.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 flex items-center w-full h-10 px-3 bg-gray-900 border-t border-gray-400 bg-opacity-60">
                  <span
                    className="text-xs leading-none text-white"
                    style={{ textShadow: "rgb(255 255 255 / 30%) 2px 2px 3px" }}
                  >
                    Dr. Joseph Peter, founder, at the International Food
                    Festival fundraiser
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex px-12">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-3.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 flex items-center w-full h-10 px-3 bg-gray-900 border-t border-gray-400 bg-opacity-60">
                  <span
                    className="text-xs leading-none text-white"
                    style={{ textShadow: "rgb(255 255 255 / 30%) 2px 2px 3px" }}
                  >
                    Volunteer Kelley Humprhey raising money at the International
                    Food Festival
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex px-12">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-4.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 flex items-center w-full h-10 px-3 bg-gray-900 border-t border-gray-400 bg-opacity-60">
                  <span
                    className="text-xs leading-none text-white"
                    style={{ textShadow: "rgb(255 255 255 / 30%) 2px 2px 3px" }}
                  >
                    300+ people attending the International Food Festival
                    fundraiser
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex px-12">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-5.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 flex items-center w-full h-10 px-3 bg-gray-900 border-t border-gray-400 bg-opacity-60">
                  <span
                    className="text-xs leading-none text-white"
                    style={{ textShadow: "rgb(255 255 255 / 30%) 2px 2px 3px" }}
                  >
                    Volunteers serving peacb barbecue to raise money for
                    Operation Medical Care
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex px-12">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-6.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute bottom-0 flex items-center w-full h-10 px-3 bg-gray-900 border-t border-gray-400 bg-opacity-60">
                  <span
                    className="text-xs leading-none text-white"
                    style={{ textShadow: "rgb(255 255 255 / 30%) 2px 2px 3px" }}
                  >
                    The International Food Festival helped raise $3,340 for
                    2016's Operational Medical Care mission
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
