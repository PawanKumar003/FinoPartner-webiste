import React from "react";

const navItem = ["Home", "Pricing", "Review", "Accountant", "Contact"];
function Header({ props }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 fixed top-0 bg-[#fff] w-full z-50">
      <div>
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
              className="ml-10 text-xl cursor-pointer px-2 py-1 hover:text-blue-900 hover:font-semibold"
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
            <a
              href="tel:+18888850124"
              className="text-xl md:text-4xl text-blue-600"
            >
              +1-888-885-0124
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
