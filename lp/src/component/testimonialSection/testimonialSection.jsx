import React from "react";
import { FaStar } from "react-icons/fa";
import Testimonial from "../slider/Testimonial";

function TestimonialSection() {
  return (
    <section className="md:px-10 pt-5 w-full px-5 bg-[#041234] ">
      <div className="grid grid-cols-2">
        <div>
          <div className="text-white">
            <p>Testimonial</p>
            <h2 className="text-5xl">
              Trusted By The Genius People With Cosult
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
              ligula eu orci finibus blandit sit amet vel dolor.
            </p>
            <div className="flex items-center">
              <p className="text-3xl font-medium border-r border-gray-500 pr-3 mr-3">
                4.98
              </p>
              <div className="">
                <p className="flex text-2xl mb-0">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </p>
                <p className="">Avg. Clients Ratings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <Testimonial />
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
