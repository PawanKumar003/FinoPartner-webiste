import React from 'react';
function NewSlideRightToLeft() {
  return (
    <section className="mt-8">
      <div className="lg:flex sm:block lg:items-center">
        {/* <div className="md:text-6xl md:text-center text-4xl lg:text-5xl font-normal lg:w-1/2 text-center mb-3">
          Certified <span className="font-semibold">ISO</span>
        </div> */}
        <div className=" p-4 flex md:w-full overflow-hidden animate-slide-left bg-transparent">
          <img className="mr-4 h-full min-w-[1250px]" src="https://thefinopartners.com/public/assets/reactimg/role-logo-cpa.png" alt="" />
          <img className="h-full min-w-[1250px]" src="https://thefinopartners.com/public/assets/reactimg/role-logo-cpa.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default NewSlideRightToLeft;
