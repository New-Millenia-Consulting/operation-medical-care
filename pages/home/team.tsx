import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="px-8 py-20 m-auto max-w-7xl">
      <h2
        className="text-4xl font-bold text-center text-blue-gray-800 md:text-left"
        id="team"
      >
        Meet Our Board
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
              Born in Crestview, Dr. John Johnson has always had a passion for
              medicine and health care. He graduated from Louisiana State
              University School of Medicine at Shreveport with a doctor of
              medicine degree. Dr. Johnson's postgraduate studies involved a
              three-year residency program in family practice at the University
              of Alabama (Tuscaloosa Family Practice). In 1988, he earned his
              board certification from the American Board of Family Practice.
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
              Dr. Thomas Streeter first moved to the Emerald Coast in 1988. He
              graduated from Niceville High School in 1993. He obtained his
              Bachelors in Biology from the University of Alabama-Birmingham in
              2000. From there, Dr. Tom pursued a Doctorate in Optometry, which
              he obtained in 2005 from the UAB School of Optometry.
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
              Peter is population health coordinator and registered dietitian at
              Val Verde Regional Medical Center in Del Rio, Texas. She
              previously served at Franklin Primary Health Center Inc. in
              Mobile, Ala., where she educated patients with diabetes, heart
              disease, and high blood pressure, in addition to securing
              nutrition and wellness grants for the underserved. For more than
              15 years, Peter served as the administrator and team leader of her
              husband’s pediatric practice in Crestview, Fla., where they
              provided care for thousands of uninsured and underserved children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
