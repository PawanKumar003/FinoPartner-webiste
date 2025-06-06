import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

function Footer() {
  return (
    <section
      className=" scroll-mt-24 footer md:px-10 px-4 py-5 bg-[#0f3ba2] text-white md:mt-15 mt-5 mb-10 md:mb-0"
      id="Contact"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1.3fr] gap-10">
        <div>
          <h2 className="text-3xl font-semibold">About us</h2>
          <p className="pb-4">
            Fino Partners is a leading financial consultancy based in the USA,
            specializing in optimizing accounting and tax strategies for
            businesses. Our expert team provides tailored advice to help clients
            maximize resources efficiently. With a deep understanding of finance
            and tax regulations, we empower clients to make informed decisions
            and achieve financial success.
          </p>
          <div className="lg:flex block items-center gap-5">
            <div className="flex items-center border border-gray-50 px-2 mb-5">
              <div className="mr-5 ">
                <img
                  className="rounded-full h-[60px] w-[60px]"
                  src="https://thefinopartners.com/public/assets/images/USA.webp"
                  alt="usa"
                />
              </div>
              <div>
                <p className="text-xl font-semibold">Head Office:</p>
                <p>
                  16192, Coastal Highway <br />
                  Lewes Sussex Delaware 19958
                </p>
              </div>
            </div>
            <div className="flex items-center border border-gray-50 px-2 mb-5">
              <div className="mr-5 ">
                <img
                  className="rounded-full h-[60px] w-[60px]"
                  src="https://thefinopartners.com/public/assets/images/USA.webp"
                  alt="usa"
                />
              </div>
              <div>
                <p className="text-xl font-semibold">USA Office:</p>
                <p>
                  401 North Michigan Avenue <br />
                  STE 1200, Chicago, IL 60611
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <p className="flex items-center tex-xl">
            <MdOutlineMailOutline className="text-3xl mr-3" />{" "}
            hello@thefinopartners.com
          </p>
          <p>
            <a href="tel:+18888850124" className="flex items-center text-xl">
              <IoIosCall className="text-3xl mr-3" /> +1-888-885-0124
            </a>
          </p>
          <h2 className="text-2xl font-medium mt-5">Head Office:</h2>
          <p className="mb-2">
            Fino Partners Group INC 16192, <br />
            Coastal Highway Lewes Sussex Delaware 19958
          </p>
          <div>
            <img
              src="https://thefinopartners.com/public/assets/images/payment gateway-img.png"
              alt="gateway"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
