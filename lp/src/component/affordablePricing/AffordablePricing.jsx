import React from 'react';
import { IoIosCheckboxOutline } from 'react-icons/io';
import Button from '../button/Button';

const pricing = [
  'Accounting And Bookkeeping ',
  'Backlog Clearance',
  'Payroll Processing',
  'Cash Flow Management',
  'Budget Management ',
  'Year-End Billing',
  'Sales Tax Filing'
];
const pricing1 = [
  'Hire An Accountant for CPA Firm Part Time Or Full Time',
  'Minimum 5+ Years Of US Accounting Experience',
  'Quickbooks Excellence',
  'Payroll Expert',
  'MIS Reporting',
  'Fluent And Clear Communication',
  'Availability At Your Time Zone'
];
function AffordablePricing({ setIsDialogOpen }) {
  return (
    <section className="price-section md:px-10 px-3 scroll-mt-24" id="Pricing">
      <div className="text-4xl md:text-4xl font-bold text-center mt-15 mb-10">
        <h2>Services with Affordable Pricing</h2>
      </div>
      {/* <div className="grid md:grid-cols-2 md:w-2/3 gap-5 m-auto">
        <div className="">
          <div className="bg-[#0A6CFF] text-white p-5 rounded-t-2xl">
            <h3 className="text-2xl font-medium text-center">
              Services Offered for Business Owners
            </h3>
          </div>
          <div className="bg-[#F2F5FD] pb-4 rounded-b-2xl md:h-[500px]">
            <ul className="p-4">
              {pricing.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-xl mb-4 text-left"
                >
                  <p>
                    <IoIosCheckboxOutline className="mr-2 text-3xl text-[#0A6CFF]" />
                  </p>
                  {item}
                </li>
              ))}
            </ul>
            <div className="  text-center">
              <Button
                onClick={setIsDialogOpen}
                className="cursor-pointer p-3 text-4xl font-medium hover:bg-[#0A6CFF] hover:text-white border border-[#0A6CFF] w-2/3 m-auto rounded-full"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-[#0F3BA2] text-white p-5 rounded-t-2xl">
            <h3 className="text-2xl font-medium">
              Services Offered For Accounting Firm Owners
            </h3>
          </div>
          <div className="bg-[#F2F5FD] pb-4 rounded-b-2xl md:h-[500px]">
            <ul className="p-4">
              {pricing1.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-xl mb-4 text-left"
                >
                  <p>
                    <IoIosCheckboxOutline className="mr-2 text-3xl text-[#0A6CFF]" />
                  </p>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Button
                onClick={setIsDialogOpen}
                className="cursor-pointer p-3 text-4xl font-medium hover:bg-[#0A6CFF] hover:text-white border border-[#0A6CFF] w-2/3 m-auto rounded-full"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="md:grid md:grid-cols-2 lg:w-2/3 gap-5 m-auto overflow-x-auto">
        <div className="flex gap-4 px-2 md:px-0 w-[calc(100vw-2rem)] md:w-full">
          {/* First Card */}
          <div className="min-w-[90%] md:w-[100%] shrink-1">
            <div className="bg-[#0A6CFF] text-white p-5 rounded-t-2xl">
              <h3 className="text-2xl font-medium text-left">Services Offered for Business Owners</h3>
            </div>
            <div className="bg-[#F2F5FD] pb-4 rounded-b-2xl h-[550px] relative">
              <ul className="p-4">
                {pricing.map((item, index) => (
                  <li key={index} className="flex items-center text-xl mb-4 text-left">
                    <p>
                      <IoIosCheckboxOutline className="mr-2 text-3xl text-[#0A6CFF]" />
                    </p>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-center absolute bottom-7 left-[20%] transform translate-x-[-10%]  md:w-[280px]">
                <Button
                  onClick={setIsDialogOpen}
                  className="pulse-animation1 cursor-pointer p-3 text-4xl font-medium hover:bg-[#0A6CFF] hover:text-white border border-[#0A6CFF] w-full m-auto rounded-full"
                >
                  <p className="flex items-center justify-center">
                    <span className="text-[20px]"> Starting</span>&nbsp;$149/-
                  </p>
                </Button>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="min-w-[100%] md:w-full shrink-1">
            <div className="bg-[#0F3BA2] text-white p-5 rounded-t-2xl">
              <h3 className="text-2xl font-medium">Services Offered For Accounting Firm Owners</h3>
            </div>
            <div className="bg-[#F2F5FD] pb-4 rounded-b-2xl h-[550px] relative">
              <ul className="p-4">
                {pricing1.map((item, index) => (
                  <li key={index} className="flex items-center text-xl mb-4 text-left">
                    <p>
                      <IoIosCheckboxOutline className="mr-2 text-3xl text-[#0A6CFF]" />
                    </p>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-center absolute bottom-7 left-[20%] transform translate-x-[-10%]  md:w-[280px]">
                <Button
                  onClick={setIsDialogOpen}
                  className="pulse-animation1 cursor-pointer p-3 text-4xl font-medium hover:bg-[#0A6CFF] hover:text-white border border-[#0A6CFF] w-full m-auto rounded-full"
                >
                  <p className="flex items-center justify-center">
                    <span className="text-[20px]"> Starting</span>&nbsp;$12/Hour
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AffordablePricing;
