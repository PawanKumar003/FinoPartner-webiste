import React, { useState, useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const PeopleTrustReview = () => {
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1
    }
  });

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  useEffect(() => {
    const slider = instanceRef.current;
    const container = containerRef.current;

    if (!slider || !container) return;

    const startAutoplay = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          slider.next();
        }, 3000);
      }
    };

    const stopAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAutoplay();

    const handleMouseEnter = () => {
      if (!isMobile) stopAutoplay(); // pause only on desktop
    };
    const handleMouseLeave = () => {
      if (!isMobile) startAutoplay();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      stopAutoplay();
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [instanceRef, isMobile]);

  const desktopSlides = ['google-reviews-box-1.png', 'google-reviews-box-2.png', 'google-reviews-box-3.png', 'google-reviews-box-4.png'];

  const mobileSlides = ['google-reviews-1.png', 'google-reviews-2.png', 'google-reviews-3.png', 'google-reviews-4.png'];

  const slides = isMobile ? mobileSlides : desktopSlides;

  return (
    <>
      {/* <div className="md:block hidden">
        <div
          ref={(node) => {
            sliderRef(node);
            containerRef.current = node;
          }}
          className="keen-slider overflow-hidden rounded-xl shadow-lg bg-white "
        >
          <div className="keen-slider__slide">
            <div className="">
              <img
                className="w-full md:h-[350px]"
                src="https://thefinopartners.com/public/assets/reactimg/google-reviews-box-1.png"
                alt="Keerti"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="">
              <img
                className="w-full md:h-[350px]"
                src="https://thefinopartners.com/public/assets/reactimg/google-reviews-box-2.png"
                alt="Keerti"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="">
              <img
                className="w-full md:h-[350px]"
                src="https://thefinopartners.com/public/assets/reactimg/google-reviews-box-3.png"
                alt="Keerti"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="">
              <img
                className="w-full md:h-[350px]"
                src="https://thefinopartners.com/public/assets/reactimg/google-reviews-box-4.png"
                alt="Keerti"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden block overflow-hidden">
        <div
          ref={(node) => {
            sliderRef(node);
            containerRef.current = node;
          }}
          className="keen-slider  rounded-xl shadow-lg bg-white "
        >
          <div className="keen-slider__slide">
            <div className="">
              <img
                className="w-full md:h-[350px]"
                src="https://thefinopartners.com/public/assets/reactimg/google-reviews-1.png"
                alt="Keerti"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="">
              <img
                className="w-full md:h-[350px]"
                src="https://thefinopartners.com/public/assets/reactimg/google-reviews-2.png"
                alt="Keerti"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="">
              <img
                className="w-full md:h-[350px]"
                src="https://thefinopartners.com/public/assets/reactimg/google-reviews-3.png"
                alt="Keerti"
              />
            </div>
          </div>
          <div className="keen-slider__slide">
            <div className="">
              <img
                className="w-full md:h-[350px]"
                src="https://thefinopartners.com/public/assets/reactimg/google-reviews-4.png"
                alt="Keerti"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="overflow-hidden">
        <div
          ref={(node) => {
            sliderRef(node);
            containerRef.current = node;
          }}
          className="keen-slider rounded-xl shadow-lg bg-white"
        >
          {slides.map((src, index) => (
            <div className="keen-slider__slide" key={index}>
              <img
                className="w-full md:h-[300px]"
                src={`https://thefinopartners.com/public/assets/reactimg/${src}`}
                alt={`review-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PeopleTrustReview;
