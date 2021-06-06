import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-12 bg-primary-700">
      <h2 className="text-3xl font-semibold text-white">
        Want To Keep Updated?
        <p className="my-10 text-center text-white">TBD</p>
      </h2>

      <div className="flex items-center justify-center w-full py-3 text-white bg-primary-800">
        &copy; 2021 Operation Medical Care. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
