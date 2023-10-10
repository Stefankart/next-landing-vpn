import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
<div className="bg-gray-300 pt-44 pb-24">
  <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
    <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
    <div className="col-start-1 col-end-2 flex items-center">
  <p className="text-black font-bold text-xl">
    Legal <span className="text-gradient bg-gradient-to-r from-blue-500 to-blue-700">Ally</span>
  </p>
</div>
      <p className="mb-4">
        <strong className="font-medium">Legal-Ally</strong> Expert Legal Solutions, Exceptional Results.
      </p>
      <div className="flex w-full mt-2 mb-8 -mx-2">
        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
          <Facebook className="h-6 w-6" />
        </div>
        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
          <Twitter className="h-6 w-6" />
        </div>
        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
          <Instagram className="h-6 w-6" />
        </div>
      </div>
      <p className="text-gray-400">©{new Date().getFullYear()} - Legal-Ally</p>
    </div>
    <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
      <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
      <ul className="text-black-500">
        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
          Download{" "}
        </li>
        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
          Pricing{" "}
        </li>
        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
          Blog{" "}
        </li>
      </ul>
    </div>
    <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
      <p className="text-black-600 mb-4 font-medium text-lg">Contact Us</p>
      <ul className="text-black-500">
        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
          Email: contact@legal-ally.com
        </li>
        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
          Phone: +1 (123) 456-7890
        </li>
        <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
          Address: 123 Main St, City, Country
        </li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Footer;
