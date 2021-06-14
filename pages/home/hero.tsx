import Link from "next/link";
import Image from "next/image";

import { PhoneIcon } from "@heroicons/react/outline";

const Hero = () => {
  return (
    <section
      className="relative"
      style={{ height: "70vh", minHeight: "55rem" }}
    >
      <div className="relative grid w-full h-full grid-cols-1 m-auto lg:grid-cols-2 max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-5xl font-medium text-gray-600">
              8 Days in Belize <br />{" "}
              <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-600">
                Changing Lives
              </span>
            </h1>
            <p className="max-w-md mt-10 text-gray-600">
              A group of medical doctors, nurses, pharmacists, dietians,
              business owners, software engineers, and everyday people all
              commmitted to bringing healthcare to the remote villages of Belize
            </p>
            <div className="flex flex-col items-center mt-10 space-y-3">
              <Link href="https://charity.gofundme.com/o/en/donate-widget/31604">
                <a className="px-5 py-2 text-xl btn-main">Donate!</a>
              </Link>
              <p className="text-gray-500">or</p>
              <a
                href="tel:850-974-7400"
                className="text-gray-800 transition hover:text-primary-500 group"
              >
                <PhoneIcon className="inline w-5 h-5 mr-1 transform translate-y-[-1px]" />
                <span className="text-gray-600 group-hover:text-primary-500">
                  Call at <span className="font-semibold">(850) 974-7400</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden place-items-center isolate lg:grid">
          <div
            className="absolute z-30 grid overflow-hidden transform bg-white border border-gray-200 rounded-md shadow-lg -rotate-6 place-items-center"
            style={{ width: "500px", height: "700px" }}
          >
            <Image
              src="/images/home/hero/crestview-bulletin-1-cropped.jpg"
              alt="Crestview doctor coordinates Belize patient's tumor treatment"
              width={500}
              height={700}
            />
            <div
              className="absolute top-0 left-0 w-full h-full opacity-60"
              style={{
                backgroundImage: "url('/images/home/hero/rice-paper-2.png')",
              }}
            />
          </div>
          <div
            className="absolute z-20 grid overflow-hidden transform rotate-0 bg-white border border-gray-200 rounded-md shadow-lg place-items-center"
            style={{ width: "500px", height: "700px" }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full opacity-60"
              style={{
                backgroundImage: "url('/images/home/hero/rice-paper-2.png')",
              }}
            />
          </div>
          <div
            className="absolute z-10 grid overflow-hidden transform bg-white border border-gray-200 rounded-md shadow-lg rotate-6 place-items-center"
            style={{ width: "500px", height: "700px" }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full opacity-60"
              style={{
                backgroundImage: "url('/images/home/hero/rice-paper-2.png')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
