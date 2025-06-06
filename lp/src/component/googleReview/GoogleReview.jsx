import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const GoogleReview = () => {
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
      className="keen-slider overflow-hidden rounded-xl shadow-lg bg-white w-full"
    >
      <div className="keen-slider__slide md:w-full">
        <div className="border border-gray-400 p-2 rounded-xl">
          <img
            className=""
            src="https://thefinopartners.com/public/assets/reactimg/Abhishek-profile-img.png"
            alt="Keerti"
          />
        </div>
      </div>
      <div className="keen-slider__slide md:w-full">
        <div className="border border-gray-400 p-2 rounded-xl">
          <img
            className=""
            src="https://thefinopartners.com/public/assets/reactimg/Ishita-profile-img.png"
            alt="Keerti"
          />
        </div>
      </div>
      <div className="keen-slider__slide md:w-full">
        <div className="border border-gray-400 p-2 rounded-xl">
          <img
            className=""
            src="https://thefinopartners.com/public/assets/reactimg/Keerti-profile-img.png"
            alt="Keerti"
          />
        </div>
      </div>
      <div className="keen-slider__slide md:w-full">
        <div className="border border-gray-400 p-2 rounded-xl">
          <img
            className=""
            src="https://thefinopartners.com/public/assets/reactimg/Nirakh-Jain-profile-img.png"
            alt="Keerti"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleReview;
