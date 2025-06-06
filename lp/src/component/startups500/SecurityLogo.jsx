import React from "react";

function SecurityLogo() {
  return (
    <section className="mt-8 px-2">
      <div className="flex items-center">
        <div className="md:text-6xl md:text-center text-2xl lg:text-5xl font-normal lg:w-1/2 text-left mb-3 pr-3">
          Certified <span className="font-semibold">ISO</span>
        </div>
        <div className="p-4 flex md:w-full overflow-hidden animate-slide-left bg-transparent">
          <img
            className="mr-4 h-[60px] min-w-[500px]"
            src="https://thefinopartners.com/public/assets/reactimg/Certified-ISO-img.png"
            alt=""
          />
          <img
            className="h-[60px] min-w-[500px]"
            src="https://thefinopartners.com/public/assets/reactimg/Certified-ISO-img.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SecurityLogo;
