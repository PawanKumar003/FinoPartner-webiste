import React from "react";

function MobileBanner() {
  return (
    <section
      className="p-4 pb-0 md:mt-23 mt-10 scroll-mt-24"
      style={{
        backgroundImage:
          "url('https://thefinopartners.com/public/assets/reactimg/mobile-Banner-section.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center">
        <h1 className="block lg:hidden text-2xl leading-[30px] text-[#041234] font-semibold">
          Outsourced Accounting and Tax Preparation Services
        </h1>
        <p className="block lg:hidden text-sm mt-2">
          All Your Accounting & Tax Needs for <b>Just $12/Hour</b>
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-2 lg:place-items-center gap-4 mt-4 lg:mt-0">
        <div>
          <img
            className="w-full h-full"
            src="https://thefinopartners.com/public/assets/reactimg/mobile-girl-img.png"
            alt=""
          />
        </div>
        <div className="lg:m-auto lg:text-center">
          <div className="hidden lg:block text-right lg:pr-20">
            <h1 className=" text-4xl leading-[40px] text-[#041234] font-semibold">
              Outsourced Accounting and Tax Preparation Services
            </h1>
            <p className=" text-sm mt-2">
              All Your Accounting & Tax Needs for <b>Just $12/Hour</b>
            </p>
          </div>
          <div className="border-3 lg:border-8 border-black-900 h-[300px] lg:h-100 lg:w-[500px] rounded-t-3xl overflow-hidden bg-white lg:m-auto lg:mt-5">
            <div className="rounded-t-2xl bg-black h-[25px] w-[100%] flex items-center justify-center">
              <div className="w-[40px] h-[5px] bg-[#8F8F8F] "></div>
            </div>
            <div className="p-1 text-center mt-2 relative">
              <img
                src="https://thefinopartners.com/public/assets/reactimg/mobile-banner-head.png"
                alt=""
              />
              {/* <p className="py-1 rounded-full bg-blue-300 text-[10px] font-semibold">
              Best LinkedIn Profile Score
            </p>
            <div className="absolute top-[-8px] left-1">
              <img
                class="w-[20px] h-[20px] rounded-full m-auto"
                alt="ben white"
                src="https://thefinopartners.com/public/assets/email-img/bharat-signature.png"
              ></img>
            </div> */}
            </div>
            <div className=" h-full w-full p-4 slide-bottom-top overflow-hidden pb-4">
              <img
                src="https://thefinopartners.com/public/assets/reactimg/mobile-review-Scroll-profile.webp"
                alt="logo"
              />
              <img
                src="https://thefinopartners.com/public/assets/reactimg/mobile-review-Scroll-profile.webp"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileBanner;
