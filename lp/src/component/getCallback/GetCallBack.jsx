import React, { useState } from "react";
import Input from "../inputs/input";
import Button from "../button/Button";
import { submitData } from "../SubmitData";
import { useLocation } from "react-router-dom";

function GetCallBack({ sourceId }) {
  const location = useLocation();
  const slug = location.pathname;
  const [showError, setShowErr] = useState("");
  const [data, setData] = useState({
    email: "",
    mobile: "",
    name: "",
    business: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submiHandle = (e) => {
    e.preventDefault();
    if (
      data.mobile.length === 10 &&
      /^[0-9]{10}$/.test(data.mobile) &&
      data.email.includes("@") &&
      data.name.length > 0 &&
      data.business.length > 0
    ) {
      submitData(
        data.name,
        data.email,
        data.mobile,
        data.business,
        sourceId,
        slug
      );
      setData({ name: "", email: "", mobile: "", business: "" }); // ← Clear form fields
      setShowErr("");
      // window.location.href = "https://calendly.com/ben-thefinopartners/30min";
    } else {
      setShowErr("Please Fill the Value");
    }
  };

  return (
    <section
      className="mt-15 get-a-call-back-section m-auto px-10 py-5  text-white"
      style={{
        backgroundImage:
          "url('https://thefinopartners.com/public/assets/reactimg/Get-a-Call-Back-bg.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2 ">
          <h2 className="text-4xl">Get a Call Back</h2>
          <p>
            Request a callback from us for more inquiry, by filling out the
            details asked ahead
          </p>
        </div>
        <div className=" md:flex items-center gap-4 md:col-span-8 ">
          <form
            className="lg:flex items-center gap-4 w-full"
            onSubmit={submiHandle}
          >
            <div className="relative w-full lg:w-1/2">
              <Input
                type="text"
                name="name"
                placeHolder="Enter Name"
                onChange={handleChange}
                value={data.name}
                className="w-full h-12 border border-[#8b929d] rounded-sm mb-4"
                inputClassName={`outline-0  border-0`}
              />
            </div>
            <div className="relative w-full lg:w-1/2">
              <Input
                type="email"
                name="email"
                className="w-full h-12 border border-[#8b929d] rounded-sm mb-4 "
                inputClassName={`outline-0  border-0`}
                placeholder="Email Id"
                onChange={handleChange}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                value={data.email}
              />
              {data.email?.length === 0 && data.mobile?.length === 0 ? (
                <p className="text-sm text-white absolute mb-[-5px]">
                  {showError}
                </p>
              ) : (
                ""
              )}
              {data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && (
                <p className="text-sm text-white absolute mb-[-5px]">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="relative w-full lg:w-1/2">
              <Input
                type="tel"
                name="mobile"
                className="w-full h-12 border border-[#8b929d] rounded-sm mb-4"
                inputClassName={`outline-0  border-0`}
                placeholder="Mobile No."
                pattern="[0-9]{10}"
                maxLength="10"
                value={data.mobile}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[0-9]*$/.test(value) && value.length <= 10) {
                    handleChange(e);
                  }
                }}
              />
              {data.mobile && data.mobile.length !== 10 && (
                <p className="text-sm text-white absolute mb-[-5px]">
                  Please enter a valid 10-digit number.
                </p>
              )}
            </div>

            <div className="relative w-full lg:w-1/2">
              <Input
                type="text"
                name="business"
                placeHolder="Enter Business Name"
                onChange={handleChange}
                value={data.business}
                className="w-full h-12 border border-[#8b929d] rounded-sm mb-4"
                inputClassName={`outline-0  border-0`}
              />
            </div>

            <Button
              className={`pulse-animation1 rounded-sm w-full lg:w-1/2 h-12 bg-[#0A6CFF] hover:bg-blue-400 cursor-pointer mb-4 `}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetCallBack;
