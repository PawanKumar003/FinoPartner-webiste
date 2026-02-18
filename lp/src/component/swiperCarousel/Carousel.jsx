import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      speed={1000} // animation speed (1 sec)
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
    >
      <SwiperSlide>
        <img
          src="https://thefinopartners.com/public/assets/reactimg/Security-logo-new.jpg"
          alt="Slide 1"
          className="w-full h-[500px] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://thefinopartners.com/public/assets/reactimg/Security-logo-new.jpg"
          alt="Slide 2"
          className="w-full h-[500px] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/images/slide3.jpg" alt="Slide 3" className="w-full h-[500px] object-cover" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
