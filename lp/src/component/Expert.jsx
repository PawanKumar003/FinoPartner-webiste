import React from "react";

function Expert() {
  return (
    <section className=" text-white mt-15 md:px-10">
      <div className="text-center lg:w-1/2 m-auto text-black">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Schedule a Call with an Expert
        </h2>
        <p className="mb-8 md:block hidden">
          Book a call with one of our experts today. It’s quick and easy. Call
          us and we’ll help you with your questions and needs. Get clear advice,
          simple solutions, and friendly support, all in one call.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-5 m-auto">
        <div
          className=" text-center p-5 rounded-2xl"
          style={{
            backgroundImage:
              "url('https://thefinopartners.com/public/assets/reactimg/Ben-White-blu-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            className="w-[85px] h-[85px] rounded-full m-auto"
            src="https://thefinopartners.com/public/assets/email-img/bharat-signature.png"
            alt="ben white"
          />
          <p className="text-2xl font-medium mt-4 mb-3">Ben White</p>
          <p className="mt-[-10px]">Director of Growth</p>
          <div className="mt-5">
            <a
              className="pulse-animation1 px-5 py-2 rounded-full bg-blue-900 text-white"
              href="https://calendly.com/ben-thefinopartners/30min"
              target="_blank"
            >
              Book a Call
            </a>
          </div>
        </div>
        <div
          className=" text-center p-5 rounded-2xl"
          style={{
            backgroundImage:
              "url('https://thefinopartners.com/public/assets/reactimg/Ben-White-orng-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img
            className="w-[85px] h-[85px] rounded-full m-auto"
            src="https://www.thefinopartners.com/public/assets/reactimg/Steve-Martin.png"
            alt="ben white"
          />
          <p className="text-2xl font-medium mt-4 mb-3">Steve Martin</p>
          <p className="mt-[-10px]">Director of Strategy</p>
          <div className="mt-5">
            <a
              className="pulse-animation1 px-5 py-2 rounded-full bg-blue-900 text-white"
              href="https://calendly.com/hello-thefinopartners/rr"
              target="_blank"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expert;
