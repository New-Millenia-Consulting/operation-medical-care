import React from "react";

import Link from "next/link";

import { PhoneIcon, MailIcon } from "@heroicons/react/outline";

const HeaderTopbar = () => {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="flex flex-row items-center justify-between max-w-3xl m-auto ">
        <ul className="flex flex-row h-full">
          <li className="flex flex-row items-center mr-3">
            {/* TODO Make this link a phone number */}
            <a href="#">
              <PhoneIcon className="inline w-4 h-4 text-gray-500" />
              <span>+000123456789</span>
            </a>
          </li>
          <span className="block w-[1px] bg-gray-200 h-auto"></span>
          <li className="flex flex-row items-center ml-3">
            {/* TODO Make this link an email */}
            <a href="#">
              <MailIcon className="inline w-4 h-4 text-gray-500 mr-1 transform" />
              <span>nasarna@gmail.com</span>
            </a>
          </li>
        </ul>
        <div className="px-3 py-2">
          <Link href="/DonatePage">
            <a className="btn-main">Donate!</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
