import React from "react";

function CompleteAccountingServices({ setIsDialogOpen }) {
  return (
    <section className="card-section mt-10 bg-[#ECF4FF] py-10 md:px-10 px-5">
      <div className="text-center lg:w-2/3 m-auto x">
        <h2 className="text-2xl md:text-5xl font-semibold md:leading-[60px]">
          Complete Accounting Services for Every Business Need
        </h2>
        <p className="md:block hidden">
          If you're a small business or a CPA/accounting firm in the USA, our
          customized services can help you manage your accounting efficiently,
          with accuracy and compliance at every step.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3 2xl:w-2/3 m-auto mt-10">
        <div
          onClick={() => setIsDialogOpen(true)}
          className="md:h-[208px] h-[170px] w-[100%] cursor-pointer px-2 flex items-center"
          style={{
            backgroundImage:
              "url('https://thefinopartners.com/public/assets/reactimg/Accounting-Services-box.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="font-medium text-center text-white justify-center text-3xl leading-[40px]">
            Accounting Services for Businesses
          </p>
        </div>
        <div
          onClick={() => setIsDialogOpen(true)}
          className="md:h-[208px] h-[170px] w-[100%] cursor-pointer px-2 flex items-center"
          style={{
            backgroundImage:
              "url('https://thefinopartners.com/public/assets/reactimg/CPA-Accounting-Box.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <p className="font-medium  text-white text-center text-3xl leading-[40px]">
            Accounting Services for CPA & Accounting Firms
          </p>
        </div>
      </div>
    </section>
  );
}

export default CompleteAccountingServices;
