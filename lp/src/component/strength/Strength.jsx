import React, { useState } from "react";
import StrengthSlider from "./StrengthSlider";

function Strength({ setIsDialogOpen }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="md:p-10 p-5 mt-10 bg-[#041234] text-white ">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] place-items-center">
        <div className="p-4 lg:m-auto md:m-auto mr-5 w-[100%]  md:w-[500px] order-2 lg:order-1">
          {/* <div>
            <img
              src="https://www.thefinopartners.com/public/assets/reactimg/our-Strength-img-Mask group.png"
              alt=""
              style={{ width: "100%," }}
            />
          </div> */}
          <StrengthSlider />
          <div className="mt-10 lg:hidden block">
            <a
              onClick={setIsDialogOpen}
              className="pulse-animation1 bg-blue-700 rounded-full px-5 py-4 font-medium md:text-2xl cursor-pointer hover:bg-blue-900"
            >
              Get Consultation by Expert
            </a>
          </div>
        </div>
        <div className="md:pr-4 order-1 lg:order-2">
          <h2 className="text-3xl font-semibold md:text-5xl md:text-left text-center">
            Our Strength & Network
          </h2>
          <p className="md:hidden block ">
            At The Fino Partners, our strength comes from deep connections
            across the finance and
            {!isExpanded && (
              <span
                className="text-blue-600 font-semibold cursor-pointer ml-1"
                onClick={toggleReadMore}
              >
                Read More...
              </span>
            )}
          </p>
          {isExpanded && (
            <p className="mt-2">
              startup world. Over 15+ years, we have built trusted relationships
              with business owners, CFOs, investors, and tech partners. This
              strong network helps us stay updated, solve complex problems
              faster, and open new opportunities for our clients. So, if you
              need expert advice, funding support, or reliable compliance help,
              we use our wide network to make it happen. With 250+ professionals
              connected, you’re never alone in your growth.
              <span
                className="text-blue-600 font-semibold cursor-pointer ml-2"
                onClick={toggleReadMore}
              >
                Read Less
              </span>
            </p>
          )}
          <p className="md:block hidden">
            At The Fino Partners, our strength comes from deep connections
            across the finance and startup world. Over 15+ years, we have built
            trusted relationships with business owners, CFOs, investors, and
            tech partners. This strong network helps us stay updated, solve
            complex problems faster, and open new opportunities for our clients.
            So, if you need expert advice, funding support, or reliable
            compliance help, we use our wide network to make it happen. With
            250+ professionals connected, you’re never alone in your growth.
          </p>

          <div className="mt-10 lg:block hidden">
            <a
              onClick={setIsDialogOpen}
              className="pulse-animation1 bg-blue-700 rounded-full px-5 py-4 font-medium text-xl cursor-pointer hover:bg-blue-900"
            >
              Get Consultation by Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strength;
