import Link from "next/link";

import { ChevronRightIcon } from "@heroicons/react/outline";

const About = () => {
  return (
    <div className="px-10 py-16 bg-blue-gray-50">
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
