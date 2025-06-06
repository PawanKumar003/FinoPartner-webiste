import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function StrengthSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
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
      <div className="keen-slider__slide">
        <div className="border border-gray-400 p-2 rounded-xl">
          <img
            className="w-full md:h-[300px] h-full"
            src="https://thefinopartners.com/public/assets/reactimg/Our-Strength-img-Mask-group-1.png"
            alt="Keerti"
          />
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="border border-gray-400 p-2 rounded-xl">
          <img
            className="w-full md:h-[300px] h-full"
            src="https://www.thefinopartners.com/public/assets/reactimg/our-Strength-img-Mask group.png"
            alt="Keerti"
          />
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="border border-gray-400 p-2 rounded-xl">
          <img
            className="w-full md:h-[300px] h-full"
            src="https://www.thefinopartners.com/public/assets/reactimg/Our-Strength-img-Mask-group-3.png"
            alt="Keerti"
          />
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="border border-gray-400 p-2 rounded-xl">
          <img
            className="w-full md:h-[300px] h-full"
            src="https://www.thefinopartners.com/public/assets/reactimg/Our-Strength-img-Mask-group-5.png"
            alt="Keerti"
          />
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="border border-gray-400 p-2 rounded-xl">
          <img
            className="w-full md:h-[300px] h-full"
            src="https://www.thefinopartners.com/public/assets/reactimg/Our-Strength-img-Mask-group-6.png"
            alt="Keerti"
          />
        </div>
      </div>
    </div>
  );
}

export default StrengthSlider;
