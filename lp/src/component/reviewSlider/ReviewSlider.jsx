import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaStar } from "react-icons/fa";

const ReviewSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      //   pauseOnMouseEnter: true,
    },
    created: (slider) => {
      setInterval(() => {
        slider.next();
      }, 3000); // 3 second delay
    },
  });

  return (
    <div
      ref={sliderRef}
      className="keen-slider overflow-hidden rounded-xl shadow-lg bg-white"
    >
      <div className="keen-slider__slide">
        <div className="border border-gray-400 p-2 rounded-xl">
          <div className="flex justify-between items-center md:pr-5">
            <div className="">
              <img
                className="w-full h-full"
                src="https://www.startupfino.com/frontend/assets/usimage/3-Ecocory-logo.png"
                alt=""
              />
            </div>
            <div className="">
              <p className="flex text-xl">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </p>
            </div>
          </div>
          <div className="px-5 mt-2">
            <p>
              StartupFino has been invaluable to our growth, providing expert
              tax planning and payroll management that have significantly
              optimized our financial operations. They are the firm to trust if
              you want your startup to grow without worries.
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-4">
              <img
                className="w-[80px] h-[80px] rounded-full"
                src="https://www.startupfino.com/frontend/assets/usimage/3-Michael-Thompson.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="bold text-2xl">Ecocory Solutions Group</p>
              <p>Michael Thompson, Chief Financial Officer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="border border-gray-400 p-2 rounded-xl">
          <div className="flex justify-between items-center md:pr-5">
            <div className="">
              <img
                className="w-full h-full"
                src="https://www.startupfino.com/frontend/assets/usimage/3-Ecocory-logo.png"
                alt=""
              />
            </div>
            <div className="">
              <p className="flex text-xl">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </p>
            </div>
          </div>
          <div className="px-5 mt-2">
            <p>
              StartupFino has been invaluable to our growth, providing expert
              tax planning and payroll management that have significantly
              optimized our financial operations. They are the firm to trust if
              you want your startup to grow without worries.
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-4">
              <img
                className="w-[80px] h-[80px] rounded-full"
                src="https://www.startupfino.com/frontend/assets/usimage/3-Michael-Thompson.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="bold text-2xl">Ecocory Solutions Group</p>
              <p>Michael Thompson, Chief Financial Officer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="border border-gray-400 p-2 rounded-xl">
          <div className="flex justify-between items-center md:pr-5">
            <div className="">
              <img
                className="w-full h-full"
                src="https://www.startupfino.com/frontend/assets/usimage/3-Ecocory-logo.png"
                alt=""
              />
            </div>
            <div className="">
              <p className="flex text-xl">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </p>
            </div>
          </div>
          <div className="px-5 mt-2">
            <p>
              StartupFino has been invaluable to our growth, providing expert
              tax planning and payroll management that have significantly
              optimized our financial operations. They are the firm to trust if
              you want your startup to grow without worries.
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="mr-4">
              <img
                className="w-[80px] h-[80px] rounded-full"
                src="https://www.startupfino.com/frontend/assets/usimage/3-Michael-Thompson.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="bold text-2xl">Ecocory Solutions Group</p>
              <p>Michael Thompson, Chief Financial Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
