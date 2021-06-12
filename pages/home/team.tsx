import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="px-8 py-20 m-auto max-w-7xl">
      <h2 className="text-4xl font-bold text-blue-gray-800">Meet Our Team</h2>
      <div className="grid grid-cols-2 gap-12 mt-10">
        <div className="flex flex-row">
          <div className="h-64 bg-red-500 rounded-md shadow-md w-44"></div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-gray-800">Joe Schmoe</h3>
            <h4 className="text-lg font-semibold text-primary-500">
              CEO & Founder
            </h4>
            <p className="flex-1 mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex flex-row space-x-4">
              <a
                href="#"
                className="transition-opacity opacity-50 hover:opacity-30"
              >
                <Image
                  src="/images/linkedin.svg"
                  height={24}
                  width={24}
                ></Image>
              </a>
              <a
                href="#"
                className="transition-opacity opacity-50 hover:opacity-30"
              >
                <Image src="/images/twitter.svg" height={24} width={24}></Image>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="h-64 bg-red-500 rounded-md shadow-md w-44"></div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-gray-800">Joe Schmoe</h3>
            <h4 className="text-lg font-semibold text-primary-500">
              CEO & Founder
            </h4>
            <p className="flex-1 mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex flex-row space-x-4">
              <a
                href="#"
                className="transition-opacity opacity-50 hover:opacity-30"
              >
                <Image
                  src="/images/linkedin.svg"
                  height={24}
                  width={24}
                ></Image>
              </a>
              <a
                href="#"
                className="transition-opacity opacity-50 hover:opacity-30"
              >
                <Image src="/images/twitter.svg" height={24} width={24}></Image>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="h-64 bg-red-500 rounded-md shadow-md w-44"></div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-gray-800">Joe Schmoe</h3>
            <h4 className="text-lg font-semibold text-primary-500">
              CEO & Founder
            </h4>
            <p className="flex-1 mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex flex-row space-x-4">
              <a
                href="#"
                className="transition-opacity opacity-50 hover:opacity-30"
              >
                <Image
                  src="/images/linkedin.svg"
                  height={24}
                  width={24}
                ></Image>
              </a>
              <a
                href="#"
                className="transition-opacity opacity-50 hover:opacity-30"
              >
                <Image src="/images/twitter.svg" height={24} width={24}></Image>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="h-64 bg-red-500 rounded-md shadow-md w-44"></div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-gray-800">Joe Schmoe</h3>
            <h4 className="text-lg font-semibold text-primary-500">
              CEO & Founder
            </h4>
            <p className="flex-1 mt-3 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex flex-row space-x-4">
              <a
                href="#"
                className="transition-opacity opacity-50 hover:opacity-30"
              >
                <Image
                  src="/images/linkedin.svg"
                  height={24}
                  width={24}
                ></Image>
              </a>
              <a
                href="#"
                className="transition-opacity opacity-50 hover:opacity-30"
              >
                <Image src="/images/twitter.svg" height={24} width={24}></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
