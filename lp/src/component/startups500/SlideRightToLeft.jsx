import React from "react";
function SlideRightToLeft() {
  return (
    <section className="mt-8">
      <div className="lg:flex sm:block lg:items-center">
        <div className="md:text-6xl md:text-center text-4xl lg:text-5xl font-normal lg:w-1/2 text-center mb-3">
          Certified <span className="font-semibold">ISO</span>
        </div>
        <div className=" p-4 flex md:w-full overflow-hidden animate-slide-left bg-transparent">
          <img
            className="mr-4 h-[100px] min-w-[1700px]"
            src="https://thefinopartners.com/public/assets/reactimg/Security-logo-new.jpg"
            alt=""
          />
          <img
            className="h-[100px] min-w-[1700px]"
            src="https://thefinopartners.com/public/assets/reactimg/Security-logo-new.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SlideRightToLeft;
