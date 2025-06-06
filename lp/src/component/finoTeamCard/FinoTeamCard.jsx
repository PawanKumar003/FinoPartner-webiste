import React from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { AiOutlineCloseSquare } from "react-icons/ai";

import Button from "../button/Button";

const pricing = [
  "Deploy Only Resources",
  "Heavy Onboarding Fees",
  "One Accountant for Hundreds of Accounts",
  "Delegating Juniors and Substandard Resources",
  "Charge Huge Amounts Upfront",
  "Offer Just Bookkeeping Services",
];
const pricing1 = [
  "Delegating Resources with Control and Review in Your Hands",
  "100% Control Over Your Processes",
  "No Onboarding Fees or Upfront Payment Required",
  "Deploying One Dedicated Accountant for One Client",
  "Minimum 5+ Years of Experience in US Accounting",
  "Fixed Amounts as per Agreement",
  "One-Stop Solution for Accounting, Taxes, Payroll, etc.",
];

function FinoTeamCard({ setIsDialogOpen }) {
  return (
    <section className="price-section md:px-10 px-3">
      <div className=" mt-15 mb-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          How We Are Different from Others
        </h2>
        <p className="md:block hidden">
          The Fino Partners stand apart due to our quality, transparency, and
          dedicated service. Here’s what we offer as compared to other firms:
        </p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 md:w-2/3 gap-5 m-auto">
        <div className="">
          <div className="bg-[#0A6CFF] text-white p-5 rounded-t-2xl">
            <h3 className="text-2xl font-medium">Other Firms</h3>
          </div>
          <div className="bg-[#F2F5FD] pb-4 rounded-b-2xl md:h-[530px]">
            <ul className="p-4">
              {pricing.map((item, index) => (
                <li key={index} className="flex items-center mb-4">
                  <p>
                    <AiOutlineCloseSquare className="mr-2 text-3xl text-[#FF4E4E]" />
                  </p>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border border-[#0A6CFF] w-2/3 m-auto rounded-full p-3 text-4xl font-medium hover:bg-[#0A6CFF] hover:text-white text-center">
              <Button onClick={setIsDialogOpen} className="cursor-pointer">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#0F3BA2] text-white p-5 rounded-t-2xl">
            <h3 className="text-2xl font-medium">The Fino Partners Team</h3>
          </div>
          <div className="bg-[#F2F5FD] pb-4 rounded-b-2xl  md:h-[530px]">
            <ul className="p-4">
              {pricing1.map((item, index) => (
                <li key={index} className="flex items-center mb-4">
                  <p>
                    <IoIosCheckboxOutline className="mr-2 text-4xl w-[30px] h-[30px] text-[#0A6CFF]" />
                  </p>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border border-[#0A6CFF] w-2/3 m-auto rounded-full p-3 text-4xl font-medium hover:bg-[#0F3BA2] hover:text-white text-center">
              <Button onClick={setIsDialogOpen} className="cursor-pointer">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="overflow-x-auto md:overflow-visible">
        <div className="flex md:grid md:grid-cols-2 lg:w-2/3 gap-5 m-auto px-2 md:px-0">
          {/* Other Firms */}
          <div className="min-w-[90%] md:w-full shrink-1">
            <div className="bg-[#0A6CFF] text-white p-5 rounded-t-2xl">
              <h3 className="text-2xl font-medium">Other Outsourcing Firms</h3>
            </div>
            <div className="bg-[#F2F5FD] pb-4 rounded-b-2xl h-[530px] relative">
              <ul className="p-4">
                {pricing.map((item, index) => (
                  <li key={index} className="flex items-center mb-4">
                    <AiOutlineCloseSquare className="mr-2 text-3xl text-[#FF4E4E]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pulse-animation1 absolute bottom-7 left-[50%] transform translate-x-[-50%] border border-[#0A6CFF] w-2/3 m-auto rounded-full p-3 text-4xl font-medium hover:bg-[#0A6CFF] hover:text-white text-center">
                <Button onClick={setIsDialogOpen} className="cursor-pointer">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>

          {/* The Fino Partners Team */}
          <div className="min-w-[100%] md:w-full shrink-1">
            <div className="bg-[#0F3BA2] text-white p-5 rounded-t-2xl">
              <h3 className="text-2xl font-medium">The Fino Partners Team</h3>
            </div>
            <div className="bg-[#F2F5FD] pb-4 rounded-b-2xl h-[530px]">
              <ul className="p-4">
                {pricing1.map((item, index) => (
                  <li key={index} className="flex items-center mb-4">
                    <IoIosCheckboxOutline className="mr-2 text-4xl w-[30px] h-[30px] text-[#0A6CFF]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pulse-animation1 border border-[#0A6CFF] w-2/3 m-auto rounded-full p-3 text-4xl font-medium hover:bg-[#0F3BA2] hover:text-white text-center">
                <Button onClick={setIsDialogOpen} className="cursor-pointer">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinoTeamCard;
