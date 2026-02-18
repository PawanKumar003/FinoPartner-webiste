import React from 'react';
import { IoCall } from 'react-icons/io5';

const navItem = ['Home', 'Offshoring', 'How to Hire', 'Review', 'Contact'];
function Header({ props, setIsDialogOpen }) {
  return (
    <div className="w-full flex items-center justify-around px-3 py-2 fixed top-0 bg-[#fff] w-full z-50">
      <div className="">
        <img
          className="md:w-[128px] w-[70px] h-full"
          src="https://thefinopartners.com/public/assets/images/TFP-The-fino-partner-logo.svg"
          alt="The Fino Partners"
        />
      </div>
      <div className="lg:block hidden">
        <ul className="flex items-center justify-around">
          {navItem.map((item, index) => (
            <li
              // id={`#${item}`}
              key={index}
              className="ml-20 text-xl cursor-pointer px-2 py-1 hover:text-blue-900 hover:font-semibold"
            >
              <a href={`#${item}`}> {item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden block w-full">
        <div className="flex px-0 w-full">
          <img
            className="md:w-[128px] w-[70px] h-full mr-3"
            src="https://thefinopartners.com/public/assets/images/TFP-The-fino-partner-logo.svg"
            alt="The Fino Partners"
          />
          {props ? (
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-slide-left-header">
                <span className="text-lg font-bold">{props}</span>
              </div>
            </div>
          ) : (
            // <div className="animate-slide-left-header flex">
            //   <p className="font-semibold w-full">{props}</p>
            // </div>
            <a href="tel:+18888850124" className="text-xl md:text-4xl text-blue-600">
              +1-888-885-0124
            </a>
          )}
        </div>
      </div>
      <div className="lg:block hidden">
        <button
          onClick={() => setIsDialogOpen(true)}
          // href="tel:+18888850124"
          className="text-xl md:text-lg px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white cursor-pointer flex items-center gap-2"
        >
          <span>
            <IoCall />
          </span>
          <span>Schedule a Call</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
