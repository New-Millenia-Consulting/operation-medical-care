import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

import Image1 from "../../public/images/home/about/photo-1.jpg";
import Image2 from "../../public/images/home/about/photo-2.jpg";
import Image3 from "../../public/images/home/about/photo-3.jpg";
import Image4 from "../../public/images/home/about/photo-4.jpg";
import Image5 from "../../public/images/home/about/photo-5.jpg";
import Image6 from "../../public/images/home/about/photo-6.jpg";

type SliderImage = {
  src: StaticImageData;
  desc: string;
};

const SliderImages: SliderImage[] = [
  {
    src: Image1,
    desc: "Adair Blanco travels to America to have a brain tumor treated",
  },
  {
    src: Image2,
    desc: "Dr. Joseph Peter, founder, at the International Food Festival fundraiser",
  },
  {
    src: Image3,
    desc: "Volunteer Kelley Humprhey raising money at the International Food Festival",
  },
  {
    src: Image4,
    desc: "300+ people attending the International Food Festival fundraiser",
  },
  {
    src: Image5,
    desc: "Volunteers serving peach barbecue to raise money for Operation Medical Care",
  },
  {
    src: Image6,
    desc: "The International Food Festival helped raise $3,340 for 2016's Operational Medical Care mission",
  },
];

const About = () => {
  return (
    <div
      className="grid py-24 md:px-10 bg-blue-gray-50 place-items-center"
      id="about"
    >
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
