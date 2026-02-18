import React from 'react';
import { FaStar } from 'react-icons/fa';
import GoogleReview from './GoogleReview';

function GoogleSlider({ setIsDialogOpen }) {
  return (
    <section className="md:px-10 py-10 w-full px-5 bg-[#041234]" id="Accountant">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="text-white">
            <h2 className="md:text-5xl text-3xl font-medium leading-[45px] md:leading-[60px] md:text-left text-center">
              Pool of Expert People Available for You
            </h2>
            <p className="md:block hidden">
              Access a large team of 250+ expert accountants ready to support your business. If you need help with bookkeeping, taxes,
              payroll, or financial advice, we have the right expert for you. Get the skills and experience you need without the trouble of
              hiring full-time staff. Expert help, now at your fingertips.
            </p>
            <div className="mt-15 lg:block hidden">
              <a
                onClick={setIsDialogOpen}
                target="_blank"
                className="pulse-animation1 cursor-pointer bg-[#0A6CFF] text-white md:px-20 px-10 py-4 text-xl font-medium rounded-lg hover:bg-blue-800"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
        <div className="md:p-10 p-5">
          <GoogleReview />
          <div className="mt-5 lg:hidden block w-full bg-[#0A6CFF] px-10 py-4 rounded-full text-center cursor-pointer">
            <a
              onClick={setIsDialogOpen}
              target="_blank"
              className=" pulse-animation1 cursor-pointer bg-[#0A6CFF] text-white md:px-20 text-2xl md:text-3xl font-medium rounded-full hover:bg-blue-800"
            >
              Book A Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleSlider;
