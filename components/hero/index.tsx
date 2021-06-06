import React from "react";

import Link from "next/link";
import Image from "next/image";

import { PhoneIcon } from "@heroicons/react/outline";

const Hero = () => {
  return (
    <section
      className="relative grid w-full grid-cols-2"
      style={{ height: "90vh", minHeight: "40rem" }}
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-6xl font-semibold text-gray-600">
            Some tagline <br />{" "}
            <span className="font-bold text-blue-500">Word</span>
          </h1>
          <p className="max-w-md mt-10">
            Description underneath explaining our mission lorem ipsum
            mitochondria is the powerhouse of the cell beta-oxidation is the
            process in which fatty acids are broken down into acetyl-CoA
          </p>
          <div className="flex flex-col items-center mt-10 space-y-3">
            <Link href="/DonatePage">
              <a className="px-5 py-2 text-xl btn-main">Donate!</a>
            </Link>
            <p className="text-gray-500">or</p>
            <a href="#" className="text-gray-800 hover:text-primary-500">
              <PhoneIcon className="inline w-5 h-5 mr-2 " />
              <span className="text-gray-600">
                Call at <span className="font-semibold">+000123456789</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <p
          className="grid bg-red-100 place-items-center"
          style={{ width: "30rem", height: "30rem" }}
        >
          Placeholder
        </p>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-full"
        style={{ zIndex: -1 }}
      >
        <Image
          src="/images/home/shape.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left bottom"
        />
      </div>
    </section>
  );
};

export default Hero;
