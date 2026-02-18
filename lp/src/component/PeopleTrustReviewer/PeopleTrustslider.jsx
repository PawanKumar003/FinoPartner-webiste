import React from 'react';
import { FaStar } from 'react-icons/fa';
import PeopleTrustReview from './PeopleTrustReview';

function PeopleTrustslider({ setIsDialogOpen }) {
  return (
    <section className="pt-5 w-full bg-[#ECF4FF] lg:bg-transparent pb-5 scroll-mt-24" id="Review">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#fff] md:p-10 p-5">
          <div className="text-black ">
            <h2 className="text-4xl md:text-5xl font-semibold md:leading-[60px] md:text-left text-center">
              Thousands of People Trust on our Services
            </h2>
            <p className="md:block hidden border-b border-gray-300 pb-5">
              More than thousands of business owners and CPA firms trust our services to deliver accurate, timely, and cost-effective
              accounting solutions. Join them and experience unparalleled financial management.
            </p>
            {/* <div className="mt-15">
              <a className="cursor-pointer bg-[#0A6CFF] text-white px-20 py-2 rounded-full">
                Book A Call
              </a>
            </div> */}
            <div className="flex items-center justify-start mt-5">
              <p className="text-[#FFBF0B] text-5xl font-medium border-r border-gray-500 pr-3 mr-3">4.9</p>
              <div className="">
                <p className="flex text-2xl mb-0 gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </p>
                <p className="text-[#000] text-xl mt-1">Avg. Clients Ratings</p>
              </div>
            </div>
            {/* <div className="text-center md:mt-15 lg:mt-8 mt-5">
              <a
                className="pulse-animation1 bg-[#0A6CFF] px-5 py-2 text-white rounded-lg text-2xl md:text-4xl font-medium cursor-pointer"
                onClick={setIsDialogOpen}
              >
                Book a Call
              </a>
            </div> */}
          </div>
        </div>
        <div className="md:p-10 p-3">
          <PeopleTrustReview />
        </div>
      </div>
    </section>
  );
}

export default PeopleTrustslider;
