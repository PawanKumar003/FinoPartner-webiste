import React from "react";

function Industries() {
  return (
    <section className="md:px-20 px-0 mt-15 bg-[#ECF4FF] py-10">
      <div className="text-center md:w-2/3 m-auto md:mb-10 mb-5">
        <h2 className="md:text-4xl text-3xl font-semibold">
          30+ Industries We Serve
        </h2>
        <p className="md:block hidden">
          We provide specialized accounting services for businesses as well as
          CPA firms across more than 10+ industries, bringing customized
          solutions that meet all the different financial needs of each sector.
        </p>
      </div>
      <div className=" flex-wrap gap-5 justify-center md:flex hidden">
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          CPA & Accounting Firms
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          Real Estate
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          Healthcare
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          Hospitality
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          Retail
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          Legal & Professional Services
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          Construction
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          Technology & Startups
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          Logistics & Transportation
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          Saas Startups
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          FinTech Startups
        </a>
        <a className="bg-[#D3D3D3] rounded-full px-10 py-2 text-[#4D4E50]">
          AI & Machine Learning
        </a>
      </div>
      <div className="md:hidden block">
        <img
          src="https://thefinopartners.com/public/assets/reactimg/indusries.webp"
          alt="indusries"
        />
      </div>
    </section>
  );
}

export default Industries;
