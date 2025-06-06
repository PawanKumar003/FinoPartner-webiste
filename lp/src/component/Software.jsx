import React from "react";

function Software() {
  return (
    <section className=" mt-15 text-center md:px-20 px-2">
      <div>
        <h2 className="text-[18px] md:text-4xl font-semibold">
          Softwares We Use for Providing Outsourced Accounting Services
        </h2>
        <p className="md:block hidden">
          We use the latest, and most trusted accounting software to guarantee
          efficient, accurate, and secure service for each and every one of our
          clients. We use technology to make your financial processes more
          efficient and error-free.
        </p>
      </div>
      <div className="text-center">
        <img
          className="mb-5 m-auto"
          src="https://thefinopartners.com/public/assets/reactimg/Software-logo-1.png"
          alt="Company-Trust-us-logo"
        />
        <img
          className="m-auto"
          src="https://thefinopartners.com/public/assets/reactimg/Software-logo-2.png"
          alt="Company-Trust-us-logo"
        />
      </div>
    </section>
  );
}

export default Software;
