import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

import Header from "./home/header";
import Footer from "./home/footer";

import Picture46 from "../public/images/Picture46.png";

import ImagePeter from "../public/images/home/team/peter-joseph.jpg";
import ImageJohnson from "../public/images/home/team/john-johnson.jpg";
import ImageStreeter from "../public/images/home/team/docs-streeter.jpg";
import ImageSharlene from "../public/images/home/team/sharlene-cox.jpg";
import ImageBernadine from "../public/images/home/team/bernadine-peter.jpg";

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
                <h4 className="text-lg font-semibold text-center text-primary-500 md:text-left">
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
                <h4 className="text-lg font-semibold text-center text-primary-500 md:text-left">
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
                  src={ImageStreeter}
                  width={176}
                  height={256}
                  objectFit="cover"
                  placeholder="blur"
                  alt="Headshot image of Tom Streeter, O.D."
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
                  Dr. Thomas Streeter first moved to the Emerald Coast in 1988.
                  He graduated from Niceville High School in 1993. He obtained
                  his Bachelors in Biology from the University of
                  Alabama-Birmingham in 2000. From there, Dr. Tom pursued a
                  Doctorate in Optometry, which he obtained in 2005 from the UAB
                  School of Optometry.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start">
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
                <h4 className="text-lg font-semibold text-center text-primary-500 md:text-left">
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
                <h4 className="text-lg font-semibold text-center text-primary-500 md:text-left">
                  Health Coordinator & Dietician
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
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
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
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Dr. Indu Christopher</h3>
                    <p className="text-center text-primary-600">
                      Geriatrician - Crestview, FL
                    </p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:joshua93@cox.net">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Dr. Sam Potts</h3>
                    <p className="text-center text-primary-600">
                      Podiatrist - Decatur, IL
                    </p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:Psampotts@aol.com">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:217-620-7721">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Phone Number</span>
                          <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
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
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Dr. Olutayo Sogunro</h3>
                    <p className="text-center text-primary-600">
                      Gen. Surgery - Del Rio, TX
                    </p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:Olutayosogunro@gmail.com">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:860-970-2870">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Phone Number</span>
                          <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Nurses/Volunteers */}
        <div className="px-8 py-20 pb-6 m-auto max-w-7xl xl:max-w-screen-2xl">
          <h2
            className="text-3xl font-bold text-center md:text-4xl text-blue-gray-800"
            id="team"
          >
            Meet Our Nurses & Volunteers
          </h2>
          <div className="w-10 h-0.5 mx-auto mt-4 mb-10 bg-gray-500" />
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Nanda Doody</h3>
                    <p className="text-center text-primary-600">
                      Nurse - Nanda Doody, FL
                    </p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:nandadoody@yahoo.com">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:850-582-8004">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Phone Number</span>
                          <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Nicole Doody</h3>
                    <p className="text-center text-primary-600">
                      Nurse - Huntsville, AL
                    </p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:doodynicole@yahoo.com">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:850-398-2753">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Phone Number</span>
                          <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Cassandra Morales</h3>
                    <p className="text-center text-primary-600">
                      Nurse - Camden, NJ
                    </p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:Cas@morales-studio.com">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:862-221-0267">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Phone Number</span>
                          <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Nikki Tara</h3>
                    <p className="text-center text-primary-600">
                      Student - UT Austin
                    </p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:Nisha859@gmail.com">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:507-269-3668">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Phone Number</span>
                          <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Meghan Kapur</h3>
                    <p className="text-center text-primary-600">
                      Student - Rice University
                    </p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:Meghankapur@hotmail.com">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:850-490-9091">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Phone Number</span>
                          <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Vikram Kumar</h3>
                    <p className="text-center text-primary-600">
                      Student - Alpharetta, GA
                    </p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:20vikkumar@gmail.com">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:678-815-9712">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Phone Number</span>
                          <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Marcia Hardy</h3>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:mahardydds@sbcglobal.net">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Martin</h3>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <Link href="mailto:martinokp@hotmail.com">
                        <a className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Email</span>
                          <MailIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <div className="w-40 h-40 mx-auto bg-red-500 rounded-full xl:w-56 xl:h-56" />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-center">Manda Dooley</h3>
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
