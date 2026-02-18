import React, { useState } from 'react';
import Input from '../inputs/input';
import Button from '../button/Button';
import { submitData } from '../SubmitData';
import { useLocation } from 'react-router';

function GoogleAdsBanner({ setIsDialogOpen, sourceId }) {
  const [data, setData] = useState({
    email: '',
    mobile: '',
    name: '',
    business: ''
  });
  const location = useLocation();
  const slug = location.pathname;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log('form submitted');
    if (
      data.mobile.length === 10 &&
      /^[0-9]{10}$/.test(data.mobile) &&
      data.email.includes('@') &&
      data.name.length > 0 &&
      data.business.length > 0
    ) {
      submitData(data.name, data.email, data.mobile, data.business, sourceId, slug);
      setData({ email: '', mobile: '', name: '', business: '' }); // ← Clear form fields
      // window.location.href = "https://calendly.com/ben-thefinopartners/30min";
      // setIsOpen(true);
    }
  };
  return (
    <section
      id="Home"
      className="bg-[#07267b]  p-4 md:mt-23 mt-10 scroll-mt-24"
      // style={{
      //   backgroundImage: "url('https://thefinopartners.com/public/assets/reactimg/hiro-section-1.webp')",
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover'
      // }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1.3fr] gap-4 items-center">
        <div className="p-4 text-2xl bold md:pr-15 text-white 2xl:w-full">
          <h1 className="md:text-5xl text-3xl font-semibold md:leading-[70px]">
            Outsourced <span className="md:inline hidden">Bookkeeping & Tax</span> Services for Businesses &{' '}
            <span className="text-[#EEBF11] font-extrabold">CPA Firms</span>
          </h1>
          <p className="mt-4 text-4xl leading-13 text-[#EEBF11] p-2 bg-gradient-to-r from-[#07266C] from-50% via-[#0E45C1] via-100% shadow-[0px_4px_0px_-1px_rgba(0,_0,_0,_1)]">
            <span className="md:text-4xl font-semibold"> Hire a Tax Accountant @ $12 Per Hour</span>
          </p>
          <p className=" text-[18px] text-gray-300 font-normal mt-7 md:block hidden">
            Get expert accounting and bookkeeping help at just $12/hour. Save time, cut costs, and focus on growing your business while we
            handle your books, payroll, taxes and financial reports.
          </p>

          <div className="mt-10 modalopen">
            <a
              onClick={setIsDialogOpen}
              target="_blank"
              className="pulse-animation1 cursor-pointer bg-[#0A6CFF] px-5 py-2 text-white rounded-full text-2xl font-medium"
            >
              Book a Call
            </a>
          </div>
        </div>
        <div className="hidden lg:block px-4 md:mr-15 ">
          <div className="w-3/4 mx-auto">
            <form className="rounded-xl bg-white p-4 " onSubmit={handleSubmit1}>
              <div className="text-center text-2xl font-semibold mb-4">
                <h2>Consultation by Expert</h2>
              </div>

              <div className="mb-5">
                <Input type="text" name="name" placeHolder="Enter Name" onChange={handleChange} value={data.name} />
                {/* {data.name.length === 0 && (
              <p className="text-sm text-red-600">
                Please enter a valid name.
              </p>
            )} */}
              </div>
              <div className="mb-5">
                <Input
                  type="email"
                  name="email"
                  placeHolder="Enter Email ID"
                  onChange={handleChange}
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  value={data.email}
                />
                {data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && (
                  <p className="text-sm text-red-600 ">Please enter a valid email address.</p>
                )}
              </div>
              <div className="mb-5">
                <Input
                  type="tel"
                  name="mobile"
                  placeHolder="Enter Mobile No."
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
                {data.mobile && data.mobile.length !== 10 && <p className="text-sm text-red-600 ">Please enter a valid 10-digit number.</p>}
              </div>
              <div className="mb-5">
                <Input type="text" name="business" placeHolder="Enter Business Name" onChange={handleChange} value={data.business} />
              </div>

              <div className="text-center">
                <Button
                  type={'submit'}
                  className={`pulse-animation1 bg-blue-950 text-2xl text-white px-8 py-3 rounded-full cursor-pointer w-full hover:bg-blue-700`}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleAdsBanner;
