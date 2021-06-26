import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

import Image1 from "../../public/images/home/about/photo-1.jpg";
import Image2 from "../../public/images/home/about/photo-2.jpg";

import Image3 from "../../public/images/Picture1-crop.png";
import Image4 from "../../public/images/Picture4.png";
import Image5 from "../../public/images/Picture8.png";

type SliderImage = {
  src: StaticImageData;
  desc: string;
};

const SliderImages: SliderImage[] = [
  {
    src: Image3,
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
    src: Image5,
    desc: "",
  },
];

const Slider = () => {
  return (
    <div className="grid py-24 md:px-10 bg-blue-gray-50 place-items-center">
      <div className="max-w-3xl">
        <div className="grid px-2 md:px-6 md:pr-0 place-items-center">
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            className="w-full h:h-[300px] md:h-[500px]"
          >
            {SliderImages.map((e, i) => (
              <SwiperSlide className="flex px-12 pb-8" key={i}>
                <div className="relative w-full h-full overflow-hidden rounded-md">
                  <Image
                    className="w-full h-full"
                    src={e.src}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
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
