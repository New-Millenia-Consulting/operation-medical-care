import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="px-8 py-20 m-auto max-w-7xl">
      <h2
        className="text-4xl font-bold text-center text-blue-gray-800 md:text-left"
        id="team"
      >
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/peter-joseph.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              Joesph Peter, M.D.
            </h3>
            <h4 className="text-lg font-semibold text-center text-primary-500 md:text-left">
              Founder - Pediatrician
            </h4>
            <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
              During his 18 years as a pediatrician in Crestview, Dr. Joseph
              Peter has provided care to more than 7,000 children, regardless of
              their family’s ability to pay. He’s led nine medical mission trips
              to Belize, and worked with the Crestview Masonic Lodge to start
              the annual No Child Without Health Care fair.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/john-johnson.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              John Johnson, M.D.
            </h3>
            <h4 className="text-lg font-semibold text-center text-primary-500 md:text-left">
              Family Medicine
            </h4>
            <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/docs-streeter.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              Tom Streeter, O.D.
            </h3>
            <h4 className="text-lg font-semibold text-center text-primary-500 md:text-left">
              Optometrist
            </h4>
            <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/sharlene-cox.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              Sharlene Cox
            </h3>
            <h4 className="text-lg font-semibold text-center text-primary-500 md:text-left">
              Treasurer
            </h4>
            <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src="/images/home/team/bernadine-peter.jpg"
              width={176}
              height={256}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              Bernadine Peter
            </h3>
            <h4 className="text-lg font-semibold text-center text-primary-500 md:text-left">
              Health Coordinator & Dietician
            </h4>
            <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
