import Head from "next/head";
import Image from "next/image";

import Header from "./home/header";
import Footer from "./home/footer";

import Picture46 from "../public/images/Picture46.png";

import ImagePeter from "../public/images/home/team/peter-joseph.jpg";
import ImageJohnson from "../public/images/home/team/john-johnson.jpg";
import ImageIndu from "../public/images/Dr.Indu2.png";
import ImageSharlene from "../public/images/home/team/sharlene-cox.jpg";
import ImageBernadine from "../public/images/Peter.png";
import ImageSogunro from"../public/images/sogunro-1-scaled.jpg";
import ImageVikram from"../public/images/vikram-bcrop.png";
import ImageNanda from "../public/images/nanda.png";
import ImageOkpalike from"../public/images/Okpalike.png";
import ImagePotts from"../public/images/Potts.png";
import ImageHardy from"../public/images/Hardy.png";
import ImagePhillip from"../public/images/Phillip.png";

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Operation Medical Care</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className="relative grid w-full py-24 md:py-36 place-items-center mt-14 md:mt-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={Picture46}
            placeholder="blur"
            objectFit="cover"
            alt=""
            layout="fill"
            objectPosition="center 25%"
          />
        </div>
        <div
          className="absolute inset-0 bg-gray-900 bg-opacity-80"
          style={{ zIndex: 1 }}
        />
        <h1
          className="text-4xl font-normal tracking-normal text-white sm:text-5xl md:text-6xl"
          style={{ zIndex: 2 }}
        >
          Our Team
        </h1>
        <div className="w-20 h-px my-6 bg-white" style={{ zIndex: 2 }}></div>
        <p
          className="px-5 text-lg text-center text-gray-200"
          style={{ zIndex: 2 }}
        >
          Meet our awesome team of physicians,
          <br />
          nurses, and virtuous volunteers from all over!
        </p>
      </div>
      <div className="pb-16">
        {/* Leadership */}
        <div className="px-8 py-20 pb-6 m-auto max-w-7xl xl:max-w-screen-2xl">
          <h2
            className="text-3xl font-bold text-center md:text-4xl text-blue-gray-800"
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
                <h4 className="text-lg font-semibold text-center text-primary-700 md:text-left">
                  Founder - Pediatrician
                </h4>
                <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
                  During his 18 years as a pediatrician in Crestview, Dr. Joseph
                  Peter has provided care to more than 7,000 children,
                  regardless of their family’s ability to pay. He’s led nine
                  medical mission trips to Belize, and worked with the Crestview
                  Masonic Lodge to start the annual No Child Without Health Care
                  fair.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-0 md:flex-row md:items-start">
              <div className="overflow-hidden rounded-md shadow-md w-36 h-52 lg:w-44 lg:h-64">
                <Image
                  src={ImageSogunro}
                  width={176}
                  height={256}
                  objectFit="cover"
                  placeholder="blur"
                  alt="Headshot image of Olutayo Sogunro"
                />
              </div>
              <div className="flex flex-col flex-1 py-1 md:ml-8">
                <h3 className="text-xl font-bold text-center text-gray-800 md:text-left">
                  Olutayo Sogunro
                </h3>
                <h4 className="text-lg font-semibold text-center text-primary-700 md:text-left">
                Gen. Surgery
                </h4>
                <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
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
                <h4 className="text-lg font-semibold text-center text-primary-700 md:text-left">
                  Family Medicine
                </h4>
                <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
                  Born in Crestview, Dr. John Johnson has always had a passion
                  for medicine and health care. He graduated from Louisiana
                  State University School of Medicine at Shreveport with a
                  doctor of medicine degree. Dr. Johnson&apos;s postgraduate
                  studies involved a three-year residency program in family
                  practice at the University of Alabama (Tuscaloosa Family
                  Practice). In 1988, he earned his board certification from the
                  American Board of Family Practice.
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
                <h4 className="text-lg font-semibold text-center text-primary-700 md:text-left">
                Fundraiser, P.C.P.
                </h4>
                <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
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
                <h4 className="text-lg font-semibold text-center text-primary-700 md:text-left">
                  Treasurer
                </h4>
                <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
                  Sharlene Cox has served as the Treasurer of Oepration Medical
                  Care for 13 years with much success. She helps to raise the
                  necessary funds for the Operation Medical Care Team to travel
                  to Belive for annual mission trips, with this next trip being
                  her&nbsp;9th.
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
                <h4 className="text-lg font-semibold text-center text-primary-700 md:text-left">
                  Health Coordinator, Dietician
                </h4>
                <p className="flex-1 mt-3 text-center text-gray-600 md:text-left">
                  Peter is population health coordinator and registered
                  dietitian at Val Verde Regional Medical Center in Del Rio,
                  Texas. She previously served at Franklin Primary Health Center
                  Inc. in Mobile, Ala., where she educated patients with
                  diabetes, heart disease, and high blood pressure, in addition
                  to securing nutrition and wellness grants for the underserved.
                  For more than 15 years, Peter served as the administrator and
                  team leader of her husband’s pediatric practice in Crestview,
                  Fla., where they provided care for thousands of uninsured and
                  underserved children.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Doctors */}
        <div className="px-8 py-20 pb-6 m-auto max-w-7xl xl:max-w-screen-2xl">
          <h2
            className="text-3xl font-bold text-center md:text-4xl text-blue-gray-800"
            id="team"
          >
            Meet Our Doctors
          </h2>
          <div className="w-10 h-0.5 mx-auto mt-4 mb-10 bg-gray-500" />
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
          <li>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-full mx-auto shadow-md w-36 h-36 lg:w-56 lg:h-56">
                  <Image
                    src={ImageSogunro}
                    width={256}
                    height={256}
                    objectFit="cover"
                    placeholder="blur"
                    alt="Headshot image of Dr. Sogunro"
                  />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Dr. Olutayo Sogunro</h3>
                    <p className="text-center text-primary-600">
                      Gen. Surgery - Del Rio, TX
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-full mx-auto shadow-md w-36 h-36 lg:w-56 lg:h-56">
                  <Image
                    src={ImageOkpalike}
                    width={256}
                    height={256}
                    objectFit="cover"
                    placeholder="blur"
                    alt="Headshot image of Dr. Okpalike"
                  />
                </div>
                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3 className="text-center">Dr. Martin Okpalike</h3>
                      <p className="text-center text-primary-600">
                        Pediatrician - Decatur, IL
                      </p>
                    </div>
                  </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-full mx-auto shadow-md w-36 h-36 lg:w-56 lg:h-56">
                  <Image
                    src={ImageHardy}
                    width={256}
                    height={256}
                    objectFit="cover"
                    placeholder="blur"
                    alt="Headshot image of Dr. Hardy"
                  />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Dr. Marsha Hardy</h3>
                    <p className="text-center text-primary-600">
                      Dentist - Decatur, IL
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-full mx-auto shadow-md w-36 h-36 lg:w-56 lg:h-56">
                  <Image
                    src={ImagePotts}
                    width={256}
                    height={256}
                    objectFit="cover"
                    placeholder="blur"
                    alt="Headshot image of Dr. Potts"
                  />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Dr. Sam Potts</h3>
                    <p className="text-center text-primary-600">
                      Podiatrist - Decatur, IL
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-full mx-auto shadow-md w-36 h-36 lg:w-56 lg:h-56">
                  <Image
                    src={ImagePhillip}
                    width={256}
                    height={256}
                    objectFit="cover"
                    placeholder="blur"
                    alt="Headshot image of Dr. Okpalike"
                  />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Dr. Alexander Phillip</h3>
                    <p className="text-center text-primary-600">
                      Er. Surgery - Fort Myers, FL
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Nurses/Volunteers */}
        <div className="px-8 py-20 pb-6 m-auto max-w-7xl xl:max-w-screen-2xl">
          <h2
            className="text-3xl font-bold text-center md:text-4xl text-green-900"
            id="team"
          >
            Meet Our Nurses and Volunteers
          </h2>
          <div className="w-20 h-0.5 mx-auto mt-3 mb-2 bg-green-500" />
          <h3
            className="text-center text-green-700"
          >
            These are the wonderful people who are always ready to help <br /> us tend to those in need by providing them with that extra care and love
          </h3>

          <div className="w-20 h-0.5 mx-auto mt-4 mb-10 bg-green-500" />
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl">
            <li>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-full mx-auto shadow-md w-36 h-36 lg:w-56 lg:h-56">
                  <Image
                    src={ImageNanda}
                    width={256}
                    height={256}
                    objectFit="cover"
                    placeholder="blur"
                    alt="Headshot image of Nanda"
                  />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Nanda Doody</h3>
                    <p className="text-center text-primary-600">
                      Nurse - Nanda Doody, FL
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
              <div className="overflow-hidden rounded-full mx-auto shadow-md w-36 h-36 lg:w-56 lg:h-56">
                  <Image
                    src={ImageVikram}
                    width={256}
                    height={300}
                    objectFit="cover"
                    placeholder="blur"
                    alt="Headshot image of Nanda"
                  />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Vikram Kumar</h3>
                    <p className="text-center text-primary-600">
                      Student - Alpharetta, GA
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
