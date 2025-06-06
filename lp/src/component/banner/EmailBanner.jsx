import React from "react";
// import Input from "../inputs/input";
// import Button from "../button/Button";

function EmailBanner({ setIsDialogOpen }) {
  return (
    <section
      id="Home"
      className="bg-[#060682]  p-4 md:mt-23 mt-10 scroll-mt-24"
      style={{
        backgroundImage:
          "url('https://thefinopartners.com/public/assets/reactimg/hiro-section-1.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1.3fr] gap-4">
        <div className="p-4 text-2xl bold md:pr-15 text-white 2xl:w-full">
          <h1 className="md:text-5xl text-3xl font-semibold md:leading-[60px]">
            Accounting <span className="md:inline hidden">& Tax</span> Services
            for{" "}
            <span className="text-[#EEBF11] font-extrabold">
              CPA & Accounting Firms
            </span>
          </h1>
          <p className="mt-4 text-xl  text-[#EEBF11] p-2 bg-gradient-to-r from-[#07266C] from-50% via-[#0E45C1] via-100% shadow-[0px_4px_0px_-1px_rgba(0,_0,_0,_1)]">
            Outsource All Your Accounting Needs for
            <span className="md:text-4xl font-semibold"> Just $12/Hour</span>
          </p>
          <p className=" text-[18px] text-gray-300 font-normal mt-7 md:block hidden">
            Get expert accounting and bookkeeping help at just $12/hour. Save
            time, cut costs, and focus on growing your business while we handle
            your books, payroll, taxes and financial reports.
          </p>

          <div className="mt-10 modalopen thanks ki jagah clendly use krna hai book a call modal open karwana hai">
            <a
              onClick={setIsDialogOpen}
              target="_blank"
              className="pulse-animation1 cursor-pointer bg-[#0A6CFF] px-5 py-2 text-white rounded-full text-xl font-medium"
            >
              Book a Call
            </a>
          </div>
        </div>
        <div className="md:grid-cols-2 lg:hidden px-4 md:mr-15 ">
          {/* <div className="">
            <form className="rounded-xl bg-white p-4">
              <div className="text-center text-xl font-semibold mb-4">
                <h2>Consultation by Expert</h2>
              </div>

              <Input
                type="email"
                name="email"
                placeholder="Email ID"
                className="mb-3"
              />
              <Input
                type="number"
                name="number"
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder="Enter Number"
                className="mb-3"
                // onChange={(e) => {
                //     const value = e.target.value;
                //     if (/^[0-9]*$/.test(value) && value.length <= 10) {
                //       handleChange(e);
                //     }
                //   }}
              />
              <div className="text-center">
                <Button className="bg-blue-500 hover:bg-blue-700 cursor-pointer px-4 w-full  p-2 rounded-sm text-white">
                  Continue
                </Button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default EmailBanner;
