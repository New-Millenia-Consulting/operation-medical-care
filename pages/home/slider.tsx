import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

import Image1 from "../../public/images/home/about/photo-1.jpg";
import Image2 from "../../public/images/home/about/photo-2.jpg";

import Image3 from "../../public/images/Picture39.png";
import Image4 from "../../public/images/Picture4.png";
import Image5 from "../../public/images/Picture8.png";

type SliderImage = {
  src: StaticImageData;
  desc: string;
};

const SliderImages: SliderImage[] = [
  {
    src: Image5,
    desc: "",
  },
  {
    src: Image1,
    desc: "Adair Blanco travels to America to have a brain tumor treated",
  },
  {
    src: Image2,
    desc: "Dr. Joseph Peter, founder, at the International Food Festival fundraiser",
  },
  {
    src: Image4,
    desc: "",
  },
  {
    src: Image3,
    desc: "",
  },
];

const Slider = () => {
  return (
    <div className="grid py-24 md:px-10 bg-mainGreen place-items-center">
      <div className="flex flex-col items-center w-full md:max-w-2xl">
        <div className="grid px-2 md:px-6 place-items-center justified-center">
        <div className="ahmeds_class">
          <Link href="/about">
            <a className="xs:'text-center' text-4xl md:text-5xl font-medium transition-colors text-green-600 hover:text-primary-700">
              See more of our adventures!
            </a>
          </Link>
        </div>
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            className="w-full h-[400px] md:h-[500px]"
          >
            {SliderImages.map((e, i) => (
              <SwiperSlide className="flex px-0 pb-8 md:px-12" key={i}>
                <div className="relative w-screen h-full overflow-hidden rounded-md md:w-full">
                  <Image
                    className="w-full h-full"
                    src={e.src}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    alt={e.desc}
                  />
                  {e.desc.length > 0 && (
                    <div className="absolute bottom-0 flex items-center w-full h-10 px-3 bg-gray-900 border-t border-gray-400 bg-opacity-60">
                      <span
                        className="text-xs leading-none text-white"
                        style={{
                          textShadow: "rgb(255 255 255 / 30%) 2px 2px 3px",
                        }}
                      >
                        {e.desc}
                      </span>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
