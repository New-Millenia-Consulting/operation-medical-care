import React from "react";

import Link from "next/link";

const About = () => {
  return (
    <div className="px-10 py-16 bg-white">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-end">
          <div className="max-w-xl">
            <h3 className="text-primary-500">What Do We Do!</h3>
            <h1 className="mt-2 mb-6 text-3xl font-bold text-blue-gray-700">
              We Do Stuff In Belize
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <div className="h-6" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Link href="/DonatePage">
              <a className="px-5 py-2 mt-8 text-base btn-main">Donate!</a>
            </Link>
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
      </div>
    </div>
  );
};

export default About;
