import Image from "next/image";
import Link from "next/link";

import ImagePeter from "../../public/images/home/team/peter-joseph.jpg";
import ImageJohnson from "../../public/images/home/team/john-johnson.jpg";
import ImageIndu from "../../public/images/Dr.Indu2.png";
import ImageSharlene from "../../public/images/home/team/sharlene-cox.jpg";
import ImageBernadine from "../../public/images/home/team/bernadine-peter.jpg";
import ImageSogunro from"../../public/images/sogunro-1-scaled.jpg";

const TeamSection = () => {
  return (
    <div className="px-0 py-20 pb-16 m-auto max-w-7xl">
      <h2
        className="text-4xl font-bold text-center hover:text-primary-700 text-blue-gray-800 lg:text-center md:text-left"
        id="team"
      >
        Meet Our Leadership
      </h2>
      <div className="w-10 h-0.5 mx-auto mt-4 mb-10 bg-gray-500" />
      <div className="grid grid-cols-1 gap-16 mt-10 lg:grid-cols-2">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src={ImagePeter}
              width={176}
              height={256}
              objectFit="cover"
              placeholder="blur"
              alt="Headshot image of Dr. Joseph Peter, M.D."
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              Joesph Peter, M.D.
            </h3>
            <h4 className="text-lg font-semibold text-center text-green-700 md:text-left">
              Founder - Pediatrician
            </h4>
            <p className="flex-1 mt-3 ml-5 mr-5 xl:ml-0 lg:ml-0 md:ml-0 text-center text-gray-600 md:text-left">
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
              src={ImageSogunro}
              width={176}
              height={256}
              objectFit="cover"
              placeholder="blur"
              alt="Headshot image of Dr. Sogunro"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              Olutayo Sogunro
            </h3>
            <h4 className="text-lg font-semibold text-center text-green-700 md:text-left">
              Gen. Surgery
            </h4>
            <p className="flex-1 mt-3 ml-5 mr-5 xl:ml-0 lg:ml-0 md:ml-0 text-center text-gray-600 md:text-left">
            Olutayo was born in Lagos, Nigeria and grew up in both Edmonton, Alberta,
            Canada and New Britain, CT. She graduated cum laude from Central Connecticut 
            State University in New Britain, CT with her B.S. in Biology and minor in 
            Psychology. She completed her general surgery training in Toledo, OH. She 
            currently practices as an Acute Care and Trauma Surgeon back in her home 
            state of Connecticut.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src={ImageJohnson}
              width={176}
              height={256}
              objectFit="cover"
              placeholder="blur"
              alt="Headshot image of Dr. John Johnson, M.D."
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              John Johnson, M.D.
            </h3>
            <h4 className="text-lg font-semibold text-center text-green-700 md:text-left">
              Family Medicine
            </h4>
            <p className="flex-1 mt-3 ml-5 mr-5 xl:ml-0 lg:ml-0 md:ml-0 text-center text-gray-600 md:text-left">
              Born in Crestview, Dr. John Johnson has always had a passion for
              medicine and health care. He graduated from Louisiana State
              University School of Medicine at Shreveport with a doctor of
              medicine degree. Dr. Johnson&apos;s postgraduate studies involved
              a three-year residency program in family practice at the
              University of Alabama (Tuscaloosa Family Practice). In 1988, he
              earned his board certification from the American Board of Family
              Practice.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src={ImageIndu}
              width={176}
              height={256}
              objectFit="cover"
              placeholder="blur"
              alt="Headshot image of Tom Streeter, O.D."
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              Indumathi Christopher
            </h3>
            <h4 className="text-lg font-semibold text-center text-green-700 md:text-left">
              Fundraiser & P.C.P.
            </h4>
            <p className="flex-1 mt-3 ml-5 mr-5 xl:ml-0 lg:ml-0 md:ml-0 text-center text-gray-600 md:text-left">
            Dr. Christopher is a family practitioner and geriatrician who plays
            a pivotal role in OMC from seeing patients to fundraising. She works 
            very hard to gets businesses and families to support the wonderful
            medical work. She also finds dedicated nurses and volunteers to make
            the mission successful. She is instrumental in fundraising and 
            providing medical care, organization and leadership!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-start md:mt-[48px]">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src={ImageSharlene}
              width={176}
              height={256}
              objectFit="cover"
              placeholder="blur"
              alt="Headshot image of Sharlene Cox, Treasurer"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              Sharlene Cox
            </h3>
            <h4 className="text-lg font-semibold text-center text-green-700 md:text-left">
              Treasurer
            </h4>
            <p className="flex-1 mt-3 ml-5 mr-5 xl:ml-0 lg:ml-0 md:ml-0 text-center text-gray-600 md:text-left">
              Sharlene Cox has served as the Treasurer of Oepration Medical Care
              for 13 years with much success. She helps to raise the necessary
              funds for the Operation Medical Care Team to travel to Belive for
              annual mission trips, with this next trip being her&nbsp;9th.
              {/* <br></br> */}
              {/* <br></br> */}
              {/* Cox has played an important role in many Crestview, Florida
              organizations over the years such as: 1895 Society Chairman at
              GFWC Florida, Youth Pillar Chairman at the Exchange Club of
              Crestview as well as the President of the Exchange Club of
              Crestview, and Treasurer of GFWC Woman’s Club of Crestview. Cox
              also owns her own catering business, Meme’s Specialities, which
              has delivered homemade catering to all size groups and functions
              for over a decade. */}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-0 md:flex-row md:items-start md:mt-[48px]">
          <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
            <Image
              src={ImageBernadine}
              width={176}
              height={256}
              objectFit="cover"
              placeholder="blur"
              alt="Headshot image of Bernadine Peters, Health Coordinator and Dietician"
            />
          </div>
          <div className="flex flex-col flex-1 py-1 md:ml-8">
            <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
              Bernadine Peter
            </h3>
            <h4 className="text-lg font-semibold text-center text-green-700 md:text-left">
              Health Coordinator & Dietician
            </h4>
            <p className="flex-1 mt-3 ml-5 mr-5 xl:ml-0 lg:ml-0 md:ml-0 text-center text-gray-600 md:text-left">
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
        <div className="place-self-center">
          <Link href="/team">
            <a className="text-lg font-medium transition-colors text-green-500 hover:text-primary-700">
              See the rest of our team!{" "}
              <span aria-hidden="true" className="ml-1">
                &rarr;
              </span>{" "}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
