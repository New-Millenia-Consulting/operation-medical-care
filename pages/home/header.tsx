import { useEffect, MouseEvent, useRef, Fragment } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import smoothscroll from "smoothscroll-polyfill";

import { PhoneIcon, MailIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Transition } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Team", href: "/team", current: false },
  { name: "Contact", href: "/#contact", current: false },
];

const HeaderTopbar = () => {
  return (
    <div className="hidden w-full border-b border-gray-200 md:block">
      <div className="flex flex-row items-center justify-between max-w-6xl m-auto px-7">
        <ul className="flex flex-row h-full">
          <li className="flex flex-row items-center mr-3">
            {/* TODO Make this link a phone number */}
            <a
              href="tel:850-974-7400"
              className="text-gray-500 transition-colors hover:text-blue-600"
            >
              <PhoneIcon className="inline w-4 h-4" />
              <span>(850) 974-7400</span>
            </a>
          </li>
          <span className="block w-[1px] bg-gray-200 h-auto"></span>
          <li className="flex flex-row items-center ml-3">
            {/* TODO Make this link an email */}
            <a
              href="mailto:operationmedicalcare@gmail.com"
              className="text-gray-500 transition-colors hover:text-blue-600"
            >
              <MailIcon className="inline w-4 h-4 mr-1" />
              <span>operationmedicalcare@gmail.com</span>
            </a>
          </li>
        </ul>
        <div className="px-3 py-2 pr-0">
          <Link href="https://charity.gofundme.com/o/en/donate-widget/31604">
            <a className="btn-main">Donate!</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const router = useRouter();

  const supportsSmoothScrollingRef = useRef(false);

  useEffect(() => {
    smoothscroll.polyfill();

    const supportsSmoothScrolling = () => {
      const body = document.body;
      const scrollSave = body.style.scrollBehavior;
      body.style.scrollBehavior = "smooth";

      const hasSmooth = getComputedStyle(body).scrollBehavior === "smooth";
      body.style.scrollBehavior = scrollSave;

      return hasSmooth;
    };

    supportsSmoothScrollingRef.current = supportsSmoothScrolling();
  }, []);

  useEffect(() => {
    navigation.forEach((e) => (e.current = false));
    switch (router.pathname) {
      case "/":
        navigation[0].current = true;
        break;
      case "/about":
        navigation[1].current = true;
        break;
      case "/team":
        navigation[2].current = true;
        break;
    }
  }, [router]);

  const anchorLinkClick = (event: MouseEvent<HTMLElement>) => {
    if (!supportsSmoothScrollingRef.current) {
      const href = (event.target as HTMLElement).getAttribute("href").toString;

      if (href.length > 1) {
        document
          .querySelector((event.target as HTMLElement).getAttribute("href"))
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="fixed top-0 z-50 flex flex-col items-center justify-center w-full bg-white md:relative"
      style={{ boxShadow: "0px 5px 14.25px 0.75px rgba(12, 105, 184, 0.1)" }}
    >
      <HeaderTopbar />
      <Disclosure
        as="nav"
        className="relative flex flex-row items-center justify-center w-full max-w-6xl py-4 md:py-5 md:justify-between px-7"
      >
        {({ open }) => (
          <Fragment>
            <div className="absolute inset-y-0 flex items-center left-4 md:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block w-6 h-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <h1 className="text-2xl font-bold tracking-tighter ">
              <Link href="/">
                <a>
                  <span className="flex items-center justify-center">
                    <Image
                      className="scale-75 md:scale-100"
                      src="/images/home/plus.svg"
                      width={24}
                      height={24}
                      alt=""
                    />{" "}
                    <span className="ml-2 text-sm font-normal tracking-wide text-green-700 sm:text-base">
                      Operation Medical Care
                    </span>
                  </span>
                </a>
              </Link>
            </h1>
            <ul className="flex-row hidden space-x-5 md:flex">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className={` transition-colors ${
                    item.current
                      ? "text-primary-500 hover:text-primary-700"
                      : "text-gray-600 hover:text-primary-500"
                  }`}
                >
                  <a href={item.href} onClick={anchorLinkClick}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <Transition
              show={open}
              enter="transition-opacity duration-100 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className={`absolute inset-0 z-10 flex flex-col items-center w-full pb-4 bg-white md:hidden top-14 ${
                  open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-3"
                } transition`}
                style={{ height: "fit-content" }}
              >
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`
                    ${
                      item.current
                        ? "bg-blue-300 bg-opacity-30 border-l-4 border-r-4 border-blue-500"
                        : ""
                    }
                    block px-3 py-2 text-base font-medium w-full text-center`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Transition>
          </Fragment>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
