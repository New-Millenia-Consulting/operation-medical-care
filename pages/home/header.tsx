import { useEffect, MouseEvent, useRef, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import smoothscroll from "smoothscroll-polyfill";

import {MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Transition } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Team", href: "/team", current: false },
  { name: "Contact", href: "/#contact", current: false },
];

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
      className="fixed top-0 z-50 flex flex-col items-center justify-center w-full md:relative bg-secondGreen"
      style={{ boxShadow: "0px 5px 14.25px 0.75px rgba(12, 105, 184, 0.1)" }}
    >
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
            <h1 className="font-bold tracking-tighter ">
              <Link href="/">
                <a>
                  <span className="flex items-center justify-center -ml-20 xl:-ml-20 lg:-ml-0 md:-ml-0 sm:-ml-20  ">
                    <Image
                      className="lg:scale-100 sm:scale-25"
                      src="/images/home/plus.svg"
                      width={50}
                      height={50}
                      alt=""
                    />{" "}
                    <span className="ml-5 font-normal tracking-wide text-black text-2xl lg:text-5xl md:text-3xl sm:text-2xl xs:text-xl">
                      Operation Medical Care
                    </span>
                  </span>
                </a>
              </Link>
            </h1>
            <ul className="flex-row hidden space-x-5 md:flex text-xl">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className={` transition-colors ${
                    item.current
                      ? "text-primary-500 hover:text-primary-700"
                      : "text-gray-700 hover:text-primary-500"
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
                        ? "bg-blue-300 bg-opacity-30 border-l-4 border-r-4 border-mainGreen"
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
