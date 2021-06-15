import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import { ChevronRightIcon } from "@heroicons/react/outline";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const About = () => {
  return (
    <div className="py-32 md:px-10 bg-blue-gray-50" id="about">
      <div className="grid grid-cols-1 gap-16 justify-content: center lg:grid-cols-2 lg:gap-0">
       
        <div className="grid px-2 md:px-6 md:pr-0 place-items-center">
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
            style={{ height: "360px" }}
          >
            <SwiperSlide className="flex px-12 pb-8">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-1.jpg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
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
            <SwiperSlide className="flex px-12 pb-8">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-2.jpg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
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
            <SwiperSlide className="flex px-12 pb-8">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-3.jpg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
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
            <SwiperSlide className="flex px-12 pb-8">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-4.jpg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
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
            <SwiperSlide className="flex px-12 pb-8">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-5.jpg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
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
            <SwiperSlide className="flex px-12 pb-8">
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <Image
                  className="w-full h-full"
                  src="/images/home/about/photo-6.jpg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
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
