import Link from "next/link";
import Image from "next/image";

import Picture32 from "../../public/images/Picture32.png";


export default function Hero() {
  return (
    <main className="bg-grey-100 relative grid w-full grid-cols-1 pt-12 pb-20 mx-auto text-center lg:grid-cols-2 max-w-7xl lg:py-16 lg:text-left isolate mt-14 md:mt-0">
      <div className="z-10 px-2 lg:px-16 sm:px-8">
        <h1 className="mt-8 text-3xl font-medium tracking-tight text-white lg:mb-6 lg:mt-0 lg:font-normal lg:text-green-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl">
          Providing Care <br />
          Changing Lives
        </h1>
        <p className="w-full max-w-md px-2 mx-auto my-12 text-base font-light leading-7 text-gray-100 lg:my-0 lg:px-0 lg:font-normal lg:text-green-700 sm:text-xl md:mt-5 md:max-w-xl lg:max-w-3xl">
        We are a non-profit organization made up of medical doctors, nurses, pharmacists,
        dietitians, business owners, software engineers, and everyday people all
        committed to bringing healthcare to the remote villages and towns of Belize.
        </p>
        {/* <div className="px-0 py-2 pr-0">
          <Link href="https://charity.gofundme.com/o/en/donate-widget/31604">
            <a className="btn-main">Donate!</a>
          </Link>
        </div> */}
      </div>
      <div className="absolute inset-0 z-0 grid w-full h-full lg:relative place-self-center lg:w-4/5 lg:min-h-[23rem]">
        <Image
          className="object-cover w-full h-full"
          src={Picture32}
          width={512}
          height={368}
          placeholder="blur"
          alt="Belizian mother and son"
        />
      </div>
      <div className="absolute inset-0 bg-gray-800 bg-opacity-80 lg:hidden"></div>
    </main>
  );
}